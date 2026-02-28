"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    threshold?: number;
}

// 方向に応じた初期位置のスタイル（コンポーネント外に定義 - rerender-derived-state-no-effect）
function getInitialTransform(direction: FadeInProps["direction"]) {
    switch (direction) {
        case "up":
            return "translateY(30px)";
        case "down":
            return "translateY(-30px)";
        case "left":
            return "translateX(30px)";
        case "right":
            return "translateX(-30px)";
        case "none":
            return "none";
        default:
            return "translateY(30px)";
    }
}

/**
 * スクロールに合わせてフェードインするアニメーションコンポーネント
 * IntersectionObserverを使用し、要素が画面に入ったときにアニメーションを発火
 */
export function FadeIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 600,
    threshold = 0.1,
}: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 遅延を適用してからアニメーションクラスを追加
                        setTimeout(() => {
                            element.classList.add("animate-visible");
                        }, delay);
                        // 一度表示されたら監視を解除
                        observer.unobserve(element);
                    }
                });
            },
            { threshold, rootMargin: "0px 0px 0px 0px" }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [delay, threshold]);

    return (
        <div
            ref={ref}
            className={`animate-fade-in ${className}`}
            style={{
                opacity: 0,
                transform: getInitialTransform(direction),
                transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
        >
            {children}
        </div>
    );
}

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

/**
 * 子要素を順番にアニメーションさせるコンテナ
 * 各子要素に順番に遅延をつけてフェードイン
 */
export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 100,
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const children = container.querySelectorAll(".stagger-item");
                        children.forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add("animate-visible");
                            }, index * staggerDelay);
                        });
                        observer.unobserve(container);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(container);

        return () => observer.disconnect();
    }, [staggerDelay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

interface ZoomImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
    fill?: boolean;
}

/**
 * ホバー時にズームインするイメージコンポーネント
 */
export function ZoomImage({
    src,
    alt,
    className = "",
    containerClassName = "",
}: ZoomImageProps) {
    return (
        <div className={`overflow-hidden ${containerClassName}`}>
            <img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110 ${className}`}
            />
        </div>
    );
}
