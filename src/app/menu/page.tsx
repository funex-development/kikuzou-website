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
        category: "きく蔵の人気メニュー",
        items: [
            { name: "極上馬刺し", price: "1,650円", description: "地場産の最高級の馬刺しです。部位はその日の仕入れ状況により変わります。", image: "/images/basashi-premium.jpg" },
            { name: "馬タンお刺身", price: "1,650円", description: "珍しい馬の舌のお刺身です。こりこりした歯ごたえがあり、さっぱりとしたお刺身です。", image: "/images/basashi-tongue.jpg" },
            { name: "筍まんじゅう(12月～5月位)", price: "950円", description: "皮にふんだんの筍を使い、具はひき肉に椎茸、そして筍。当店オリジナルの人気料理。季節料理になります。", image: "/images/takenoko-manju.jpg" },
            { name: "松本山賊焼き", price: "1,200円", description: "松本名物の山賊焼きです。鳥のもも肉を開き一枚丸ごと出汁に漬け豪快に揚げています。ボリュームもあり、満足していただけます。", image: "/images/sanzoku-yaki.jpg" },
            { name: "焼き大アサリ", price: "1,320円", description: "愛知県は知多半島で獲れる貝です。大きさにビックリ、美味しさにビックリして下さい。季節限定商品になります。" },
            { name: "信州プレミアム牛の溶岩焼き", price: "2,900円", description: "信州牛は餌にリンゴを混ぜているため、甘みがあり、たいへん美味しいお肉となっております。部位は最高級の三角バラを使用しております。", image: "/images/premium-beef-lava.jpg" },
            { name: "自家製さつま揚げ", price: "950円", description: "最高級のすり身を使い具には蛸や木耳、干し椎茸に人参や絹さや、彩も最高です。", image: "/images/satsuma-age.jpg" },
            { name: "小芋照り煮", price: "600円", image: "/images/koimo-terini.jpg" },
            { name: "焼きアスパラ", price: "770円", image: "/images/yaki-aspara.jpg" },
            { name: "鷹山ニンニクの天ぷら", price: "850円", description: "ニンニクを1回バラして水耕栽培されたニンニクです。その為、芽と根があります。とても美味。", image: "/images/takayama-ninniku.jpg" },
            { name: "焼きタケノコ", price: "1,500円", description: "季節限定になります。", image: "/images/yaki-takenoko.jpg" },
            { name: "ソフトシェルクラブ", price: "1,320円", description: "脱皮したてのカニをカラッと揚げています。殻ごと食べられるカニです。", image: "/images/soft-shell-crab.jpg" },
        ]
    },
    {
        category: "お刺身",
        items: [
            { name: "刺身盛り合わせ", price: "2,200円より", description: "まぐろ赤身・中トロ・生たこ・さより・平目・ホッキ貝・赤貝・甘エビなど鮮度バツグンの魚介を揃えております。", image: "/images/sashimi.jpg" },
            { name: "極上馬刺し", price: "1,650円", description: "地場産の最高級馬刺し。ヒレとロースの２種盛りなど、その日の仕入れ状況により変わる場合がございます。", image: "/images/basashi-premium.jpg" },
            { name: "天然岩ガキ", price: "1,650円" },
            { name: "馬レバー刺し", price: "1,650円", description: "レバーは鮮度が命。年に数回しか入荷できない幻の馬レバーです。", image: "/images/sashimi-assorted.jpg" },
        ]
    },
    {
        category: "酢の物",
        items: [
            { name: "ふぐ皮酢", price: "900円" },
            { name: "もずく酢", price: "600円" },
        ]
    },
    {
        category: "焼き物",
        items: [
            { name: "氷下魚", price: "700円" },
            { name: "北海ししゃも", price: "1,320円" },
            { name: "自家製鮎一夜干", price: "950円" },
            { name: "焼き大あさり", price: "1,320円" },
            { name: "きんき塩焼きor煮付け", price: "3,500円〜", description: "その日入荷された大きさにより価格変動いたします。" },
            { name: "のどぐろ塩焼きor煮付け", price: "3,500円〜", description: "その日入荷された大きさにより価格変動いたします。", image: "/images/nodoguro-shioyaki.jpg" },
            { name: "信州牛の溶岩焼き", price: "2,900円", image: "/images/premium-beef-lava.jpg" },
            { name: "アワビステーキ", price: "3,300円" },
        ]
    },
    {
        category: "揚げ物・天ぷら",
        items: [
            { name: "筍まんじゅう", price: "950円", description: "生地にたっぷりのタケノコを使い中にはそぼろのお肉を包んだ当店オリジナルのお饅頭です。季節商品になりますが、大人気の一品です。", image: "/images/takenoko-manju.jpg" },
            { name: "松本山賊焼き", price: "1,320円", description: "鳥モモ肉を1枚丸ごと特製のタレに漬けこみ豪快に揚げた、郷土料理。外はサクサク、中はジューシーです。", image: "/images/sanzoku-yaki.jpg" },
            { name: "海老変わり揚げ", price: "1,320円" },
            { name: "たこ唐揚げ", price: "770円", image: "/images/taco.jpg" },
            { name: "かじか唐揚げ", price: "1,320円", image: "/images/kazika.jpg" },
            { name: "ソフトシェルクラブ", price: "1,320円", image: "/images/soft-shell-crab.jpg" },
            { name: "穴子天ぷら", price: "1,650円" },
            { name: "車海老天ぷら", price: "1,650円" },
            { name: "鷹山にんにくの天ぷら", price: "850円" },
            { name: "鹿竜田揚げ", price: "1,320円" },
            { name: "自家製さつま揚げ", price: "950円", description: "最高級のすり身に、タコ、シイタケ、キクラゲ、人参、絹さやなど、具沢山のさつま揚げです。", image: "/images/satsuma-age.jpg" },
        ]
    },
    {
        category: "その他",
        items: [
            { name: "焼きアスパラ", price: "770円", image: "/images/asupara.jpg" },
            { name: "フルーツトマト", price: "800円" },
            { name: "自家製からすみ", price: "1,650円", image: "/images/karasumi2.jpg" },
            { name: "自家製鴨スモーク", price: "1,200円" },
            { name: "鯖のへしこ(2年物)", price: "850円", description: "鯖を糠に漬けて作られた商品。塩分が強い為、少しづつお召し上がりください。日本酒にはぴったりの一品です。" },
            { name: "小芋照り煮", price: "600円", image: "/images/koimo-terini.jpg" },
            { name: "しめ鯖", price: "750円" },
            { name: "いぶりがっこチーズ包み", price: "660円" },
            { name: "フグのカルパッチョ", price: "990円" },
        ]
    },
    {
        category: "お食事・〆の逸品",
        items: [
            { name: "お茶漬け(シャケ・タラコ・梅・のり)", price: "750円" },
            { name: "おにぎり(1ヶ)", price: "300円" },
            { name: "焼おにぎり(二ヶ)", price: "700円", image: "/images/onigiri.jpg" },
            { name: "氷見うどん", price: "800円" },
            { name: "赤出汁", price: "400円" },
            { name: "香の物", price: "600円" },
        ]
    }
];

