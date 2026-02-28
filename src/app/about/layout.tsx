import { Metadata } from "next";

// きく蔵についてページ用のSEOメタデータ
// 松本の日本料理・和食・郷土料理・食べログ百名店などのキーワードを網羅
export const metadata: Metadata = {
    title: "きく蔵について | 松本の和食・郷土料理の名店",
    description:
        "創業1970年、長野県松本市の老舗日本料理店「味処 きく蔵」のご紹介。食べログ日本料理百名店に3度選出。松本城から徒歩5分、信州の郷土料理と和食を提供する名店。極上の馬刺し、河豚コース、松茸料理、山賊焼きなど四季折々の料理と、カウンター・個室・座敷を備えた落ち着いた空間でおもてなしいたします。",
    openGraph: {
        title: "きく蔵について | 松本の日本料理・和食の百名店",
        description:
            "創業1970年、食べログ百名店3度選出の松本の老舗日本料理店。馬刺し・河豚・松茸・山賊焼きなど信州の郷土料理をご堪能ください。",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
