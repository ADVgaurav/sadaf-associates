import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function PageWrapper({ className, ...props }: ComponentPropsWithoutRef<"main">) { return <main id="main-content" className={cn("min-h-[calc(100vh-1px)]", className)} {...props} />; }
export function ContentWrapper({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("max-w-[var(--content-readable)]", className)} {...props} />; }
export function Stack({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("flex flex-col gap-6", className)} {...props} />; }
export function Grid({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", className)} {...props} />; }
export function Surface({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("rounded-2xl border border-border bg-surface p-6 shadow-ambient", className)} {...props} />; }
