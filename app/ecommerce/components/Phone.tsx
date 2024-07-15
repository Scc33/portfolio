import React, { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
    dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
    return (
        <div
            className={cn(
                "relative pointer-events-none z-50 overflow-hidden",
                className
            )}
            {...props}
        >
            Phone
        </div>
    );
};

export default Phone;
