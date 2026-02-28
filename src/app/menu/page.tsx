"use client";

import { useState } from "react";
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
            "地元の山で採れた天然きのこを100%使用。りこぼう、アミタケ、ナラタケ、ハナイグチなど、秋の恵みを存分にお楽しみください。",
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
        prices: ["¥12,300", "¥15,400"],
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

const alacarteMenu = [
    {
        category: "お刺身",
        items: [
            { name: "刺身盛り合わせ", price: "2,200円より", description: "※その日の仕入れ状況により内容が変わります。" },
            { name: "本マグロ赤身・中トロ", price: "" },
            { name: "平目刺身", price: "" },
            { name: "生タコ刺身", price: "" },
            { name: "甘エビ刺身", price: "" },
            { name: "ボタン海老刺身", price: "" },
            { name: "赤貝刺身", price: "" },
            { name: "ツブ貝刺身", price: "" },
            { name: "極上馬刺し", price: "1,650円" },
            { name: "鹿刺身", price: "1,320円" },
        ]
    },
    {
        category: "焼き物",
        items: [
            { name: "信州牛石焼", price: "2,900円" },
            { name: "アワビステーキ", price: "3,300円" },
            { name: "きんき（塩焼き・煮付け）", price: "3,500円より" },
            { name: "のどぐろ（塩焼き・煮付け）", price: "3,500円より" },
            { name: "北海ししゃも", price: "1,320円" },
            { name: "氷下魚（こまい）", price: "770円" },
            { name: "焼きアスパラ", price: "770円" },
            { name: "自家製鴨スモーク", price: "1,200円" },
        ]
    },
    {
        category: "揚げ物・天ぷら",
        items: [
            { name: "松本山賊焼き", price: "1,320円" },
            { name: "車海老天ぷら", price: "1,650円" },
            { name: "穴子天ぷら", price: "1,650円" },
            { name: "鷹山ニンニクの天ぷら", price: "850円" },
            { name: "ソフトシェルクラブ", price: "1,320円" },
            { name: "かじか唐揚", price: "1,320円" },
            { name: "鹿竜田揚げ", price: "1,320円" },
            { name: "自家製さつま揚", price: "950円" },
            { name: "海老変わり揚", price: "1,320円" },
            { name: "たこ唐揚", price: "770円" },
        ]
    },
    {
        category: "一品・その他",
        items: [
            { name: "新ジャガ照煮", price: "600円" },
            { name: "ふぐのカルパッチョ", price: "990円" },
            { name: "岩ガキ (夏)", price: "1,320円より" },
            { name: "真ガキ (冬)", price: "1,100円より" },
            { name: "もずく酢", price: "600円" },
            { name: "サバへしこ（二年物）", price: "770円" },
            { name: "自家製からすみ", price: "1,650円" },
            { name: "いぶりがっこチーズ包", price: "660円" },
            { name: "フルーツトマト", price: "770円" },
            { name: "お新香", price: "600円" },
        ]
    },
    {
        category: "お食事・〆の逸品",
        items: [
            { name: "氷見うどん", price: "770円" },
            { name: "お茶漬け（シャケ・タラコ・梅・のり）", price: "700円" },
            { name: "おにぎり（1ケ）（シャケ・タラコ・梅・昆布）", price: "300円" },
            { name: "焼おにぎり（2ケ）", price: "660円" },
            { name: "ご飯", price: "400円" },
            { name: "みそ汁", price: "400円" },
        ]
    }
];

