import BlogCard from "../components/BlogCard/BlogCard";

export const metadata = {
    title: "Blog Card",
    description:
        "Blog card featuring editorial content, including an article cover image, a content category tag, a title, a brief description, and a call-to-action (CTA) link."
};

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Testimonial Card
            </h1>
            <BlogCard />
        </section>
    );
}
