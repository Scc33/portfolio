import PortfolioCard from "../components/PortfolioCard";

export const metadata = {
    title: "Portfolio Card",
    description:
        "Profile card that includes a profile picture, name, title, links to social media profiles, and a call-to-action (CTA) button."
};

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Portfolio Card
            </h1>
            <PortfolioCard />
        </section>
    );
}
