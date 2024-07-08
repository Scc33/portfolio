import { PageMetadata } from "app/data/Pages";
import Link from "next/link";

export function PortfolioPieces({ pages }) {
    return (
        <div>
            {pages.map((page: PageMetadata) => (
                <Link
                    className="flex flex-col space-y-1 mb-4"
                    href={page.endpoint}
                    key={page.endpoint}
                >
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                        <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                            {page.date}
                        </p>
                        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                            {page.name}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
