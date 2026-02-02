"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, PanInfo, animate } from "framer-motion";

interface Card {
    id: number;
    src: string;
    title: string;
    description: string;
}

const CARDS: Card[] = [
    {
        id: 1,
        src: "/images/home_gallery/oma_maguro.jpg",
        title: "大間まぐろ",
        description: "最高級の大間産本マグロ。濃厚な旨味と美しいサシは、まさに海の宝石です。",
    },
    {
        id: 2,
        src: "/images/home_gallery/kano_gani.jpg",
        title: "加能ガニ",
        description: "石川県のブランド・ズワイガニ。繊細で甘みのある身が特徴。",
    },
    {
        id: 3,
        src: "/images/home_gallery/matsutake.jpg",
        title: "地物 松茸",
        description: "香りの王様。地場の採れたてをご提供。",
    },
    {
        id: 4,
        src: "/images/home_gallery/tessa.jpg",
        title: "てっさ",
        description: "職人技が光る薄造り。冬の味覚を心ゆくまで。",
    },
    {
        id: 5,
        src: "/images/home_gallery/renkon_manju.jpg",
        title: "蓮根饅頭",
        description: "もちもちとした食感と優しい出汁の味わい。",
    },
];

export default function CardStack() {
    const [cards, setCards] = useState(CARDS);
    // デッキがリセットされるたびにインクリメントするカウンター（キーの一意性確保）
    const [deckInstance, setDeckInstance] = useState(0);

    // カードをスワイプしたときの処理
    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, id: number, resetX: () => void) => {
        const threshold = 100; // スワイプとみなす移動距離
        if (Math.abs(info.offset.x) > threshold) {
            removeCard(id);
        } else {
            // 閾値に達しなかった場合、カードを元の位置にアニメーションで戻す
            resetX();
        }
    };

    const removeCard = (id: number) => {
        setCards((prev) => {
            const newCards = prev.filter((card) => card.id !== id);
            // カードがなくなったらリセット（ループさせる場合）
            // if (newCards.length === 0) return CARDS; 
            // 今回は「めくれていく」感じなので、最後の一枚になったらどうするか？
            // ユーザー要望「どんどんめくれていく」 -> ループさせた方が良さそう
            if (newCards.length === 0) {
                // デッキが空になったらリセットし、インスタンスカウンターを増やす
                setDeckInstance((d) => d + 1);
                return CARDS;
            }
            return newCards;
        });
    };

    // ループさせるために、カードが1枚以下になったらリセットするロジックを少し変更
    // あるいは、常に後ろにカードを追加していく無限スタック方式にするか。
    // ここではシンプルに「減っていく -> なくなったら復活」にする。

    // スタック表示のために逆順にする（DOMの重なり順のため）
    // Reactのレンダリング順序では、後にある要素が上にくるため、配列の最後が一番上になるようにする
    // しかし、配列の先頭を「一番上」として扱いたい（ロジック的に）
    // なので、表示するときに `reverse()` してレンダリングするか、z-indexを操作する。
    // ここでは z-index を操作する。

    return (
        <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center">
            <p className="absolute bottom-[-30px] text-gray-400 text-sm animate-pulse">
                ← 左右にスワイプしてめくれます →
            </p>
            <AnimatePresence mode="popLayout">
                {cards.map((card, index) => {
                    const isTop = index === 0;
                    return (
                        <CardItem
                            key={`${deckInstance}-${card.id}`}
                            card={card}
                            index={index}
                            active={isTop}
                            onDragEnd={(e, info, resetX) => handleDragEnd(e, info, card.id, resetX)}
                        />
                    );
                })}
            </AnimatePresence>
        </div>
    );
}

interface CardItemProps {
    card: Card;
    index: number;
    active: boolean;
    onDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, resetX: () => void) => void;
}

function CardItem({ card, index, active, onDragEnd }: CardItemProps) {
    const x = useMotionValue(0);

    // 回転はなし
    // const rotate = 0;

    // スタック状に見せるためのスタイル
    // 完全に重ねる（ズレなし、拡大縮小なし）
    const zIndex = 100 - index;
    // const scale = 1; // 常に1（背景カードも同じ大きさ）
    // const opacity = 1; // 常に1（不透明）

    // アクティブでなくなったら x を 0 にリセット
    useEffect(() => {
        if (!active) {
            x.set(0);
        }
    }, [active, x]);

    // x を 0 にアニメーションで戻す関数
    const resetX = () => {
        animate(x, 0, { type: "spring", stiffness: 500, damping: 30 });
    };

    // 3枚目以降は非表示
    if (index > 2) return null;

    return (
        <motion.div
            style={{
                zIndex,
                x: active ? x : 0,
                // rotate: 0,
                // opacity: 1,
                // scale: 1,
                // y: 0,
            }}
            drag={active ? "x" : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.8}
            // dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }} // resetXで制御するため削除
            onDragEnd={(e, info) => onDragEnd(e, info, resetX)}
            initial={false} // アニメーションなしで初期配置
            animate={{ x: active ? undefined : 0 }} // 背景カードの動きを止める（即時適用）
            exit={{
                x: x.get() < 0 ? -200 : 200,
                opacity: 0,
                transition: { duration: 0.4, ease: "easeInOut" }
            }}
            className="absolute w-[95%] max-w-[600px] aspect-[4/3] bg-white rounded-sm shadow-xl overflow-hidden cursor-grab active:cursor-grabbing border border-gray-50"
            whileTap={{ cursor: "grabbing" }}
        >
            <div className="relative w-full h-full">
                <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover pointer-events-none"
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority={index === 0}
                />
            </div>
        </motion.div>
    );
}