const drinkMenu = [
    {
        category: "ビール",
        items: [
            { name: "瓶ビール [キリン]", price: "850円" },
            { name: "瓶ビール [アサヒ]", price: "850円" },
            { name: "瓶ビール [エビス]", price: "850円" },
            { name: "生ビール（中）", price: "850円" },
            { name: "生ビール（小）", price: "650円" },
            { name: "生ビール（グラス）", price: "500円" },
            { name: "ノンアルコールビール [アサヒドライゼロ]", price: "650円" },
        ]
    },
    {
        category: "信州の地酒",
        items: [
            { name: "いらか 銀", price: "1,320円" },
            { name: "大信州 辛口特別純米", price: "950円" },
            { name: "大雪渓 生酒(300ml)", price: "1,320円" },
            { name: "大雪渓 純米吟醸 槍", price: "950円" },
            { name: "大雪渓 大吟醸", price: "1,320円" },
            { name: "夜明け前 吟醸", price: "1,100円" },
            { name: "佐久の花 純米吟醸", price: "950円" },
            { name: "御湖鶴 純米吟醸", price: "1,320円" },
            { name: "美寿々 純米吟醸", price: "950円" },
        ]
    },
    {
        category: "日本酒・銘酒",
        items: [
            { name: "燗酒 [大雪渓(長野) / 両関(秋田)]", price: "600円", description: "2種類からお選びいただけます。" },
            { name: "フグヒレ酒", price: "1,320円" },
            { name: "〆張鶴 [新潟]", price: "950円" },
            { name: "緑川 [新潟]", price: "990円" },
            { name: "作 [三重]", price: "1,100円" },
            { name: "梅酒", price: "800円", description: "ロック or ソーダ割り" },
        ]
    },
    {
        category: "酎ハイ・ハイボール",
        items: [
            { name: "麦焼酎", price: "770円", description: "ロック、水割り、お湯割り。ソーダ割りは+50円" },
            { name: "芋焼酎", price: "770円", description: "ロック、水割り、お湯割り。ソーダ割りは+50円" },
            { name: "梅干し酎", price: "850円" },
            { name: "ウーロン酎", price: "770円" },
            { name: "生グレープフルーツ酎", price: "850円" },
            { name: "すだち酎 (季節限定)", price: "850円" },
            { name: "角ハイボール", price: "660円" },
            { name: "おすすめハイボール", price: "880円" },
        ]
    },
    {
        category: "焼酎ボトル",
        items: [
            { name: "【芋】桜島", price: "4,400円" },
            { name: "【芋】吉兆宝山", price: "4,400円" },
            { name: "【芋】赤兎馬", price: "4,400円" },
            { name: "【芋】一刻者（石蔵甕貯蔵）", price: "6,600円" },
            { name: "【芋】魔王 (数量限定)", price: "6,600円" },
            { name: "【麦】麦の一粒", price: "4,400円" },
            { name: "【麦】吉四六（陶器）", price: "5,500円" },
            { name: "【麦】いいちこ（フラスコ）", price: "6,600円" },
        ]
    },
    {
        category: "ワイン",
        items: [
            { name: "五一ワイン (フルボトル) [赤・白]", price: "3,950円" },
            { name: "五一ワイン (ハーフボトル)", price: "1,980円" },
            { name: "輸入ワイン各種 [赤・白]", price: "3,980円" },
        ]
    },
    {
        category: "ソフトドリンク",
        items: [
            { name: "オレンジ", price: "400円" },
            { name: "コーラ", price: "400円" },
            { name: "サイダー", price: "400円" },
            { name: "ウーロン茶", price: "400円" },
            { name: "ノンアルコールカクテル ゼロカク カシス", price: "700円" },
            { name: "ノンアルコールカクテル ゼロカク シャルドネ", price: "700円" },
        ]
    }
];

export default function MenuPage() {
    const [activeTab, setActiveTab] = useState<"course" | "alacarte" | "drink">("course");
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
                                        ※ 宴会は12名様までとなります
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
