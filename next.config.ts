import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const ghpBasePath = process.env.GHP_BASE_PATH;

const nextConfig: NextConfig = {
  // 静的書き出しを有効化
  output: "export",
  ...(ghpBasePath
    ? {
        basePath: ghpBasePath,
        assetPrefix: `${ghpBasePath}/`,
        trailingSlash: true,
      }
    : {}),
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
