import { Collection } from "../data/CollectionsData";
import CollectionCard from "./CollectionsCard";
import { collectionsData } from "../data/CollectionsData";

const CollectionsGrid = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-8">
                Our Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {collectionsData.map((collection: Collection, index: number) => (
                    <CollectionCard
                        key={collection.collection_id}
                        collection={collection}
                        variant={index === 0 ? "primary" : "secondary"}
                    />
                ))}
            </div>
        </div>
    );
};

export default CollectionsGrid;
