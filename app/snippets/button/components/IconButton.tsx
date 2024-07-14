import React from "react";
import { Button, ButtonProps } from "./Button";

interface IconButtonProps extends Omit<ButtonProps, "leftIcon" | "rightIcon"> {
    icon: React.ReactNode;
    "aria-label": string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ className = "", icon, size = "md", ...props }, ref) => {
        const sizeClasses = {
            md: "w-10 h-10",
            lg: "w-11 h-11",
            xl: "w-12 h-12",
            "2xl": "w-14 h-14"
        };

        const classes = `p-0 ${sizeClasses[size]} ${className}`;

        return (
            <Button className={classes} ref={ref} {...props}>
                {icon}
            </Button>
        );
    }
);
IconButton.displayName = "IconButton";

export { Button, IconButton };
