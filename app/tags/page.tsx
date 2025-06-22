import { projectsData } from "../components/Projects";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

export default function TagsPage() {
    // Get all unique tags with their project counts
    const tagCounts = new Map<string, number>();

    projectsData.forEach((project) => {
        project.tags.forEach((tag) => {
            const normalizedTag = tag.toLowerCase();
            tagCounts.set(
                normalizedTag,
                (tagCounts.get(normalizedTag) || 0) + 1
            );
        });
    });

    // Sort tags by count (descending) then alphabetically
    const sortedTags = Array.from(tagCounts.entries()).sort(
        ([a, countA], [b, countB]) => {
            if (countB !== countA) {
                return countB - countA;
            }
            return a.localeCompare(b);
        }
    );

    return (
        <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 pt-6 lg:grid lg:gap-x-0 xl:gap-x-8">
            <Nav />
            <section>
                <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
                    All Tags
                </h1>
                <p className="mb-8">
                    Browse projects by technology, framework, or category. Click
                    on any tag to see all projects that use it.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {sortedTags.map(([tag, count]) => (
                        <Link
                            key={tag}
                            href={`/${encodeURIComponent(tag)}`}
                            className="bg-black/[0.7] px-4 py-3 text-white rounded-lg hover:bg-black/[0.8] transition-colors"
                        >
                            <div className="text-sm font-medium uppercase tracking-wider">
                                {tag}
                            </div>
                            <div className="text-xs text-gray-300 mt-1">
                                {count} project{count !== 1 ? "s" : ""}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
