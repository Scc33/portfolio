import Image from "next/image";
import Link from "next/link";

const CollectionCard = ({ collection, variant = "secondary" }) => {
    const { name, description, image_url, collection_id } = collection;

    return (
        <Link
            href={`/snippets/collections/${collection_id}`}
            className={`
      group relative overflow-hidden rounded-lg
      ${
          variant === "primary"
              ? "col-span-full md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-square"
              : "col-span-full md:col-span-1 aspect-[4/3]"
      }
      w-full h-full
    `}
        >
            <Image
                src={image_url}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-4 md:p-6 lg:p-8">
                <h3 className="text-base font-semibold text-white mb-2">
                    {name}
                </h3>
                <p className="text-sm md:text-base text-white">{description}</p>
            </div>
        </Link>
    );
};

export default CollectionCard;
