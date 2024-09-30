import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function Page() {
    return (
        <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 pt-6 lg:grid lg:gap-x-0 xl:gap-x-8">
            <section>
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                    My Portfolio
                </h1>
                <Projects />
            </section>
            <Footer />
        </div>
    );
}
