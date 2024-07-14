import StatsSection from "./components/StatsSection";

export const metadata = {
    title: "Stats Section",
    description: "Statistics section to display key metrics in real-time."
};

const Page: React.FC = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Stats Section
            </h1>
            <StatsSection />
        </section>
    );
};

export default Page;
