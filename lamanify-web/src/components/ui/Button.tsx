import * as React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', ...props }, ref) => {
        const variants = {
            primary: "bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/20",
            outline: "border-2 border-slate-200 hover:bg-slate-50 text-slate-900",
            ghost: "hover:bg-slate-100 text-slate-600",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50",
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);
