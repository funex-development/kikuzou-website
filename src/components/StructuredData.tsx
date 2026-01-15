export default function StructuredData() {
    const restaurantSchema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "@id": "https://kikuzou.vercel.app/#restaurant",
        name: "割烹・季節料理 きく蔵",
        alternateName: "きく蔵",
        description:
            "創業1970年、長野県松本市の老舗割烹料理店。食べログ日本料理百名店選出。地場産の天然きのこを使用したきのこ鍋、極上の馬刺し、季節の河豚料理など四季折々の味覚をお楽しみください。",
        url: "https://kikuzou.vercel.app",
        telephone: "+81-263-36-3728",
        email: "",
        image: "https://kikuzou.vercel.app/images/og-image.png",
        priceRange: "¥6,000～¥15,000",
        servesCuisine: ["日本料理", "割烹", "懐石料理", "和食"],
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
        name: "割烹・季節料理 きく蔵",
        image: "https://kikuzou.vercel.app/images/og-image.png",
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
