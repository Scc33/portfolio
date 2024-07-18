import { Navbar } from "./components/nav";
import Footer from "./components/footer";


export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            lang="en"
            className="text-black bg-white dark:text-white dark:bg-black min-h-screen"
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
