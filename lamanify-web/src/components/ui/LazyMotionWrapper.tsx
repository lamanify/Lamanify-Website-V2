import { LazyMotion, domAnimation, m } from "framer-motion";
import type { ReactNode } from "react";

// Use 'm' instead of 'motion' to strip unused code
interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                viewport={{ once: true }}
                className={className}
            >
                {children}
            </m.div>
        </LazyMotion>
    );
};
