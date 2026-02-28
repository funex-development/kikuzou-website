import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kikuzou.vercel.app"),
  title: {
    default: "味処 きく蔵 | 松本市の老舗日本料理店",
    template: "%s | 味処 きく蔵",
  },
  description:
    "創業1970年、長野県松本市の老舗日本料理店「味処 きく蔵」。食べログ日本料理百名店に3度選出。松本の和食・郷土料理の名店として、極上の馬刺し、季節の河豚コース、秋の松茸料理、名物の松本山賊焼きなど四季折々の味覚をお届け。松本城から徒歩5分。",
  keywords: [
    "きく蔵",
    "松本",
    "松本 日本料理",
    "松本 和食",
    "松本 郷土料理",
    "松本 食べログ百名店",
    "松本 河豚",
    "松本 馬刺し",
    "松本 松茸",
    "松本 山賊焼",
    "味処",
    "日本料理",
    "和食",
    "百名店",
    "きのこ鍋",
    "馬刺し",
    "河豚",
    "松茸",
    "山賊焼き",
    "郷土料理",
    "懐石料理",
    "接待",
    "個室",
    "松本城",
    "長野県",
    "信州",
  ],
  authors: [{ name: "きく蔵" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://kikuzou.vercel.app",
    siteName: "味処 きく蔵",
    title: "味処 きく蔵 | 松本市の老舗日本料理店",
    description:
      "創業1970年、松本の老舗日本料理・和食の名店。食べログ百名店3度選出。馬刺し・河豚・松茸・山賊焼きなど信州の郷土料理と四季折々の味覚をお届けします。",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "味処 きく蔵",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "味処 きく蔵 | 松本市の老舗日本料理店",
    description:
      "創業1970年、松本の老舗日本料理・和食の名店。食べログ百名店3度選出。馬刺し・河豚・松茸・山賊焼きなど信州の郷土料理と四季折々の味覚をお届けします。",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#333333" />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          メインコンテンツへスキップ
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
