import { PortfolioPieces } from "./components/PortfolioPieces";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Snippets
            </h1>
            <p>
                These were created in the process of learning Next.js. They
                worked at one point but no promises they work anymore.
            </p>
            <div className="my-8">
                <PortfolioPieces />
            </div>
        </section>
    );
}
