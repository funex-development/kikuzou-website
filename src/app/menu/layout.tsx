import { Metadata } from "next";

// 料理ページ用のSEOメタデータ
// 松本の日本料理・和食・郷土料理・馬刺し・河豚・松茸・山賊焼きなどのキーワードを網羅
export const metadata: Metadata = {
    title: "料理メニュー | 松本の日本料理・和食・郷土料理",
    description:
        "味処 きく蔵の料理メニュー。松本の和食・郷土料理の名店として、極上の馬刺し、九州直送の河豚コース、秋の松茸料理、名物の松本山賊焼き、天然きのこ鍋など信州の旬の食材を使った懐石コースと一品料理をご用意。食べログ百名店選出の味をお楽しみください。",
    openGraph: {
        title: "料理メニュー | 味処 きく蔵 - 松本の日本料理・和食",
        description:
            "松本の老舗日本料理店きく蔵の料理メニュー。馬刺し・河豚・松茸・山賊焼きなど信州の郷土料理と四季折々の懐石コースをご紹介。",
    },
};

export default function MenuLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
