import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  size?: "narrow" | "content" | "wide" | "fluid";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function Container<T extends ElementType = "div">({ as, size = "content", className, ...props }: ContainerProps<T>) {
  const Component = as ?? "div";
  const sizes = { narrow: "max-w-[var(--container-narrow)]", content: "max-w-[var(--container-content)]", wide: "max-w-[var(--container-wide)]", fluid: "max-w-none" };
  return <Component className={cn("mx-auto w-full px-5 sm:px-8 lg:px-10", sizes[size], className)} {...props} />;
}
