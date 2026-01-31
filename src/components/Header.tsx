"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "ホーム", href: "/" },
    { name: "料理", href: "/menu" },
    { name: "きく蔵について", href: "/about" },
    { name: "アクセス", href: "/access" },
    { name: "よくあるご質問", href: "/faq" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? "hidden" : "";
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-black/80 backdrop-blur-md shadow-md py-2"
                    : "bg-black/50 backdrop-blur-sm shadow-sm py-3"
                    }`}
            >
                <div className="container mx-auto px-4 lg:px-6">
                    <nav className="flex items-center justify-between">
                        {/* ロゴ */}
                        <Link
                            href="/"
                            className="flex items-center shrink-0"
                        >
                            <img
                                src="/images/header-logo-new.png"
                                alt="きく蔵"
                                className="w-auto object-contain"
                                style={{ height: '48px', maxHeight: '48px' }}
                            />
                        </Link>

                        {/* デスクトップナビゲーション */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-sm tracking-wide transition-colors whitespace-nowrap ${pathname === item.href ? "font-medium" : ""}`}
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        color: "#FFFFFF"
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/reserve"
                                className="btn btn-primary text-sm px-5 py-2 whitespace-nowrap"
                            >
                                ご予約
                            </Link>
                            <a
                                href="https://www.instagram.com/kikuzou.taku/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:opacity-80 transition-opacity shrink-0"
                            >
                                <img
                                    src="/images/インスタロゴ-removebg-preview.png"
                                    alt="Instagram"
                                    className="w-6 h-6 object-contain brightness-0 invert"
                                />
                            </a>
                        </div>

                        {/* モバイルメニューボタン */}
                        <button
                            type="button"
                            className="md:hidden p-2 text-white"
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </nav>
                </div>
            </header>

            {/* モバイルメニュー（headerの外に配置してz-indexを最大に） */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 z-[9999]">
                    {/* オーバーレイ */}
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={closeMenu}
                    />
                    {/* メニュー本体 */}
                    <div className="absolute inset-x-0 top-[60px] bottom-0 bg-black/95 overflow-y-auto">
                        <nav className="flex flex-col items-center py-12 gap-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className={`text-lg tracking-wide ${pathname === item.href ? "font-medium" : ""}`}
                                    style={{
                                        fontFamily: "var(--font-serif)",
                                        color: "#FFFFFF"
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/reserve"
                                onClick={closeMenu}
                                className="btn btn-primary text-lg px-8 py-3 mt-4"
                            >
                                ご予約
                            </Link>
                            <a
                                href="https://www.instagram.com/kikuzou.taku/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white mt-4"
                            >
                                <img
                                    src="/images/インスタロゴ-removebg-preview.png"
                                    alt="Instagram"
                                    className="w-6 h-6 object-contain brightness-0 invert"
                                />
                                <span>Instagram</span>
                            </a>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
