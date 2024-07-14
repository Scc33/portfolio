import { PortfolioPieces } from "app/snippets/components/PortfolioPieces";
import { PAGE_METADATA } from "../data/Pages";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Portfolio
            </h1>
            <div className="my-8">
                <PortfolioPieces pages={PAGE_METADATA} />
            </div>
        </section>
    );
}
