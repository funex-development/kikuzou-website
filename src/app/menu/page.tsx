"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer } from "@/components/ScrollAnimations";

const courses = [
    {
        id: "kaiseki",
        name: "きく蔵 懐石コース",
        description:
            "四季折々の食材を使用した、きく蔵自慢の懐石コース。お子様からご年配の方まで美味しくお召し上がりいただけるメニューをご提案いたします。",
        prices: ["¥6,600〜", "¥8,800", "¥11,000"],
        items: "【 9品 】 八寸／お造り／椀物／蒸し物／焼物／揚げ物／食事／デザート（季節やコースにより若干の変更有）",
        note: "※ ¥6,600コースはお電話にてご確認ください",
        color: "from-[#B8860B] to-[#8B6914]",
        image: "/images/kaiseki_course_enhanced.png",
    },
    {
        id: "kinoko",
        name: "きのこ鍋コース",
        description:
            "地場産の天然きのこを100%使用した名物料理。松茸、アカヤマドリ（和製ポルチーニ）、うしびて（クロカワ）など、秋の恵みを存分にお楽しみください。",
        prices: ["¥8,800"],
        items: "【9品】きく蔵名物きのこの入ったコース。入荷、予算に応じて松茸の土瓶蒸しも入ります。",
        note: "時期 9月〜11月頃（天然きのこの入荷状況により変動）",
        color: "from-[#8B4513] to-[#5D3A1A]",
        image: "/images/kinoko_nabe_enhanced.png",
    },
    {
        id: "botan",
        name: "牡丹鍋コース",
        description:
            "信州の冬の味覚、猪肉を使用した牡丹鍋。ヘルシー＆コラーゲンたっぷりで女性にもおすすめです。懐石コースに牡丹鍋を追加してご提供いたします。",
        prices: ["¥8,800"],
        items: "【8品】懐石コースに牡丹鍋を追加。女性に人気のヘルシーコースです。",
        note: "時期 12月〜3月中旬",
        color: "from-[#C41E3A] to-[#8B0000]",
        image: "/images/botan_nabe_enhanced.png",
    },
    {
        id: "fugu",
        name: "河豚コース",
        description:
            "九州直送の最高級トラフグを使用。てっさやふぐちり、ふぐから揚げや白子焼きなど、新鮮なトラフグをぜひご堪能下さい！",
        prices: ["¥12,100"],
        items: "【8品】最高級トラフグを使ったコース。てっさ、ふぐちり、から揚げ、白子焼きなど。",
        note: "時期 12月〜3月中旬",
        color: "from-[#4682B4] to-[#2F5496]",
        image: "/images/fugu-retouched.png",
    },
    {
        id: "kue",
        name: "クエ鍋コース",
        description:
            "幻の高級魚「クエ」を使った贅沢な鍋コース。懐石コースにクエ鍋を追加してご提供！当店自慢の季節料理を落ち着いた店内で。",
        prices: ["¥9,900"],
        items: "懐石コースにクエ鍋を追加してご提供いたします。",
        note: "時期 12月〜3月中旬",
        color: "from-[#2E8B57] to-[#1D6B3F]",
        image: "/images/kue_nabe_enhanced.png",
    },
];

const specialties = [
    {
        image: "/images/basashi-retouched.png",
        name: "馬刺し",
        description: "地場産の極上馬刺し。新鮮な赤身の旨みととろける脂の甘み。",
    },
    {
        image: "/images/matsutake-tempura-enhanced.png",
        name: "松茸の天麩羅",
        description: "香り高い地場産松茸を贅沢に天麩羅で。",
    },
    {
        image: "/images/hamo-yubiki-enhanced.png",
        name: "活鱧の湯引き",
        description: "南高梅の梅肉を添えて。夏の風物詩。",
    },
    {
        image: "/images/sansai-tempura-enhanced.png",
        name: "山菜の天ぷら",
        description: "信州の春の味覚、山菜の天ぷら。独特の香りと苦味をお楽しみください。",
    },
];

