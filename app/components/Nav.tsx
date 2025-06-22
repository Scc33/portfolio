import Link from "next/link";

const navItems = {
    "/": {
        name: "Home"
    },
    "/tags": {
        name: "Tags"
    },
    "https://github.com/Scc33": {
        name: "GitHub"
    },
    "https://blog.seancoughlin.me": {
        name: "Blog"
    }
};

export default function Nav() {
    return (
        <nav className="mb-8">
            <ul className="font-sm flex flex-row space-x-4">
                {Object.entries(navItems).map(([path, { name }]) => {
                    return (
                        <li key={path}>
                            <Link
                                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                                rel="noopener noreferrer"
                                target={
                                    path.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                href={path}
                            >
                                {name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
