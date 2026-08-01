import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
export function Card({ className, ...props }: ComponentPropsWithoutRef<"article">) { return <article className={cn("rounded-2xl border border-border bg-surface p-6 transition-[border-color,transform,box-shadow] duration-200 hover:border-[hsl(var(--border-strong))] hover:shadow-raised", className)} {...props} />; }
export function GlassCard({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("rounded-2xl border border-border bg-surface-glass p-6 shadow-ambient backdrop-blur-xl", className)} {...props} />; }
