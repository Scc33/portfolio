import { notFound } from "next/navigation";
import { projectsData } from "../components/Projects";
import Project from "../components/Project";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

interface TagPageProps {
    params: {
        tag: string;
    };
}

export default function TagPage({ params }: TagPageProps) {
    const { tag } = params;
    const decodedTag = decodeURIComponent(tag);

    // Filter projects that contain this tag
    const filteredProjects = projectsData.filter((project) =>
        project.tags.some(
            (projectTag) =>
                projectTag.toLowerCase() === decodedTag.toLowerCase()
        )
    );

    if (filteredProjects.length === 0) {
        notFound();
    }

    return (
        <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 pt-6 lg:grid lg:gap-x-0 xl:gap-x-8">
            <Nav />
            <section>
                <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
                    Projects tagged with &ldquo;{decodedTag}&rdquo;
                </h1>
                <p className="mb-8">
                    Showing {filteredProjects.length} project
                    {filteredProjects.length !== 1 ? "s" : ""} tagged with
                    &ldquo;{decodedTag}&rdquo;.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Project key={index} {...project} />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

// Generate static params for all tags
export function generateStaticParams() {
    const allTags = new Set<string>();

    projectsData.forEach((project) => {
        project.tags.forEach((tag) => {
            allTags.add(tag.toLowerCase());
        });
    });

    return Array.from(allTags).map((tag) => ({
        tag: tag
    }));
}
