import CollectionsGrid from "./components/CollectionsGrid";

export const metadata = {
    title: "Collections",
    description: "Dynamic section to display selected product collections."
};

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Collections
            </h1>
            <CollectionsGrid />
        </section>
    );
}
