import CollectionsGrid from "../components/CollectionsGrid";
import { collectionsData } from "../data/CollectionsData";

export const metadata = {
    title: "Collections",
    description: "Dynamic section to display selected product collections."
};

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Collections: {params.slug}
            </h1>
            <CollectionsGrid collections={collectionsData} />
        </section>
    );
}
