import HeroSection from "../components/HeroSection";

export const metadata = {
    title: "Hero Section",
    description: "Minimal hero section that includes an image."
};

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Hero Section
            </h1>
            <HeroSection isVisible={false} />
        </section>
    );
}
