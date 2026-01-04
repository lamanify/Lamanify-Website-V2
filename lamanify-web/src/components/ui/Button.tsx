import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', href, ...props }, ref) => {
        const variants = {
            primary: "bg-gradient-to-br from-[#e9204f] to-[#8a0f2b] text-white shadow-brand-glow hover:shadow-brand-glow-hover hover:-translate-y-0.5",
            outline: "border border-[#E5E7EB] hover:border-[#e9204f] bg-white text-[#0a0a0a]",
            ghost: "hover:bg-slate-100 text-slate-600",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-xs",
            md: "px-6 py-3 text-sm",
            lg: "px-8 py-4 text-base",
            xl: "px-10 py-5 text-lg",
        };

        const classes = cn(
            "inline-flex items-center justify-center rounded-btn font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50",
            variants[variant],
            sizes[size],
            className
        );

        if (href) {
            return (
                <a href={href} className={classes} {...props as any}>
                    {props.children}
                </a>
            );
        }

        return (
            <button
                ref={ref}
                className={classes}
                {...props}
            />
        );
    }
);
