export interface Collection {
    collection_id: string;
    name: string;
    description: string;
    image_url: string;
    created_at: string;
}

export const collectionsData: Collection[] = [
    {
        collection_id: "cozy",
        name: "Cozy Comfort",
        description: "Plush fabrics and soothing designs",
        image_url: "/collections/cozy-comfort.jpg",
        created_at: "2024-01-01"
    },
    {
        collection_id: "urban",
        name: "Urban Oasis",
        description: "For the city dwellers",
        image_url: "/collections/urban-oasis.jpg",
        created_at: "2024-01-01"
    },
    {
        collection_id: "fresh",
        name: "Fresh Fusion",
        description: "Contemporary styles and patterns",
        image_url: "/collections/fresh-fusion.jpg",
        created_at: "2024-01-01"
    }
];
