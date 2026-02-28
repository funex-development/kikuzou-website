export default function StructuredData() {
    const restaurantSchema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "@id": "https://kikuzou.vercel.app/#restaurant",
        name: "味処 きく蔵",
        alternateName: "きく蔵",
        description:
            "創業1970年、長野県松本市の老舗日本料理店。食べログ日本料理百名店に3度選出。松本の和食・郷土料理の名店として、極上の馬刺し、季節の河豚コース、秋の松茸料理、名物の松本山賊焼きなど四季折々の味覚をお届け。",
        url: "https://kikuzou.vercel.app",
        telephone: "+81-263-36-3728",
        email: "",
        image: "https://kikuzou.vercel.app/images/og-image.jpg",
        priceRange: "¥6,000～¥15,000",
        servesCuisine: ["日本料理", "味処", "懐石料理", "和食", "郷土料理", "信州料理"],
        address: {
            "@type": "PostalAddress",
            streetAddress: "大手4丁目7-10",
            addressLocality: "松本市",
            addressRegion: "長野県",
            postalCode: "390-0874",
            addressCountry: "JP",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 36.2376,
            longitude: 137.9712,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "17:30",
                closes: "22:00",
            },
        ],
        hasMenu: "https://kikuzou.vercel.app/menu",
        acceptsReservations: "True",
        menu: "https://kikuzou.vercel.app/menu",
        knowsAbout: [
            "松本 日本料理",
            "松本 和食",
            "松本 郷土料理",
            "松本 食べログ百名店",
            "松本 河豚",
            "松本 馬刺し",
            "松本 松茸",
            "松本 山賊焼",
            "信州料理",
            "懐石料理",
            "きのこ鍋",
            "牛丹鍋",
            "クエ鍋",
        ],
        founder: {
            "@type": "Person",
            name: "創業者",
        },
        foundingDate: "1970-05-01",
        award: [
            "食べログ日本料理百名店 2021",
            "食べログ日本料理百名店 2023",
            "食べログ日本料理百名店 2025",
        ],
        sameAs: [
            "https://www.instagram.com/kikuzou.taku/",
            "https://tabelog.com/nagano/A2002/A200201/20000774/",
        ],
        potentialAction: {
            "@type": "ReserveAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://kikuzou.vercel.app/reserve",
            },
            result: {
                "@type": "Reservation",
                name: "Table reservation",
            },
        },
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kikuzou.vercel.app/#localbusiness",
        name: "味処 きく蔵",
        image: "https://kikuzou.vercel.app/images/og-image.jpg",
        telephone: "+81-263-36-3728",
        address: {
            "@type": "PostalAddress",
            streetAddress: "大手4丁目7-10",
            addressLocality: "松本市",
            addressRegion: "長野県",
            postalCode: "390-0874",
            addressCountry: "JP",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 36.2376,
            longitude: 137.9712,
        },
        url: "https://kikuzou.vercel.app",
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "17:30",
                closes: "22:00",
            },
        ],
        priceRange: "¥¥¥",
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "ホーム",
                item: "https://kikuzou.vercel.app",
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(restaurantSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </>
    );
}

export function FAQStructuredData({
    faqs,
}: {
    faqs: { question: string; answer: string }[];
}) {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqSchema),
            }}
        />
    );
}
