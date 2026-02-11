import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://bar-shinobu.web.app"),
  title: "BAR 忍 | 会員制ウイスキーバー",
  description: "沖縄県那覇市の会員制ウイスキーバー。上質な繋がりが生まれる場所。",
  keywords: ["那覇", "沖縄", "会員制バー", "ウイスキーバー", "高級バー", "山崎", "響", "竹鶴", "BAR忍"],
  authors: [{ name: "BAR 忍" }],
  openGraph: {
    title: "BAR 忍 | 会員制ウイスキーバー",
    description: "沖縄県那覇市の会員制ウイスキーバー。上質な繋がりが生まれる場所。",
    url: "https://bar-shinobu.web.app",
    siteName: "BAR 忍",
    locale: "ja_JP",
    type: "website",
    images: "/images/services.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAR 忍 | 会員制ウイスキーバー",
    description: "沖縄県那覇市の会員制ウイスキーバー。上質な繋がりが生まれる場所。",
    creator: "@bar_shinobu",
    images: ["/images/services.webp"],
  },
  alternates: {
    canonical: "https://bar-shinobu.web.app",
  },
  icons: {
    icon: [
      { url: "/shinobu_logo.svg", type: "image/svg+xml" },
      { url: "/logo-favicon.webp", type: "image/webp" }
    ],
    apple: { url: "/shinobu_logo.svg", type: "image/svg+xml" }
  },
  other: {
    'theme-color': '#000000',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preload" as="image" href="/hero.png" />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
