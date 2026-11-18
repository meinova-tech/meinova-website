"use client";

import { motion } from "motion/react";

export default function MotionTest() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
      className="container-main my-10 rounded-2xl border border-cyan-400 bg-cyan-400/10 p-10 text-center"
    >
      <h2 className="text-3xl font-bold text-cyan-400">
        MOTION IS WORKING!
      </h2>

      <p className="mt-3 text-[var(--muted)]">
        This box should fade in and slide upward.
      </p>
    </motion.div>
  );
}