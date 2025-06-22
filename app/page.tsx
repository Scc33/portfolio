import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Link from "next/link";

export default function Page() {
    return (
        <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 pt-6 lg:grid lg:gap-x-0 xl:gap-x-8">
            <Nav />
            <section>
                <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
                    My Portfolio
                </h1>
                <p className="mb-8">
                    Welcome to my portfolio. Here you can find some of the
                    projects I&apos;ve worked on. I&apos;m passionate about
                    building things for the web.
                </p>
                <div className="mb-8">
                    <Link
                        href="/tags"
                        className="inline-flex items-center px-4 py-2 bg-black/[0.7] text-white rounded-lg hover:bg-black/[0.8] transition-colors text-sm"
                    >
                        View All Tags
                    </Link>
                </div>
                <Projects />
            </section>
            <Footer />
        </div>
    );
}
