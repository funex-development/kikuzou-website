import test from "node:test";
import assert from "node:assert/strict";
import { createLegacyImageHandler } from "../scripts/legacy-images-worker.mjs";

const origin = "https://www.matsumoto-kikuzou.com";
const images = ["/images/header_logo_new.png", "/images/きのこ.webp"];
const handler = createLegacyImageHandler(images);

function fixture() {
  const requests = [];
  return {
    requests,
    env: { ASSETS: { async fetch(request) {
      requests.push(request);
      return new Response(request.method === "HEAD" ? null : "image bytes", {
        headers: { "Content-Type": "image/png", ETag: '"original"' },
      });
    } } },
  };
}

test("serves an existing local image through the old Next image URL", async () => {
  const { env, requests } = fixture();
  const response = await handler.fetch(new Request(`${origin}/_next/image?url=%2Fimages%2Fheader_logo_new.png&w=256&q=75`), env);
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "image bytes");
  assert.equal(requests[0].url, `${origin}/images/header_logo_new.png`);
  assert.equal(response.headers.get("Content-Type"), "image/png");
  assert.equal(response.headers.get("ETag"), '"original"');
  assert.equal(response.headers.get("X-Content-Type-Options"), "nosniff");
  assert.match(response.headers.get("Cache-Control"), /must-revalidate/);
});

test("supports encoded Japanese image filenames and HEAD requests", async () => {
  const { env, requests } = fixture();
  const query = new URLSearchParams({ url: "/images/きのこ.webp", w: "640", q: "75" });
  const response = await handler.fetch(new Request(`${origin}/_next/image?${query}`, { method: "HEAD" }), env);
  assert.equal(response.status, 200);
  assert.equal(requests[0].method, "HEAD");
  assert.equal(decodeURIComponent(new URL(requests[0].url).pathname), "/images/きのこ.webp");
  assert.equal(await response.text(), "");
});

for (const value of ["https://example.com/photo.png", "//example.com/photo.png", "/secret.png", "/images/missing.png", "/images/../header_logo_new.png", "/images/%2e%2e/header_logo_new.png", "/images/header_logo_new.png?extra=1", "/images/header_logo_new.png#fragment"]) {
  test(`rejects unlisted or unsafe image path: ${value}`, async () => {
    const { env, requests } = fixture();
    const query = new URLSearchParams({ url: value });
    const response = await handler.fetch(new Request(`${origin}/_next/image?${query}`), env);
    assert.equal(response.status, 400);
    assert.equal(response.headers.get("Cache-Control"), "no-store");
    assert.equal(requests.length, 0);
  });
}

test("rejects ambiguous URLs and write methods", async () => {
  const { env, requests } = fixture();
  for (const query of ["", "url=/images/header_logo_new.png&url=/images/header_logo_new.png"]) {
    assert.equal((await handler.fetch(new Request(`${origin}/_next/image?${query}`), env)).status, 400);
  }
  const response = await handler.fetch(new Request(`${origin}/_next/image?url=/images/header_logo_new.png`, { method: "POST" }), env);
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("Allow"), "GET, HEAD");
  assert.equal(requests.length, 0);
});

test("does not forward visitor cookies or authorization to the asset binding", async () => {
  const { env, requests } = fixture();
  await handler.fetch(new Request(`${origin}/_next/image?url=/images/header_logo_new.png`, {
    headers: { Cookie: "session=example", Authorization: "Bearer example" },
  }), env);
  assert.equal(requests[0].headers.has("Cookie"), false);
  assert.equal(requests[0].headers.has("Authorization"), false);
});

test("keeps Pages preview responses out of search results", async () => {
  const { env } = fixture();
  const response = await handler.fetch(new Request("https://preview.kikuzou-website.pages.dev/_next/image?url=/images/header_logo_new.png"), env);
  assert.equal(response.headers.get("X-Robots-Tag"), "noindex");
});

test("passes unrelated requests through unchanged", async () => {
  const { env, requests } = fixture();
  const request = new Request(`${origin}/menu`);
  await handler.fetch(request, env);
  assert.equal(requests[0], request);
});
