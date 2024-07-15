import React, { HTMLAttributes } from "react";
import { cn } from "../lib/utils";
import Image from "next/image";

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
            <Image
                className="pointer-events-none z-50 select-none"
                src={
                    dark
                        ? "/ecommerce/phone-template-dark-edges.png"
                        : "/ecommerce/phone-template-white-edges.png"
                }
                width={375}
                height={812}
                alt="Phone template"
            />
            <div className="absolute -z-10 inset-0">
                <Image
                    className="object-cover"
                    src={imgSrc}
                    width={375}
                    height={812}
                    alt="overlaying phone image"
                />
            </div>
        </div>
    );
};

export default Phone;
