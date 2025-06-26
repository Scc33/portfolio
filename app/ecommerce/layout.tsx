import { Recursive } from "next/font/google";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const recursive = Recursive({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={recursive.className}>
      <Navbar />
      <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
        <div className="flex-1 flex flex-col h-full">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
