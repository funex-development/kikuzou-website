import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "アクセス・店舗情報",
    description:
        "味処 きく蔵へのアクセス方法と店舗情報。住所：長野県松本市大手4丁目7-10。松本駅お城口から徒歩15分、松本城から徒歩5分。営業時間17:30〜22:00（日曜定休）。",
};

export default function AccessPage() {
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
                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl mb-4"
                        style={{ fontFamily: "var(--font-serif)", color: "#B8860B" }}
                    >
                        アクセス
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#B8860B" }}>
                        松本城から徒歩5分、東小路の隠れた名店
                    </p>
                </div>
            </section>

            {/* 地図 */}
            <section className="bg-[#F5F2EB]">
                <div className="w-full h-[400px] md:h-[500px]">
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
            </section>

            {/* 店舗情報 */}
            <section className="section bg-[#F5F2EB]">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* 基本情報 */}
                            <div className="bg-white rounded shadow-sm p-6 md:p-8">
                                <h2
                                    className="text-xl mb-6"
                                    style={{ fontFamily: "var(--font-serif)" }}
                                >
                                    店舗情報
                                </h2>
                                <table className="info-table">
                                    <tbody>
                                        <tr>
                                            <th>店名</th>
                                            <td>味処 きく蔵</td>
                                        </tr>
                                        <tr>
                                            <th>住所</th>
                                            <td>
                                                〒390-0874
                                                <br />
                                                長野県松本市大手4丁目7-10
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>電話番号</th>
                                            <td>
                                                <a
                                                    href="tel:0263-36-3728"
                                                    className="text-[#8B2500] hover:underline"
                                                >
                                                    0263-36-3728
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>営業時間</th>
                                            <td>17:30 ～ 22:00（L.O. 21:15）</td>
                                        </tr>
                                        <tr>
                                            <th>定休日</th>
                                            <td className="text-[#8B2500]">日曜日<br /><span className="text-xs text-black">※月曜日が祝日の場合は、日曜営業・月曜休業となります。</span></td>
                                        </tr>
                                        <tr>
                                            <th>席数</th>
                                            <td>38席（個室あり）</td>
                                        </tr>
                                        <tr>
                                            <th>お支払い</th>
                                            <td>
                                                現金 / カード（VISA, Master, JCB, AMEX, Diners）
                                                <br />
                                                PayPay
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* アクセス方法 */}
                            <div className="bg-white rounded shadow-sm p-6 md:p-8">
                                <h2
                                    className="text-xl mb-6"
                                    style={{ fontFamily: "var(--font-serif)" }}
                                >
                                    アクセス方法
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <span className="text-[#B8860B] text-xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /><line x1="7" y1="15" x2="7" y2="15.01" /><line x1="17" y1="15" x2="17" y2="15.01" /><line x1="2" y1="19" x2="3" y2="20" /><line x1="22" y1="19" x2="21" y2="20" /></svg>
                                            </span>
                                            電車でお越しの方
                                        </h3>
                                        <p className="text-[#333333] text-sm pl-7">
                                            JR松本駅「お城口」より徒歩約15分
                                            <br />
                                            松本大手郵便局近く
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <span className="text-[#B8860B]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20" /><path d="M21 22v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" /><path d="M12 14v-2" /><path d="M12 8l4 6H8l4-6z" /><path d="M12 2l4 6H8l4-6z" /></svg>
                                            </span>
                                            松本城からお越しの方
                                        </h3>
                                        <p className="text-[#333333] text-sm pl-7">
                                            松本城より徒歩約5分
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <span className="text-[#B8860B]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
                                            </span>
                                            お車でお越しの方
                                        </h3>
                                        <p className="text-[#333333] text-sm pl-7">
                                            長野自動車道 松本ICより約15分
                                            <br />
                                            <span className="text-[#8B2500]">
                                                ※ 専用駐車場はございません
                                            </span>
                                            <br />
                                            近隣にコインパーキングがございます
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 近隣駐車場案内 */}
                        <div className="mt-8 bg-white rounded shadow-sm p-6 md:p-8">
                            <h2
                                className="text-xl mb-4"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                近隣駐車場のご案内
                            </h2>
                            <p className="text-[#333333] mb-4">
                                当店には専用駐車場がございません。お車でお越しの際は、
                                近隣のコインパーキングをご利用ください。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-[#F5F2EB] rounded">
                                    <p className="font-medium text-sm">松本市営大手門駐車場</p>
                                    <p className="text-xs text-[#333333] mt-1">
                                        当店より徒歩約3分
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 予約CTA */}
            <section className="section bg-[#333333] text-white text-center">
                <div className="container mx-auto px-4 lg:px-6">
                    <h2
                        className="text-2xl md:text-3xl mb-4"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        ご来店をお待ちしております
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        ご予約・お問い合わせはお電話またはネットから
                    </p>
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
                </div>
            </section>
        </>
    );
}