const drinkMenu = [
    {
        category: "ビール",
        items: [
            { name: "瓶ビール（エビス・キリン・アサヒ）", price: "850円" },
            { name: "一番搾り生ビール（中）", price: "850円" },
            { name: "一番搾り生ビール（小）", price: "650円" },
            { name: "一番搾り生ビール（グラス）", price: "450円" },
            { name: "ノンアルコールビール", price: "650円" },
            { name: "ハードシードル", price: "700円" },
        ]
    },
    {
        category: "日本酒",
        items: [
            { name: "燗酒 (両関・大雪渓)", price: "600円" },
            { name: "フグヒレ酒", price: "1,320円" },
            { name: "つぎ酒", price: "600円" },
            { name: "大雪渓 大吟醸 (一杯)", price: "1,320円" },
            { name: "大雪渓 生酒 (300ml)", price: "1,350円" },
            { name: "大雪渓槍 純米吟醸 (一杯)", price: "950円" },
            { name: "夜明け前 純米吟醸 (一杯)", price: "1,100円" },
            { name: "甍(いらか)銀(一杯)", price: "1,320円" },
            { name: "大信州 辛口特別純米 (一杯)", price: "950円" },
            { name: "佐久の花 純米吟醸 (一杯)", price: "950円" },
            { name: "御湖鶴 純米吟醸 (一杯)", price: "1,320円" },
            { name: "美寿々 純米吟醸 (一杯)", price: "950円" },
            { name: "〆張鶴 (新潟)(一杯)", price: "950円" },
            { name: "緑川 (新潟)(一杯)", price: "990円" },
            { name: "作 (三重)(一杯)", price: "1,100円" },
        ]
    },
    {
        category: "焼酎ボトル",
        items: [
            { name: "魔王 (数量限定)", price: "7,700円" },
            { name: "一刻者石蔵甕貯蔵", price: "6,600円" },
            { name: "吉兆宝山", price: "4,900円" },
            { name: "赤兎馬", price: "4,400円" },
            { name: "桜島", price: "4,400円" },
            { name: "いいちこフラスコ (麦)", price: "6,600円" },
            { name: "吉四六 陶器 (麦)", price: "5,500円" },
            { name: "一粒の麦 (麦)", price: "4,400円" },
        ]
    },
    {
        category: "ウイスキー・サワー",
        items: [
            { name: "おすすめのハイボール", price: "880円" },
            { name: "角ハイボール", price: "660円" },
            { name: "生グレープフルーツ酎", price: "800円" },
            { name: "ウーロン酎", price: "770円" },
            { name: "レモン酎", price: "770円" },
            { name: "すだち酎 (季節限定)", price: "800円" },
            { name: "梅干し酎", price: "800円" },
        ]
    },
    {
        category: "麦焼酎・芋焼酎 (グラス)",
        items: [
            { name: "麦焼酎 (ロック・水割り・お湯割り)", price: "770円" },
            { name: "芋焼酎 (ロック・水割り・お湯割り)", price: "770円" },
        ]
    },
    {
        category: "その他",
        items: [
            { name: "宇治抹茶割", price: "770円" },
            { name: "梅酒 (ソーダ割り)", price: "770円" },
            { name: "梅酒 (ロック)", price: "700円" },
            { name: "ノンアルコールカクテル ゼロカク カシス", price: "660円" },
            { name: "ノンアルコールカクテル ゼロカク シャルドネ", price: "660円" },
            { name: "ソフトドリンク (コーラ・オレンジ・サイダー・ウーロン茶)", price: "各400円" },
            { name: "五一ワイン 赤・白 (フルボトル)", price: "3,950円" },
            { name: "五一ワイン 赤・白 (ハーフボトル)", price: "1,980円" },
            { name: "輸入ワイン 赤・白", price: "3,950円" },
        ]
    }
];

