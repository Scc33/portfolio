import Badge from "./components/Badge";

export const metadata = {
  title: "Badges",
  description:
    "A badge component that can be used for displaying numbers and short text.",
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-6">Badges</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-3 gap-4 place-items-center">
          <Badge label="Label" size="sm" color="default" />
          <Badge label="Label" size="md" color="default" />
          <Badge label="Label" size="lg" color="default" />
          <Badge label="Label" size="sm" color="red" />
          <Badge label="Label" size="md" color="red" />
          <Badge label="Label" size="lg" color="red" />
          <Badge label="Label" size="sm" color="yellow" />
          <Badge label="Label" size="md" color="yellow" />
          <Badge label="Label" size="lg" color="yellow" />
          <Badge label="Label" size="sm" color="green" />
          <Badge label="Label" size="md" color="green" />
          <Badge label="Label" size="lg" color="green" />
          <Badge label="Label" size="sm" color="blue" />
          <Badge label="Label" size="md" color="blue" />
          <Badge label="Label" size="lg" color="blue" />
        </div>
      </div>{" "}
    </div>
  );
}
