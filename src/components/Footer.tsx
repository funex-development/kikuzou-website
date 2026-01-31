import Link from "next/link";

const footerNavigation = [
    { name: "ホーム", href: "/" },
    { name: "料理", href: "/menu" },
    { name: "きく蔵について", href: "/about" },
    { name: "アクセス", href: "/access" },
    { name: "ご予約", href: "/reserve" },
    { name: "よくあるご質問", href: "/faq" },
];

export default function Footer() {
    return (
        <footer className="bg-[#333333] text-white">
            <div className="container mx-auto px-4 lg:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* 店舗情報 */}
                    <div>
                        <h3
                            className="text-xl font-medium mb-6 text-[#B8860B]"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            味処 きく蔵
                        </h3>
                        <address className="not-italic space-y-2 text-sm text-gray-300">
                            <p>〒390-0874</p>
                            <p>長野県松本市大手4丁目7-10</p>
                            <p className="pt-2">
                                <a
                                    href="tel:0263-36-3728"
                                    className="hover:text-[#B8860B] transition-colors"
                                >
                                    TEL: 0263-36-3728
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* 営業時間 */}
                    <div>
                        <h3
                            className="text-lg font-medium mb-6"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            営業時間
                        </h3>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p>17:30 ～ 22:00（L.O. 21:15）</p>
                            <p className="text-white">定休日：日曜日<br /><span className="text-xs">※月曜日が祝日の場合は、日曜営業・月曜休業となります。</span></p>
                        </div>
                    </div>

                    {/* ナビゲーション */}
                    <div>
                        <h3
                            className="text-lg font-medium mb-6"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            メニュー
                        </h3>
                        <nav>
                            <ul className="space-y-2 text-sm">
                                {footerNavigation.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* 区切り線とリンク */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* 外部リンク */}
                        <div className="flex items-center gap-6">
                            <a
                                href="https://www.instagram.com/kikuzou.taku/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="/images/インスタロゴ-removebg-preview.png"
                                    alt="Instagram"
                                    className="w-8 h-8 object-contain"
                                />
                            </a>
                            <a
                                href="https://tabelog.com/nagano/A2002/A200201/20000774/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="食べログ"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </a>
                        </div>

                        {/* コピーライト */}
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} 味処 きく蔵. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
