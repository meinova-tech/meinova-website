
"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export function StaggerContainer({
    children,
    className = "",
}: Props) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: false,
                amount: 0.1,
            }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.12,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = "",
}: Props) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: {
                    opacity: 0,
                    y: 30,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
