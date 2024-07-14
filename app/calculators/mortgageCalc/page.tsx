import MortgageCalc from "./components/MortgageCalc";

export const metadata = {
    title: "Mortgage Calculator",
    description: "Calculator for determining fixed rate mortgages."
};

const Page: React.FC = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Mortgage Calculator
            </h1>
            <MortgageCalc />
        </section>
    );
};

export default Page;
