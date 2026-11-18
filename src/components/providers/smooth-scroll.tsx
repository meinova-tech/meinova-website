
"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

export default function SmoothScroll({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <MotionConfig reducedMotion="user">
            <ReactLenis
                root
                options={{
                    lerp: 0.1,
                    duration: 1.2,
                    smoothWheel: true,
                    anchors: true,
                    autoRaf: true,
                }}
            >
                {children}
            </ReactLenis>
        </MotionConfig>
    );
}
