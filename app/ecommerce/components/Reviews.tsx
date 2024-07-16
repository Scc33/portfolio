"use client";

import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "../lib/utils";
import Phone from "./Phone";

const PHONES = [
    "/ecommerce/testimonials/1.jpg",
    "/ecommerce/testimonials/2.jpg",
    "/ecommerce/testimonials/3.jpg",
    "/ecommerce/testimonials/4.jpg",
    "/ecommerce/testimonials/5.jpg",
    "/ecommerce/testimonials/6.jpg"
];

const splitArray = (arr: Array<any>, n: number) => {
    const result: Array<Array<any>> = [];
    for (let i = 0; i < n; i++) {
        result.push(
            arr.slice(i * (arr.length / n), (i + 1) * (arr.length / n))
        );
    }
    return result;
};

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
}

const Review = ({ imgSrc, className, ...props }: ReviewProps) => {
    const POSSIBLE_ANIMATION_DELAYS = [
        "0s",
        "0.1s",
        "0.2s",
        "0.3s",
        "0.4s",
        "0.5s"
    ];

    const animationDelay =
        POSSIBLE_ANIMATION_DELAYS[
            Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
        ];

    return (
        <div
            className={cn(
                "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
                className
            )}
            style={{ animationDelay }}
            {...props}
        >
            <Phone imgSrc={imgSrc} className="w-24 h-24" />
        </div>
    );
};

const ReviewColumn = ({
    reviews,
    className,
    reviewClassName,
    msPerPixel = 0
}: {
    reviews: string[];
    className?: string;
    reviewClassName?: (reviewIndex: number) => string;
    msPerPixel?: number;
}) => {
    const columnRef = useRef<HTMLDivElement | null>(null);
    const [columnHeight, setColumnHeight] = useState(0);
    const duration = `${columnHeight * msPerPixel}ms`;

    // Empty dependency array so it'll only run once
    useEffect(() => {
        if (!columnRef.current) return;

        const resizeObserver = new window.ResizeObserver((entries) => {
            setColumnHeight(columnRef.current?.offsetHeight ?? 0);
        });

        resizeObserver.observe(columnRef.current);

        // Clean up after ourselves to avoid memory leaks
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div
            ref={columnRef}
            className={cn("animate-marquee space-y-8 py-4", className)}
            style={{ "--marquee-duration": duration } as React.CSSProperties}
        >
            {reviews.concat(reviews).map((imgSrc, reviewIndex) => {
                return (
                    <Review
                        key={reviewIndex}
                        className={reviewClassName?.(
                            reviewIndex % reviews.length
                        )}
                        imgSrc={imgSrc}
                    />
                );
            })}
        </div>
    );
};

const ReviewGrid = () => {
    // Required to check if the container is in view
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.4 });
    const columns = splitArray(PHONES, 3);
    const columns1 = columns[0];
    const columns2 = columns[1];
    const columns3 = splitArray(columns[2], 2);

    return (
        <div
            ref={containerRef}
            className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
        >
            {isInView && (
                <>
                    <ReviewColumn
                        reviews={[...columns1, ...columns3.flat(), ...columns2]}
                        reviewClassName={(reviewIndex) => cn({"md:hidden": reviewIndex >= columns1.length + columns3[0].length, "lg:hidden": reviewIndex >= columns1.length})}
                        msPerPixel={10}
                    />
                    <ReviewColumn
                        reviews={[...columns2, ...columns3[1]]}
                        className="hidden md:block"
                        reviewClassName={(reviewIndex) => reviewIndex >= columns2.length ? 'lg:hidden' : ''}
                        msPerPixel={15}
                    />
                    <ReviewColumn
                        reviews={columns3.flat()}
                        className="hidden md:block"
                        msPerPixel={10}
                    />
                </>
            )}
        </div>
    );
};

const Reviews = () => {
    return (
        <MaxWidthWrapper className="relative max-w-5xl">
            <Image
                aria-hidden="true"
                src="/ecommerce/what-people-are-buying.png"
                className='absolute select-none hidden xl:block -left-32 top-1/3'
                width={400}
                height={400}
                alt="What people are buying"
            />
            <ReviewGrid />
        </MaxWidthWrapper>
    );
};

export default Reviews;
