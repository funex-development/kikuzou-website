"use client";

import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import { FadeIn, StaggerContainer } from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <StructuredData />

      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景画像（プレースホルダー） */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#333333]">
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-10"></div>
        </div>

        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* コンテンツ */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <FadeIn delay={200} duration={800}>
            <p
              className="text-sm md:text-base tracking-[0.3em] mb-4 text-[#B8860B]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              創業1970年 ― 食べログ百名店
            </p>
          </FadeIn>
          <FadeIn delay={400} duration={1000}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-wider"
              style={{ fontFamily: "var(--font-serif)", color: "#B8860B" }}
            >
              割烹・季節料理
              <br />
              <span className="text-5xl md:text-7xl lg:text-8xl">きく蔵</span>
            </h1>
          </FadeIn>
          <FadeIn delay={600} duration={800}>
            <p
              className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto opacity-90"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              四季を感じる日本料理
              <br className="md:hidden" />
              <span className="hidden md:inline"> ― </span>
              信州松本の旬をお届けします
            </p>
          </FadeIn>
          <FadeIn delay={800} duration={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reserve"
                className="btn btn-primary text-base px-8 py-4"
              >
                ご予約はこちら
              </Link>
              <Link
                href="/menu"
                className="btn btn-outline border-white hover:bg-white hover:text-[#333333] text-base px-8 py-4"
                style={{ color: "#FFFFFF" }}
              >
                料理を見る
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* コンセプトセクション */}
      <section className="section bg-[#F5F2EB]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="section-title">
                <h2 style={{ fontFamily: "var(--font-serif)" }}>
                  旬の恵みを、心を込めて
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <p
                className="text-lg leading-relaxed text-[#555555] mb-8"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                創業以来半世紀以上、きく蔵は信州松本の地で
                四季折々の食材と向き合ってまいりました。
                <br />
                <br />
                地場産の天然きのこを100%使用した名物「きのこ鍋」、
                極上の馬刺し、冬の贅沢「河豚料理」。
                職人の技と真心で、季節の味覚を最高の形でお届けします。
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <span className="px-4 py-2 bg-white rounded text-sm text-[#333333] shadow-sm">
                  百名店 2021・2023・2025
                </span>
                <span className="px-4 py-2 bg-white rounded text-sm text-[#555555] shadow-sm">
                  個室完備
                </span>
                <span className="px-4 py-2 bg-white rounded text-sm text-[#555555] shadow-sm">
                  接待・記念日に
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* おすすめ料理ハイライト */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="section-title">
              <h2 style={{ fontFamily: "var(--font-serif)" }}>
                季節のおすすめ
              </h2>
              <p>旬の食材を使った自慢の逸品</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={150}>
            {/* 料理カード1 */}
            <div className="card group stagger-item">
              <div className="aspect-[4/3] relative overflow-hidden hover-zoom">
                <Image
                  src="/images/kinoko-nabe.png"
                  alt="名物 きのこ鍋"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  名物 きのこ鍋
                </h3>
                <p className="text-[#555555] text-sm mb-3">
                  地場産の天然きのこを100%使用。松茸、アカヤマドリなど
                  秋の恵みを存分にお楽しみください。
                </p>
              </div>
            </div>

            {/* 料理カード2 */}
            <div className="card group stagger-item">
              <div className="aspect-[4/3] relative overflow-hidden hover-zoom">
                <Image
                  src="/images/basashi.png"
                  alt="極上 馬刺し"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  極上 馬刺し
                </h3>
                <p className="text-[#555555] text-sm mb-3">
                  地場産の極上馬刺し。新鮮な赤身の旨みと
                  とろける脂の甘みをご堪能ください。
                </p>
              </div>
            </div>

            {/* 料理カード3 */}
            <div className="card group stagger-item">
              <div className="aspect-[4/3] relative overflow-hidden hover-zoom">
                <Image
                  src="/images/fugu.png"
                  alt="冬の贅沢 河豚コース"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  冬の贅沢 河豚コース
                </h3>
                <p className="text-[#555555] text-sm mb-3">
                  九州直送の最高級トラフグ。てっさ、ふぐちり、
                  白子焼きなど冬の味覚をコースで。
                </p>
              </div>
            </div>
          </StaggerContainer>

          <FadeIn delay={300}>
            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="btn btn-outline text-base px-8 py-3"
              >
                すべての料理を見る
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="section-sm bg-[#F5F2EB]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2
                className="text-xl mb-6 text-center"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                お知らせ
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="space-y-4">
                <div className="flex items-baseline gap-4 p-4 bg-white rounded shadow-sm">
                  <span className="text-[#555555] w-20 shrink-0">2025.01</span>
                  <p className="text-[#333333]">
                    新年のご挨拶：本年もきく蔵をよろしくお願いいたします。
                  </p>
                </div>
                <div className="flex items-baseline gap-4 p-4 bg-white rounded shadow-sm">
                  <span className="text-[#555555] w-20 shrink-0">2024.12</span>
                  <p className="text-[#333333]">
                    年末年始の営業について：12/31〜1/3はお休みをいただきます。
                  </p>
                </div>
                <div className="flex items-baseline gap-4 p-4 bg-white rounded shadow-sm">
                  <span className="text-[#555555] w-20 shrink-0">2024.11</span>
                  <p className="text-[#333333]">
                    食べログ「日本料理 EAST 百名店 2025」に選出されました。
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* アクセス・予約導線 */}
      <section className="section bg-[#333333] text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* 地図エリア */}
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-[#444444] rounded overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=%E5%89%B2%E7%83%B9%E3%83%BB%E5%AD%A3%E7%AF%80%E6%96%99%E7%90%86%20%E3%81%8D%E3%81%8F%E8%94%B5%20%E9%95%B7%E9%87%8E%E7%9C%8C%E6%9D%BE%E6%9C%AC%E5%B8%82%E5%A4%A7%E6%89%8B4%E4%B8%81%E7%9B%AE7-10&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="きく蔵の地図"
                ></iframe>
              </div>
            </FadeIn>

            {/* 情報エリア */}
            <FadeIn direction="right" delay={200}>
              <div>
                <h2
                  className="text-2xl md:text-3xl mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  アクセス・ご予約
                </h2>
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-[#B8860B] text-sm mb-1">所在地</p>
                    <p>〒390-0874 長野県松本市大手4丁目7-10</p>
                  </div>
                  <div>
                    <p className="text-[#B8860B] text-sm mb-1">アクセス</p>
                    <p>松本駅お城口より徒歩15分 / 松本城より徒歩5分</p>
                  </div>
                  <div>
                    <p className="text-[#B8860B] text-sm mb-1">営業時間</p>
                    <p>17:30〜22:00（L.O. 21:15）</p>
                  </div>
                  <div>
                    <p className="text-[#B8860B] text-sm mb-1">定休日</p>
                    <p>日曜日</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:0263-36-3728"
                    className="btn bg-[#B8860B] text-white hover:bg-[#9A7209] text-base px-6 py-3"
                  >
                    📞 0263-36-3728
                  </a>
                  <Link
                    href="/reserve"
                    className="btn btn-primary text-base px-6 py-3"
                  >
                    ご予約について
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
