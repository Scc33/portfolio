import CollectionsGrid from "../components/CollectionsGrid";

export const metadata = {
  title: "Collections",
  description: "Dynamic section to display selected product collections."
};

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Collections: {params.slug}
      </h1>
      <CollectionsGrid />
    </section>
  );
}
