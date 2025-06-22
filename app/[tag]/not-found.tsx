import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 pt-6 lg:grid lg:gap-x-0 xl:gap-x-8">
            <Nav />
            <section className="text-center py-12">
                <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
                    Tag Not Found
                </h1>
                <p className="mb-8 text-gray-600">
                    The tag you&apos;re looking for doesn&apos;t exist or has no
                    associated projects.
                </p>
                <div className="space-x-4">
                    <Link
                        href="/"
                        className="inline-flex items-center px-4 py-2 bg-black/[0.7] text-white rounded-lg hover:bg-black/[0.8] transition-colors"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/tags"
                        className="inline-flex items-center px-4 py-2 border border-black/[0.7] text-black rounded-lg hover:bg-black/[0.05] transition-colors"
                    >
                        View All Tags
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
}