export default function MenuPage() {
    return (
        <>
            {/* ページヘッダー */}
            <section className="pt-32 pb-16 bg-[#333333] flex items-center justify-center">
                <div className="container mx-auto px-4 lg:px-6 text-center">
                    <FadeIn>
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl mb-4"
                            style={{ fontFamily: "var(--font-serif)", color: "#B8860B" }}
                        >
                            料理
                        </h1>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#B8860B" }}>
                            四季折々の食材を、職人の技と真心でお届けします
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* コース料理 */}
            <section className="section bg-[#F5F2EB]">
                <div className="container mx-auto px-4 lg:px-6">
                    <FadeIn>
                        <div className="section-title">
                            <h2 style={{ fontFamily: "var(--font-serif)" }}>コース料理</h2>
                            <p>ご予約は前日までにお願いいたします</p>
                            <p className="text-sm text-[#555555] mt-4">
                                ※ 表示価格は税込です
                                <span className="mx-2">|</span>
                                ※ 宴会は12名様までとなります
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="space-y-8 max-w-4xl mx-auto" staggerDelay={150}>
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white rounded shadow-sm overflow-hidden stagger-item"
                            >
                                <div
                                    className={`h-2 bg-gradient-to-r ${course.color}`}
                                ></div>
                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        {/* 画像 */}
                                        <div className="w-full md:w-1/3">
                                            <div className="relative aspect-[4/3] rounded overflow-hidden">
                                                <Image
                                                    src={course.image}
                                                    alt={course.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* 詳細 */}
                                        <div className="w-full md:w-2/3">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                                <h3
                                                    className="text-xl md:text-2xl"
                                                    style={{ fontFamily: "var(--font-serif)" }}
                                                >
                                                    {course.name}
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {course.prices.map((price, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-6 py-2 border border-[#B8860B]/40 text-[#8B2500] text-lg tracking-widest bg-white/50"
                                                            style={{ fontFamily: "var(--font-serif)" }}
                                                        >
                                                            {price}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-[#555555] mb-4">{course.description}</p>
                                            <div className="flex flex-col gap-2 text-sm text-[#555555]">
                                                <span className="flex items-center gap-1">
                                                    <span className="text-[#B8860B]">●</span>
                                                    {course.items}
                                                </span>
                                                {course.note && (
                                                    <span className="flex items-center gap-1">
                                                        <span className="text-[#B8860B]">●</span>
                                                        {course.note}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </StaggerContainer>


                </div>
            </section>

            {/* 一品料理 */}
            <section className="section bg-white">
                <div className="container mx-auto px-4 lg:px-6">
                    <FadeIn>
                        <div className="section-title">
                            <h2 style={{ fontFamily: "var(--font-serif)" }}>
                                季節のおすすめ・一品料理
                            </h2>
                            <p>旬の素材を活かした逸品をご用意しております</p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={100}>
                        {specialties.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-4 border-b border-[#E8E4D9] md:border md:rounded stagger-item"
                            >
                                <div className="w-24 h-24 relative rounded overflow-hidden shrink-0 shadow-sm hover-zoom">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start gap-2">
                                        <h3
                                            className="font-medium"
                                            style={{ fontFamily: "var(--font-serif)" }}
                                        >
                                            {item.name}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-[#555555] mt-1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </StaggerContainer>

                    <FadeIn delay={300}>
                        <p className="text-center text-sm text-[#555555] mt-8">
                            その他、季節の一品料理を多数ご用意しております。
                            <br />
                            詳しくはスタッフにお尋ねください。
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ドリンク */}
            <section className="section-sm bg-[#F5F2EB]">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <h2
                                className="text-xl text-center mb-6"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                お飲み物
                            </h2>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <div className="bg-white rounded shadow-sm p-6 md:p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-medium mb-3 text-[#B8860B]">日本酒</h3>
                                        <p className="text-sm text-[#555555]">
                                            信州の地酒を中心に、料理に合う銘柄を厳選。
                                            季節限定の日本酒もご用意しております。
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-3 text-[#B8860B]">焼酎</h3>
                                        <p className="text-sm text-[#555555]">
                                            芋、麦、米など各種取り揃えております。
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-3 text-[#B8860B]">ワイン</h3>
                                        <p className="text-sm text-[#555555]">
                                            和食に合うワインをセレクト。
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-3 text-[#B8860B]">
                                            ソフトドリンク
                                        </h3>
                                        <p className="text-sm text-[#555555]">
                                            ウーロン茶、オレンジジュース、ジンジャーエール他。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 予約CTA */}
            <section className="section bg-[#333333] text-white text-center">
                <div className="container mx-auto px-4 lg:px-6">
                    <FadeIn>
                        <h2
                            className="text-2xl md:text-3xl mb-4"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            ご予約・お問い合わせ
                        </h2>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            コース料理は前日までにご予約ください。
                            <br />
                            ご不明な点はお気軽にお電話ください。
                        </p>
                    </FadeIn>
                    <FadeIn delay={400}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:0263-36-3728"
                                className="btn bg-[#B8860B] text-white hover:bg-[#9A7209] text-base px-8 py-4"
                            >
                                📞 0263-36-3728
                            </a>
                            <Link href="/reserve" className="btn btn-primary text-base px-8 py-4">
                                ご予約について
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
