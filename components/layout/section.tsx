import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = ComponentPropsWithoutRef<"section"> & { container?: "narrow" | "content" | "wide" | "fluid"; bleed?: boolean };

export function Section({ container = "content", bleed = false, className, children, ...props }: SectionProps) {
  return <section className={cn("py-16 sm:py-20 lg:py-28", className)} {...props}>{bleed ? children : <Container size={container}>{children}</Container>}</section>;
}
