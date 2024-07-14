import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            lang="en"
            className={cx(
                "text-black bg-white dark:text-white dark:bg-black min-h-screen",
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <div className="antialiased max-w-3xl md:mx-auto">
                <main className="flex-auto min-w-0 flex flex-col px-2 pt-8 md:px-0 mx-4 sm:mx-0">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </div>
        </div>
    );
}
