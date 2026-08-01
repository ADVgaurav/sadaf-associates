import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva("inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-45", {
  variants: { variant: { primary: "bg-accent text-[hsl(var(--text-on-accent))] hover:bg-[hsl(var(--accent-hover))]", secondary: "border border-border bg-surface-raised text-foreground hover:border-[hsl(var(--border-strong))]", ghost: "text-foreground hover:bg-[hsl(var(--interactive-ghost-hover))]", text: "h-auto min-h-0 px-0 text-accent hover:text-[hsl(var(--accent-hover))]", icon: "w-11 px-0 text-foreground hover:bg-[hsl(var(--interactive-ghost-hover))]" }, size: { default: "", compact: "min-h-9 px-3 text-xs" } },
  defaultVariants: { variant: "primary", size: "default" },
});
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { loading?: boolean };
export function Button({ className, variant, size, loading = false, disabled, children, ...props }: ButtonProps) { return <button className={cn(buttonVariants({ variant, size }), className)} disabled={disabled || loading} {...props}>{loading && <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />}{children}</button>; }
