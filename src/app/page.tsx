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
        {/* 背景：モバイルは画像、PCは動画 */}
        <div className="absolute inset-0 bg-[#333333]">
          {/* モバイル用画像 */}
          <img
            src="/images/hero-mobile.jpg"
            alt="きく蔵 店舗外観"
            className="w-full h-full object-cover md:hidden"
            style={{ objectPosition: 'center 35%' }}
          />
          {/* PC用動画 */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="hidden md:block w-full h-full object-cover object-center"
            poster="/images/hero-bg.jpg"
          >
            <source src="/images/hero3.mp4" type="video/mp4" />
          </video>
        </div>

        {/* オーバーレイ（テキスト読みやすさのため） */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        {/* コンテンツ */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen">
          {/* テキストコンテンツ */}
          <div className="mt-16 md:mt-0">
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
                味処
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
            {/* PC用ボタン - テキストと一緒に表示 */}
            <FadeIn delay={800} duration={800}>
              <div className="hidden md:flex flex-row gap-4 justify-center">
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
        </div>

        {/* モバイル用ボタン - セクションに対して下部に配置 */}
        <div className="md:hidden absolute bottom-24 left-0 right-0 z-20 px-4">
          <FadeIn delay={800} duration={800}>
            <div className="flex flex-col gap-4 justify-center items-center max-w-sm mx-auto">
              <Link
                href="/reserve"
                className="btn btn-primary text-base px-8 py-4 w-full text-center"
              >
                ご予約はこちら
              </Link>
              <Link
                href="/menu"
                className="btn btn-outline border-white hover:bg-white hover:text-[#333333] text-base px-8 py-4 w-full text-center"
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
                四季折々の食材を提供しております。
                <br />
                <br />
                春は山菜、夏は鱧、秋は天然きのこ、冬は河豚やクエ。
                <br />
                一年を通して、その時期にしか味わえない旬の味覚をお届けします。
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
                  src="/images/basashi-retouched.png"
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

            {/* 料理カード2 */}
            <div className="card group stagger-item">
              <div className="aspect-[4/3] relative overflow-hidden hover-zoom">
                <Image
                  src="/images/kue_nabe_enhanced.png"
                  alt="幻の高級魚 クエ鍋"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  幻の高級魚 クエ鍋
                </h3>
                <p className="text-[#555555] text-sm mb-3">
                  脂の乗った濃厚な旨味と、弾力のある白身はまさに絶品。
                  懐石コースにクエ鍋を合わせた、冬期限定の贅沢なコースです。
                </p>
              </div>
            </div>

            {/* 料理カード3 */}
            <div className="card group stagger-item">
              <div className="aspect-[4/3] relative overflow-hidden hover-zoom">
                <Image
                  src="/images/fugu-retouched.png"
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
                コース・料理を見る
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SNS・リンク */}
      <section className="section-sm bg-[#F5F2EB]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2
                className="text-xl mb-8 text-center"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                公式SNS・食べログ
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Instagram Button */}
                <a
                  href="https://www.instagram.com/kikuzou.taku/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#E1306C]/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <img
                      src="/images/インスタロゴ-removebg-preview.png"
                      alt="Instagram"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#E1306C] font-bold tracking-wider mb-1">OFFICIAL INSTAGRAM</p>
                    <p className="text-lg font-medium text-[#333333]" style={{ fontFamily: "var(--font-serif)" }}>
                      公式インスタグラム
                    </p>
                    <p className="text-xs text-[#888888] mt-1">季節の料理やお店の様子を発信中</p>
                  </div>
                  <div className="text-[#CCCCCC] group-hover:text-[#E1306C] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>

                {/* Tabelog Button */}
                <a
                  href="https://tabelog.com/nagano/A2002/A200201/20000774/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#FA8100]/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#FA8100] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <svg
                      className="w-8 h-8 text-[#FA8100]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-label="食べログ"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#FA8100] font-bold tracking-wider mb-1">TABELOG</p>
                    <p className="text-lg font-medium text-[#333333]" style={{ fontFamily: "var(--font-serif)" }}>
                      食べログ
                    </p>
                    <p className="text-xs text-[#888888] mt-1">ネット予約・口コミはこちらから</p>
                  </div>
                  <div className="text-[#CCCCCC] group-hover:text-[#FA8100] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
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
                    <p>日曜日<br /><span className="text-xs">※月曜日が祝日の場合は、日曜営業・月曜休業となります。</span></p>
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
