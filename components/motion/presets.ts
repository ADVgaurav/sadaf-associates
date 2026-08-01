import type { Transition, Variants } from "framer-motion";
export const transitions = { fast: { duration: 0.16, ease: [0.2, 0, 0, 1] }, standard: { duration: 0.24, ease: [0.2, 0, 0, 1] }, slow: { duration: 0.42, ease: [0.2, 0, 0, 1] } satisfies Transition } as const;
export const fadeUp: Variants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: transitions.standard } };
export const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: transitions.standard } };
export const scaleIn: Variants = { hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1, transition: transitions.standard } };
