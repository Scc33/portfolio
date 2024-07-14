export type PageMetadata = {
    endpoint: string;
    date: string;
    name: string;
};

export const PAGE_METADATA: PageMetadata[] = [
    {
        endpoint: "/snippets/testimonialCard",
        date: "7/1/2024",
        name: "Testimonial Card"
    },
    { endpoint: "/snippets/blogCard", date: "7/2/2024", name: "Blog Card" },
    { endpoint: "/snippets/portfolioCard", date: "7/3/2024", name: "Portfolio Card" },
    { endpoint: "/snippets/button", date: "7/4/2024", name: "Button" },
    { endpoint: "/snippets/textInput", date: "7/5/2024", name: "Text Input" },
    { endpoint: "/snippets/fetch", date: "7/6/2024", name: "Fetch" },
    { endpoint: "/snippets/collections", date: "7/7/2024", name: "Collections" },
    { endpoint: "/snippets/badge", date: "7/8/2024", name: "Badge" },
    { endpoint: "/snippets/featuresGrid", date: "7/9/2024", name: "Features Grid" },
    {
        endpoint: "/snippets/heroSection/bullets",
        date: "7/10/2024",
        name: "Hero Section with Bullets"
    },
    {
        endpoint: "/snippets/heroSection/noBullets",
        date: "7/10/2024",
        name: "Hero Section without Bullets"
    },
    {
        endpoint: "/snippets/notificationSettings",
        date: "7/10/2024",
        name: "Notification Settings"
    },
    { endpoint: "/calculators/mortgageCalc", date: "7/10/2024", name: "Mortgage Calculator" },
    { endpoint: "/snippets/statisticsSection", date: "7/11/2024", name: "Statistics Section" },
    { endpoint: "/snippets/notFound", date: "7/12/2024", name: "Not Found" },
];
