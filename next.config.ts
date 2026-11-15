import type { NextConfig } from "next";

const cloudflareStaticExport = process.env.CLOUDFLARE_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

if (cloudflareStaticExport) {
  nextConfig.output = "export";
  nextConfig.images = { unoptimized: true };
  delete nextConfig.headers; // Static hosting uses out/_headers instead.
}

export default nextConfig;
