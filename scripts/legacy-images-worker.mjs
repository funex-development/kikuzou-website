// Old Vercel pages still request /_next/image after moving to static hosting.
// Serve only image files included in this build; never fetch arbitrary URLs.
export function createLegacyImageHandler(imagePaths) {
  const allowedImages = new Set(imagePaths);

  function error(status, message, extraHeaders = {}) {
    return new Response(message, {
      status,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        ...extraHeaders,
      },
    });
  }

  return {
    async fetch(request, env) {
      const url = new URL(request.url);
      if (url.pathname !== "/_next/image") return env.ASSETS.fetch(request);
      if (request.method !== "GET" && request.method !== "HEAD") {
        return error(405, "Method not allowed", { Allow: "GET, HEAD" });
      }
      const values = url.searchParams.getAll("url");
      if (values.length !== 1) return error(400, "Invalid image URL");

      let imagePath;
      try {
        imagePath = decodeURIComponent(values[0]);
      } catch {
        return error(400, "Invalid image URL");
      }
      if (!imagePath.startsWith("/images/") || /[\\?#\u0000-\u001f\u007f]/.test(imagePath) ||
          imagePath.split("/").some((part) => part === "." || part === "..") ||
          !allowedImages.has(imagePath)) {
        return error(400, "Invalid image URL");
      }

      const assetURL = new URL(url.origin);
      assetURL.pathname = imagePath;
      const asset = await env.ASSETS.fetch(new Request(assetURL, { method: request.method }));
      const headers = new Headers(asset.headers);
      headers.set("X-Frame-Options", "DENY");
      headers.set("X-Content-Type-Options", "nosniff");
      headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
      headers.set("Cache-Control", asset.ok ? "public, max-age=3600, must-revalidate" : "no-store");
      if (url.hostname.endsWith(".pages.dev")) headers.set("X-Robots-Tag", "noindex");
      return new Response(asset.body, { status: asset.status, statusText: asset.statusText, headers });
    },
  };
}
