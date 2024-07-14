import NotFound from "./component/NotFound";

export const metadata = {
    title: "Not Found",
    description: "404 Not Found page."
};

const Page: React.FC = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Not Found
            </h1>
            <NotFound />
        </section>
    );
};

export default Page;
