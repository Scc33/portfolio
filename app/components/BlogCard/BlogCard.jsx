import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
    return (
        <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-48 sm:h-64 lg:h-80">
                <Image
                    src="/blogCard/roomImage.jpg"
                    alt="Living room interior"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                />
            </div>
            <div className="p-6">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs font-medium rounded-full mb-4">
                    Interior
                </span>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
                    Top 5 Living Room Inspirations
                </h2>
                <p className="text-neutral-600 mb-4">
                    Curated vibrants colors for your living, make it pop & calm
                    in the same time.
                </p>
                <Link
                    href="/"
                    className="text-indigo-700 font-medium hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 inline-flex items-center"
                >
                    Read more
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
