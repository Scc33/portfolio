import "./global.css";
import type { Metadata } from "next";
import { baseUrl } from "./sitemap";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Sean Coughlin Portfolio",
        template: "%s | Sean Coughlin Portfolio"
    },
    description: "This is my portfolio.",
    openGraph: {
        title: "Sean Coughlin Portfolio",
        description: "This is my portfolio.",
        url: baseUrl,
        siteName: "My Portfolio",
        locale: "en_US",
        type: "website"
    },
    icons: [{ url: "/s.webp", sizes: "any" }],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
