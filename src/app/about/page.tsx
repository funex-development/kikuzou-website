"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer } from "@/components/ScrollAnimations";

const awards = [
    { year: "2025", title: "食べログ 日本料理 EAST 百名店" },
    { year: "2023", title: "食べログ 日本料理 EAST 百名店" },
    { year: "2021", title: "食べログ 日本料理 EAST 百名店" },
];

const features = [
    {
        title: "天然素材へのこだわり",
        description:
            "魚は天然物のみ、朝獲れ鮮魚が夕刻には届きます。山菜・茸は地場産天然物を使用。野菜も旬を見極め、最も美味しい状態でお届けします。",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 2C7 2 3 7 3 10c0 4 3.5 6 5 8v3c0 1 1 1 1 1h6s1 0 1-1v-3c1.5-2 5-4 5-8 0-3-4-8-9-8z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 2v6" strokeLinecap="round" />
                <path d="M7 6c2 2 4 1 5 1s3 1 5-1" strokeLinecap="round" />
                <path d="M9 13c1 1 2 1 3 1s2 0 3-1" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "職人の技",
        description:
            "鱧の骨切り、自家製からすみ作り。代々受け継がれてきた技術と、新しい感性を融合させ、一皿一皿に心を込めてお作りしています。",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M2 20L20 2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 6L20 2L22 4L18 8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 16L18 4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 20l4-4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "四季を感じる料理",
        description:
            "春は山菜と筍、夏は鱧と鮎、秋は松茸ときのこ鍋、冬は河豚とクエ。信州松本の四季折々の食材を、最も美味しい時期にお届けします。",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 2L14 7L19 7L15 11L17 16L12 13L7 16L9 11L5 7L10 7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
        ),
    },
    {
        title: "おもてなしの心",
        description:
            "接待、記念日、ご家族の集まり。お客様の大切なひとときを、料理と空間、そして心からのおもてなしでお手伝いいたします。",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 6v3" strokeLinecap="round" />
                <path d="M2 13h20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
            </svg>
        ),
    },
];

// ... (render update inside the component)
// Since this tool needs contiguous edits, I will focus on replacing the features array def first.
// But wait, if I change the array def, the map function later will try to render `feature.description` which might be a mix of strings and objects if TS allows or if I don't update types.
// The file is .tsx. `features` is const. TS will infer `description` as `string | JSX.Element`.
// However, the rendering logic at line 163: `<p className="...">{feature.description}</p>` might warn if description is a div.
// Nesting div inside p is invalid HTML.
// I should update the rendering logic too. Since replace_file_content is single contiguous block, I can't update both if they are far apart.
// Lines 12-62 are definition. Lines 163-165 are usage. They are separate.
// I should use multi_replace_file_content.

