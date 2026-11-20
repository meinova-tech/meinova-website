
"use client";

import { motion, useReducedMotion, useMotionValue, useSpring } from "motion/react";
import {
  BrainCircuit,
  Code2,
  Smartphone,
  Sparkles,
} from "lucide-react";

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth movement
  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  // 3D tilt
  const rotateX = useSpring(0, {
    stiffness: 80,
    damping: 20,
  });

  const rotateY = useSpring(0, {
    stiffness: 80,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;

    mouseX.set(normalizedX * 25);
    mouseY.set(normalizedY * 25);

    rotateX.set(normalizedY * -5);
    rotateY.set(normalizedX * 5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  const float = (distance: number, duration: number, delay = 0) => ({
    y: reduceMotion ? 0 : [0, -distance, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  });

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[540px] perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Interactive 3D layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Mouse-following glow */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] rounded-full bg-violet-500/20 blur-[100px]"
          style={{
            x: smoothX,
            y: smoothY,
          }}
        />

        {/* Ambient glow */}
        <div className="absolute inset-[12%] rounded-full bg-violet-600/15 blur-[90px]" />
        <div className="absolute inset-[25%] rounded-full bg-cyan-500/15 blur-[70px]" />

        {/* Orbital rings */}
        <motion.div
          className="absolute inset-[10%] rounded-full border border-violet-400/20"
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute inset-[19%] rounded-full border border-dashed border-cyan-300/20"
          animate={reduceMotion ? {} : { rotate: -360 }}
          transition={{
            duration: 75,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Central digital orb */}
        <div className="absolute left-1/2 top-1/2 flex h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-violet-500/30 via-indigo-950/80 to-cyan-500/20 shadow-[0_0_80px_rgba(139,92,246,0.25)] backdrop-blur-xl">
          <div className="absolute inset-[10%] rounded-full border border-white/10" />

          <motion.div
            className="absolute inset-[18%] rounded-full bg-gradient-to-br from-violet-400/50 via-purple-600/30 to-cyan-400/40 blur-xl"
            animate={
              reduceMotion
                ? {}
                : {
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 1, 0.6],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <Sparkles
            size={54}
            strokeWidth={1.2}
            className="relative z-10 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          />
        </div>

        {/* Floating website card */}
        <motion.div
          className="absolute left-0 top-[19%] w-[43%] rounded-2xl border border-white/15 bg-[#11101e]/80 p-4 shadow-2xl shadow-violet-950/40 backdrop-blur-xl"
          animate={float(12, 5)}
        >
          <div className="mb-4 flex items-center gap-2">
            <Code2 size={17} className="text-violet-300" />
            <span className="text-xs font-semibold text-white">
              Web experiences
            </span>
          </div>

          <div className="space-y-2">
            <div className="h-2 w-4/5 rounded-full bg-violet-300/50" />
            <div className="h-2 w-3/5 rounded-full bg-white/15" />

            <div className="mt-3 flex gap-2">
              <div className="h-10 flex-1 rounded-lg bg-gradient-to-br from-violet-500/40 to-indigo-500/20" />
              <div className="h-10 flex-1 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/20" />
            </div>
          </div>
        </motion.div>

        {/* Floating AI card */}
        <motion.div
          className="absolute right-0 top-[27%] w-[40%] rounded-2xl border border-white/15 bg-[#11101e]/85 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl"
          animate={float(15, 6, 0.5)}
        >
          <div className="mb-3 flex items-center gap-2">
            <BrainCircuit size={18} className="text-cyan-300" />
            <span className="text-xs font-semibold text-white">
              AI solutions
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            <div className="h-2 flex-1 rounded-full bg-white/15" />
          </div>

          <div className="mt-3 h-2 w-2/3 rounded-full bg-cyan-300/30" />
        </motion.div>

        {/* Floating mobile card */}
        <motion.div
          className="absolute bottom-[15%] left-[12%] w-[42%] rounded-2xl border border-white/15 bg-[#11101e]/85 p-4 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl"
          animate={float(10, 5.5, 1)}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/40 to-cyan-500/30">
              <Smartphone size={19} className="text-white" />
            </div>

            <div>
              <div className="text-xs font-semibold text-white">
                Mobile apps
              </div>
              <div className="mt-1 text-[10px] text-white/45">
                Designed for people
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative orbit points */}
        <motion.span
          className="absolute left-[49%] top-[7%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_5px_rgba(34,211,238,0.4)]"
          animate={reduceMotion ? {} : { y: [0, 12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="absolute bottom-[13%] right-[18%] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_18px_4px_rgba(167,139,250,0.5)]"
          animate={reduceMotion ? {} : { scale: [1, 1.7, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
}