export default function MenuPage() {
    const [activeTab, setActiveTab] = useState<"course" | "alacarte" | "drink">("alacarte");
    const [openCategories, setOpenCategories] = useState<string[]>(["きく蔵の人気メニュー"]);

    const toggleCategory = (category: string) => {
        setOpenCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    return (
        <>
            {/* ページヘッダー */}
            <section className="relative pt-32 pb-12 flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
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

            {/* タブナビゲーション */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E8E4D9]">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="flex justify-center md:gap-16 gap-4 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab("alacarte")}
                            className={`py-4 px-2 md:px-6 border-b-2 text-base md:text-lg font-medium transition-all duration-300 whitespace-nowrap ${activeTab === "alacarte"
                                ? "border-[#B8860B] text-[#B8860B]"
                                : "border-transparent text-gray-500 hover:text-gray-800"
                                }`}
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            アラカルト（一品料理）
                        </button>
                        <button
                            onClick={() => setActiveTab("course")}
                            className={`py-4 px-2 md:px-6 border-b-2 text-base md:text-lg font-medium transition-all duration-300 whitespace-nowrap ${activeTab === "course"
                                ? "border-[#B8860B] text-[#B8860B]"
                                : "border-transparent text-gray-500 hover:text-gray-800"
                                }`}
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            コース料理
                        </button>
                        <button
                            onClick={() => setActiveTab("drink")}
                            className={`py-4 px-2 md:px-6 border-b-2 text-base md:text-lg font-medium transition-all duration-300 whitespace-nowrap ${activeTab === "drink"
                                ? "border-[#B8860B] text-[#B8860B]"
                                : "border-transparent text-gray-500 hover:text-gray-800"
                                }`}
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            お飲み物
                        </button>
                    </div>
                </div>
            </div>

            {/* コンテンツエリア */}
            <div className="min-h-[600px] bg-[#F5F2EB]">
                {/* コース料理 */}
                {activeTab === "course" && (
                    <FadeIn key="course">
                        <section className="section">
                            <div className="container mx-auto px-4 lg:px-6">
                                <div className="section-title">
                                    <h2 style={{ fontFamily: "var(--font-serif)" }}>コース料理</h2>
                                    <p>ご予約は3日前までにお願いいたします</p>
                                    <p className="text-sm text-[#333333] mt-4">
                                        ※ 表示価格は税込です
                                        <span className="mx-2">|</span>
                                        ※ 宴会は4名から12名様までとなります
                                    </p>
                                </div>

                                <StaggerContainer className="space-y-8 max-w-4xl mx-auto" staggerDelay={150}>
                                    {courses.map((course) => (
                                        <div
                                            key={course.id}
                                            className="bg-white rounded shadow-sm overflow-hidden stagger-item hover:shadow-md transition-shadow duration-300"
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
                                                        <p className="text-[#333333] mb-4">{course.description}</p>
                                                        <div className="flex flex-col gap-2 text-sm text-[#333333]">
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
                    </FadeIn>
                )}

                {/* アラカルト（アコーディオン形式） */}
                {activeTab === "alacarte" && (
                    <FadeIn key="alacarte">
                        <section className="section bg-white">
                            <div className="container mx-auto px-4 lg:px-6">
                                <div className="section-title">
                                    <h2 style={{ fontFamily: "var(--font-serif)" }}>
                                        一品料理
                                    </h2>
                                    <p>旬の素材を活かした逸品をご用意しております</p>
                                    <p className="text-sm text-[#333333] mt-4">
                                        季節料理ならびに本日のおすすめは、店内メニューにてご案内しております
                                        <br />
                                        ぜひご覧ください
                                    </p>
                                    <p className="text-sm text-[#333333] mt-4">※ 表示価格は税込です</p>
                                </div>

                                <div className="max-w-4xl mx-auto space-y-4">
                                    {alacarteMenu.map((category, index) => {
                                        const isOpen = openCategories.includes(category.category);
                                        return (
                                            <div key={index} className="border border-[#E8E4D9] rounded-lg overflow-hidden bg-white shadow-sm">
                                                <button
                                                    onClick={() => toggleCategory(category.category)}
                                                    className="w-full flex items-center justify-between p-5 bg-[#F9F9F9] hover:bg-[#F0EEE6] transition-colors"
                                                >
                                                    <h3 className="text-lg md:text-xl font-medium text-[#333]" style={{ fontFamily: "var(--font-serif)" }}>
                                                        {category.category}
                                                    </h3>
                                                    <span className={`transform transition-transform duration-300 text-[#B8860B] ${isOpen ? "rotate-180" : ""}`}>
                                                        ▼
                                                    </span>
                                                </button>

                                                <div
                                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}
                                                >
                                                    <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                                        {category.items.map((item, idx) => (
                                                            <div key={idx} className="border-b border-dashed border-gray-200 pb-4 last:border-0 md:last:border-b md:last:nth-child(odd):border-0">
                                                                <div className="flex gap-4 items-start">
                                                                    {/* 画像がある場合は表示 */}
                                                                    {/* @ts-ignore - existing code might not expect image */}
                                                                    {item.image && (
                                                                        <div className="w-20 h-20 rounded overflow-hidden shrink-0 relative mt-1">
                                                                            <Image
                                                                                /* @ts-ignore */
                                                                                src={item.image}
                                                                                alt={item.name}
                                                                                fill
                                                                                className="object-cover"
                                                                            />
                                                                        </div>
                                                                    )}
                                                                    <div className="flex-1">
                                                                        <div className="flex justify-between items-baseline gap-2 mb-1">
                                                                            <h4 className="font-medium text-[#333]">{item.name}</h4>
                                                                            <span className="text-[#B8860B] whitespace-nowrap font-serif tracking-wide">{item.price}</span>
                                                                        </div>
                                                                        {item.description && (
                                                                            <p className="text-sm text-[#444444] leading-relaxed">{item.description}</p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <FadeIn delay={300}>
                                    <div className="text-center mt-12 p-6 bg-[#F9F9F9] rounded-lg max-w-2xl mx-auto">
                                        <p className="text-sm text-[#333333] leading-loose">
                                            ※ 仕入れ状況により内容や価格が変更になる場合がございます。
                                            <br />
                                            ※ アレルギー食材などがございましたら、お気軽にご相談ください。
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>
                        </section>
                    </FadeIn>
                )}

                {/* ドリンク */}
                {activeTab === "drink" && (
                    <FadeIn key="drink">
                        <section className="section bg-white">
                            <div className="container mx-auto px-4 lg:px-6">
                                <div className="section-title">
                                    <h2 style={{ fontFamily: "var(--font-serif)" }}>お飲み物</h2>
                                    <p>料理の味わいを深める銘酒の数々</p>
                                    <p className="text-sm text-[#333333] mt-4">※ 表示価格は税込です</p>
                                </div>

                                <div className="max-w-4xl mx-auto space-y-4">
                                    {drinkMenu.map((category, index) => {
                                        const isOpen = openCategories.includes(category.category);
                                        return (
                                            <div key={index} className="border border-[#E8E4D9] rounded-lg overflow-hidden bg-white shadow-sm">
                                                <button
                                                    onClick={() => toggleCategory(category.category)}
                                                    className="w-full flex items-center justify-between p-5 bg-[#F9F9F9] hover:bg-[#F0EEE6] transition-colors"
                                                >
                                                    <h3 className="text-lg md:text-xl font-medium text-[#333]" style={{ fontFamily: "var(--font-serif)" }}>
                                                        {category.category}
                                                    </h3>
                                                    <span className={`transform transition-transform duration-300 text-[#B8860B] ${isOpen ? "rotate-180" : ""}`}>
                                                        ▼
                                                    </span>
                                                </button>

                                                <div
                                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}
                                                >
                                                    <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                                        {category.items.map((item, idx) => (
                                                            <div key={idx} className="border-b border-dashed border-gray-200 pb-4 last:border-0 md:last:border-b md:last:nth-child(odd):border-0">
                                                                <div className="flex gap-4 items-start">
                                                                    <div className="flex-1">
                                                                        <div className="flex justify-between items-baseline gap-2 mb-1">
                                                                            <h4 className="font-medium text-[#333]">{item.name}</h4>
                                                                            <span className="text-[#B8860B] whitespace-nowrap font-serif tracking-wide">{item.price}</span>
                                                                        </div>
                                                                        {/* @ts-ignore */}
                                                                        {item.description && (
                                                                            /* @ts-ignore */
                                                                            <p className="text-sm text-[#444444] leading-relaxed">{item.description}</p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <FadeIn delay={300}>
                                    <div className="text-center mt-12 p-6 bg-[#F9F9F9] rounded-lg max-w-2xl mx-auto">
                                        <p className="text-sm text-[#333333] leading-loose">
                                            ※ 銘柄は季節や仕入れ状況により異なります。
                                            <br />
                                            ※ ワインリストなど、その他のドリンクは店内にてご確認ください。
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>
                        </section>
                    </FadeIn>
                )}
            </div>

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
                            コース料理は3日前までにご予約ください。
                            <br />
                            ご不明な点はお気軽にお電話ください。
                        </p>
                    </FadeIn>
                    <FadeIn delay={400}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:0263-36-3728"
                                className="btn bg-[#B8860B] text-white hover:bg-[#9A7209] text-base px-8 py-4 transition-colors"
                            >
                                <span className="mr-2">📞</span> 0263-36-3728
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