export default function AboutPage() {
    return (
        <>
            {/* ページヘッダー */}
            <section className="relative pt-32 pb-16 flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
                <div
                    className="absolute inset-0 z-0 opacity-50"
                    style={{
                        backgroundImage: "url('/images/page-pattern.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="absolute inset-0 bg-black/60 z-0" />
                <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
                    <FadeIn>
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl mb-4"
                            style={{ fontFamily: "var(--font-serif)", color: "#B8860B" }}
                        >
                            きく蔵について
                        </h1>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#B8860B" }}>
                            創業1970年 ― 半世紀以上の歴史と伝統
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* 歴史・ストーリー */}
            <section className="section bg-[#F5F2EB]">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* テキスト */}
                            <FadeIn direction="left">
                                <div>
                                    <h2
                                        className="text-2xl md:text-3xl mb-6"
                                        style={{ fontFamily: "var(--font-serif)" }}
                                    >
                                        松本城のほど近く、
                                        <br />
                                        ちょっと隠れた名店
                                    </h2>
                                    <div className="space-y-4 text-[#333333]">
                                        <p>
                                            1970年5月、松本城近くの「東小路」に、きく蔵は誕生しました。
                                            以来半世紀以上にわたり、地元のお客様から観光でいらっしゃるお客様まで、
                                            多くの方々に愛されてまいりました。
                                        </p>
                                        <p>
                                            現在は2代目が厨房に立ち、先代から受け継いだ技術と志を守りながら、
                                            新しい感性も取り入れた料理を日々研鑽しております。
                                        </p>
                                        <p>
                                            信州の豊かな自然が育む食材。その素材の力を最大限に引き出し、
                                            お客様に季節の移ろいを感じていただける料理をお届けしたい。
                                            それがきく蔵の変わらぬ想いです。
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* 店舗外観画像 */}
                            <FadeIn direction="right" delay={200}>
                                <div className="relative rounded overflow-hidden shadow-lg bg-[#1a1a1a]">
                                    <Image
                                        src="/images/kikuzou-entrance.jpg"
                                        alt="きく蔵 店舗外観"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* こだわり */}
            <section className="section bg-white">
                <div className="container mx-auto px-4 lg:px-6">
                    <FadeIn>
                        <div className="section-title">
                            <h2 style={{ fontFamily: "var(--font-serif)" }}>私たちのこだわり</h2>
                            <p className="mt-4 text-[#333333]">
                                上質な時間を過ごしていただける空間作り。
                                <br />
                                心地よいサービスの提供
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" staggerDelay={150}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-6 bg-[#F5F2EB] rounded stagger-item"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-[#8B2500] to-[#B8860B] rounded-full flex items-center justify-center shrink-0 shadow-sm text-white">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3
                                        className="text-lg mb-2"
                                        style={{ fontFamily: "var(--font-serif)" }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <div className="text-sm text-[#333333] leading-relaxed">
                                        {feature.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* 店内の雰囲気 */}
            <section className="section bg-[#F5F2EB]">
                <div className="container mx-auto px-4 lg:px-6">
                    <FadeIn>
                        <div className="section-title">
                            <h2 style={{ fontFamily: "var(--font-serif)" }}>店内のご案内</h2>
                            <p>落ち着いた和の空間で、ゆったりとしたひとときを</p>
                        </div>
                    </FadeIn>

                    <div className="max-w-5xl mx-auto">
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={150}>
                            {/* カウンター席 */}
                            <div className="stagger-item">
                                <div className="aspect-[4/3] relative rounded overflow-hidden shadow-md group hover-zoom mb-4">
                                    <Image
                                        src="/images/interior-counter-white.png"
                                        alt="カウンター席"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-medium mb-2 text-[#8B2500]" style={{ fontFamily: "var(--font-serif)" }}>カウンター席</h3>
                                <p className="text-sm text-[#333333] leading-relaxed">
                                    居心地のよいカウンター席。<br />
                                    お一人様でも気兼ねなく、ゆったりとお寛ぎいただけます。職人の技を間近で楽しめる特等席です。
                                </p>
                            </div>

                            {/* 個室 */}
                            <div className="stagger-item">
                                <div className="aspect-[4/3] relative rounded overflow-hidden shadow-md group hover-zoom mb-4">
                                    <Image
                                        src="/images/interior-private-white.png"
                                        alt="個室"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-medium mb-2 text-[#8B2500]" style={{ fontFamily: "var(--font-serif)" }}>個室</h3>
                                <p className="text-sm text-[#333333] leading-relaxed">
                                    3～6名様収容可能な個室を3室ご用意しております。<br />
                                    接待やご会食、ご家族での団欒など、プライベートな時間を大切にしたい場面に最適です。
                                </p>
                            </div>

                            {/* 座敷 */}
                            <div className="stagger-item">
                                <div className="aspect-[4/3] relative rounded overflow-hidden shadow-md group hover-zoom mb-4">
                                    <Image
                                        src="/images/interior-zashiki-white.png"
                                        alt="座敷"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-medium mb-2 text-[#8B2500]" style={{ fontFamily: "var(--font-serif)" }}>座敷</h3>
                                <p className="text-sm text-[#333333] leading-relaxed">
                                    最大12名様まで収容可能な広間をご用意しております。<br />
                                    落ち着きのある和の空間は、各種ご宴会や法事、お祝いのお席など、大人数でのお集まりにおすすめです。
                                </p>
                            </div>
                        </StaggerContainer>

                        <FadeIn delay={300}>
                            <div className="mt-8 bg-white rounded shadow-sm p-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div>
                                        <p className="text-2xl font-medium text-[#8B2500]">38</p>
                                        <p className="text-sm text-[#333333]">席</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-medium text-[#8B2500]">4</p>
                                        <p className="text-sm text-[#333333]">個室</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-medium text-[#8B2500]">12</p>
                                        <p className="text-sm text-[#333333]">最大着席人数</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-medium text-[#8B2500]">✓</p>
                                        <p className="text-sm text-[#333333]">カウンター席</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 受賞歴 */}
            <section className="section bg-white">
                <div className="container mx-auto px-4 lg:px-6">
                    <FadeIn>
                        <div className="section-title">
                            <h2 style={{ fontFamily: "var(--font-serif)" }}>受賞歴</h2>
                        </div>
                    </FadeIn>

                    <div className="max-w-2xl mx-auto">
                        <StaggerContainer className="space-y-4" staggerDelay={100}>
                            {awards.map((award, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-[#F5F2EB] rounded stagger-item"
                                >
                                    <span className="text-2xl font-serif text-[#B8860B] shrink-0">
                                        {award.year}
                                    </span>
                                    <span className="text-[#333333]">{award.title}</span>
                                </div>
                            ))}
                        </StaggerContainer>

                        <FadeIn delay={400}>
                            <div className="mt-8 p-6 bg-gradient-to-r from-[#B8860B]/10 to-[#B8860B]/5 rounded border border-[#B8860B]/20">
                                <p className="text-center text-[#333333]">
                                    おかげさまで、食べログ日本料理百名店に
                                    <br className="md:hidden" />
                                    <span className="font-medium text-[#8B2500]">3度</span>
                                    選出されました。
                                    <br />
                                    これからも変わらぬ味と心でお客様をお迎えいたします。
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>


        </>
    );
}
