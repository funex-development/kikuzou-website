import { Metadata } from "next";
import { FAQStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "ご予約",
    description:
        "割烹・季節料理きく蔵のご予約案内。電話予約（0263-36-3728）または食べログからネット予約が可能です。コース料理は前日までにご予約ください。キャンセルポリシー、よくあるご質問もご確認いただけます。",
};

const faqs = [
    {
        question: "予約は必要ですか？",
        answer:
            "お席のご予約をおすすめしております。特に週末や繁忙期は満席になることが多いため、事前のご予約をお願いいたします。コース料理は前日までにご予約ください。",
    },
    {
        question: "子供連れでも大丈夫ですか？",
        answer:
            "はい、お子様連れでもご来店いただけます。個室もございますので、お気軽にご利用ください。なお、お子様連れのご予約はお電話にてお願いいたします。",
    },
    {
        question: "個室はありますか？",
        answer:
            "はい、個室をご用意しております。2〜4名様の半個室が2室、4〜6名様の完全個室、4〜12名様までの完全個室がございます。ご予約時にお申し付けください。",
    },
    {
        question: "駐車場はありますか？",
        answer:
            "申し訳ございませんが、専用駐車場はございません。近隣にコインパーキングがございますので、そちらをご利用ください。",
    },
    {
        question: "クレジットカードは使えますか？",
        answer:
            "はい、VISA、Master、JCB、AMEX、Dinersがご利用いただけます。また、PayPayでのお支払いも可能です。",
    },
    {
        question: "予約のキャンセル料はかかりますか？",
        answer:
            "コース予約の場合、ご来店2日前から50%、前日70%、当日100%のキャンセル料が発生します。席のみ予約の場合、当日及び無断キャンセルは1名あたり3,000円のキャンセル料をいただきます。",
    },
    {
        question: "滞在時間に制限はありますか？",
        answer:
            "混雑状況により、お席の滞在時間を2時間までとさせていただく場合がございます。あらかじめご了承ください。",
    },
];

export default function ReservePage() {
    return (
        <>
            <FAQStructuredData faqs={faqs} />

            {/* ページヘッダー */}
            <section className="pt-32 pb-16 bg-[#333333] flex items-center justify-center">
                <div className="container mx-auto px-4 lg:px-6 text-center">
                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl mb-4"
                        style={{ fontFamily: "var(--font-serif)", color: "#B8860B" }}
                    >
                        ご予約
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#B8860B" }}>
                        お電話またはネットからご予約いただけます
                    </p>
                </div>
            </section>

            {/* 予約方法 */}
            <section className="section bg-[#F5F2EB]">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* 電話予約 */}
                            <div className="bg-white rounded shadow-sm p-8 text-center">
                                <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl text-[#B8860B]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </span>
                                </div>
                                <h2
                                    className="text-xl mb-4"
                                    style={{ fontFamily: "var(--font-serif)" }}
                                >
                                    お電話でのご予約
                                </h2>
                                <p className="text-[#555555] text-sm mb-6">
                                    3名様以上、お子様連れ、
                                    <br />
                                    ネット予約が満席の場合はお電話ください
                                </p>
                                <a
                                    href="tel:0263-36-3728"
                                    className="block text-2xl md:text-3xl font-medium text-[#8B2500] hover:text-[#A83000] transition-colors mb-4"
                                >
                                    0263-36-3728
                                </a>
                                <p className="text-sm text-[#555555]">
                                    受付時間：17:30〜22:00（日曜定休）
                                </p>
                            </div>

                            {/* ネット予約 */}
                            <div className="bg-white rounded shadow-sm p-8 text-center">
                                <div className="w-16 h-16 bg-[#8B2500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl text-[#8B2500]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="21" x2="22" y2="21"></line></svg>
                                    </span>
                                </div>
                                <h2
                                    className="text-xl mb-4"
                                    style={{ fontFamily: "var(--font-serif)" }}
                                >
                                    ネット予約
                                </h2>
                                <p className="text-[#555555] text-sm mb-6">
                                    食べログから24時間
                                    <br />
                                    ご予約いただけます
                                </p>
                                <a
                                    href="https://tabelog.com/nagano/A2002/A200201/20000774/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full text-base py-4"
                                >
                                    食べログで予約する
                                </a>
                                <p className="text-xs text-[#555555] mt-4">
                                    ※ 外部サイトに移動します
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 予約時の注意事項 */}
            <section className="section bg-white">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="section-title">
                            <h2 style={{ fontFamily: "var(--font-serif)" }}>
                                ご予約時の注意事項
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 bg-[#F5F2EB] rounded">
                                <h3 className="font-medium mb-3 flex items-center gap-2">
                                    <span className="text-[#8B2500]">●</span>
                                    コース料理のご予約
                                </h3>
                                <p className="text-[#555555] text-sm pl-5">
                                    コース料理は前日までにご予約ください。
                                    <br />
                                    宴会は12名様までとなります。
                                </p>
                            </div>

                            <div className="p-6 bg-[#F5F2EB] rounded">
                                <h3 className="font-medium mb-3 flex items-center gap-2">
                                    <span className="text-[#8B2500]">●</span>
                                    お子様連れのお客様
                                </h3>
                                <p className="text-[#555555] text-sm pl-5">
                                    お子様連れでのご予約はお電話にてお願いいたします。
                                    <br />
                                    個室のご案内などもさせていただきます。
                                </p>
                            </div>

                            <div className="p-6 bg-[#F5F2EB] rounded">
                                <h3 className="font-medium mb-3 flex items-center gap-2">
                                    <span className="text-[#8B2500]">●</span>
                                    滞在時間
                                </h3>
                                <p className="text-[#555555] text-sm pl-5">
                                    混雑状況により、お席の滞在時間を2時間までとさせていただく場合がございます。
                                </p>
                            </div>

                            <div className="p-6 bg-[#F5F2EB] rounded">
                                <h3 className="font-medium mb-3 flex items-center gap-2">
                                    <span className="text-[#8B2500]">●</span>
                                    お通し代
                                </h3>
                                <p className="text-[#555555] text-sm pl-5">
                                    お通し代として700円を頂戴しております。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* キャンセルポリシー */}
            <section className="section-sm bg-[#333333] text-white">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2
                            className="text-xl text-center mb-6"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            キャンセルポリシー
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/10 rounded p-6">
                                <h3 className="font-medium mb-4 text-white" style={{ color: "white" }}>
                                    コース予約の場合
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex justify-between">
                                        <span>2日前</span>
                                        <span>コース料金の50%</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>前日</span>
                                        <span>コース料金の70%</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>当日</span>
                                        <span>コース料金の100%</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded p-6">
                                <h3 className="font-medium mb-4 text-white" style={{ color: "white" }}>
                                    席のみ予約の場合
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex justify-between">
                                        <span>当日・無断キャンセル</span>
                                        <span>1名あたり3,000円</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section bg-[#F5F2EB]">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="section-title">
                            <h2 style={{ fontFamily: "var(--font-serif)" }}>
                                よくあるご質問
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="bg-white rounded shadow-sm overflow-hidden group"
                                >
                                    <summary className="p-4 md:p-6 cursor-pointer list-none flex items-center justify-between hover:bg-[#FAFAFA] transition-colors">
                                        <span className="font-medium pr-4">{faq.question}</span>
                                        <span className="text-[#8B2500] shrink-0 transition-transform group-open:rotate-180">
                                            ▼
                                        </span>
                                    </summary>
                                    <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                                        <p className="text-[#555555] text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
