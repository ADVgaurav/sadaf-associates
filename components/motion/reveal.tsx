"use client";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "./presets";
export function Reveal({ children }: { children: ReactNode }) { const reducedMotion = useReducedMotion(); return <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reducedMotion ? undefined : fadeUp}>{children}</motion.div>; }
