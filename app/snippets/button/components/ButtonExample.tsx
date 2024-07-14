import { Button, IconButton } from "./IconButton";

const StarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

export default function ButtonsExamplePage() {
    return (
        <div className="p-4 space-y-4">
            <div className="space-y-2">
                <div className="flex items-center flex-wrap gap-3">
                    <Button size="md">Button CTA</Button>
                    <Button leftIcon={<StarIcon />}>Left Icon</Button>
                    <Button rightIcon={<StarIcon />} size="xl">
                        Right Icons
                    </Button>
                    <Button size="2xl" aria-label="Favorite">
                        Button CTA
                    </Button>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center flex-wrap gap-3">
                    <Button variant="secondary" size="md">
                        Button CTA
                    </Button>
                    <Button variant="secondary" leftIcon={<StarIcon />}>
                        Left Icon
                    </Button>
                    <Button
                        variant="secondary"
                        size="xl"
                        rightIcon={<StarIcon />}
                    >
                        Right Icons
                    </Button>
                    <Button
                        variant="secondary"
                        size="2xl"
                        aria-label="Favorite"
                    >
                        Button CTA
                    </Button>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center flex-wrap gap-3">
                    <Button variant="tertiary" size="md">
                        Button CTA
                    </Button>
                    <Button variant="tertiary" leftIcon={<StarIcon />}>
                        Left Icon
                    </Button>
                    <Button
                        variant="tertiary"
                        size="xl"
                        rightIcon={<StarIcon />}
                    >
                        Right Icons
                    </Button>
                    <Button variant="tertiary" size="2xl" aria-label="Favorite">
                        Button CTA
                    </Button>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center flex-wrap gap-3">
                    <Button variant="link" size="md">
                        Button CTA
                    </Button>
                    <Button variant="link" leftIcon={<StarIcon />}>
                        Left Icon
                    </Button>
                    <Button variant="link" size="xl" rightIcon={<StarIcon />}>
                        Right Icons
                    </Button>
                    <Button variant="link" size="2xl" aria-label="Favorite">
                        Button CTA
                    </Button>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center flex-wrap gap-3">
                    <Button variant="destructive" size="md">
                        Button CTA
                    </Button>
                    <Button variant="destructive" leftIcon={<StarIcon />}>
                        Left Icon
                    </Button>
                    <Button
                        variant="destructive"
                        size="xl"
                        rightIcon={<StarIcon />}
                    >
                        Right Icons
                    </Button>
                    <Button
                        variant="destructive"
                        size="2xl"
                        aria-label="Favorite"
                    >
                        Button CTA
                    </Button>
                </div>
            </div>
        </div>
    );
}
