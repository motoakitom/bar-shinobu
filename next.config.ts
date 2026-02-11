import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // 静的書き出しを有効化
  output: "export",
  basePath: "/bar-shinobu",
  assetPrefix: "/bar-shinobu/",
  trailingSlash: true,
  reactCompiler: true,
  images: {
    formats: ["image/webp", "image/avif"],
    // Firebase Hosting 上で next/image の最適化エンドポイントが無いため
    // 事前に変換済み画像をそのまま配信する設定
    unoptimized: true,
  },
  // experimental: {
  //   optimizeFonts: true
  // }
};

export default bundleAnalyzer(nextConfig);
