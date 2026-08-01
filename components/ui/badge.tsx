import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
export function Badge({ className, ...props }: ComponentPropsWithoutRef<"span">) { return <span className={cn("inline-flex w-fit items-center rounded-full bg-[hsl(var(--accent-subtle))] px-3 py-1 text-xs font-medium tracking-wide text-accent", className)} {...props} />; }
