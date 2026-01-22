import { Metadata } from "next";
import { FAQStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "よくあるご質問",
    description:
        "味処 きく蔵のよくあるご質問。予約、お子様連れ、個室、駐車場、お支払い方法、キャンセル料などについてお答えしております。",
};

const faqs = [
    {
        question: "予約は必要ですか？",
        answer:
            "お席のご予約をおすすめしております。特に週末や繁忙期は満席になることが多いため、事前のご予約をお願いいたします。コース料理は3日前までにご予約ください。",
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

export default function FAQPage() {
    return (
        <>
            <FAQStructuredData faqs={faqs} />

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
                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl mb-4"
                        style={{ fontFamily: "var(--font-serif)", color: "#B8860B" }}
                    >
                        よくあるご質問
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#B8860B" }}>
                        お客様から寄せられるご質問
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="section bg-[#F5F2EB]">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-3xl mx-auto">
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
                                        <p className="text-[#333333] text-sm leading-relaxed">
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
