"use client";
import { useMediaQuery } from "./use-media-query";
export function useReducedMotionPreference() { return useMediaQuery("(prefers-reduced-motion: reduce)"); }
