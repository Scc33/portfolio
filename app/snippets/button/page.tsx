import ButtonsExamplePage from "./components/ButtonExample";

export const metadata = {
    title: "Buttons",
    description:
        "Buttons that will be used across various challenges and apps found within the platform, providing consistency throughout the user interface."
};

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Buttons
            </h1>
            <ButtonsExamplePage />
        </section>
    );
}
