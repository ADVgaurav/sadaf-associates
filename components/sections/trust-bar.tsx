import { FileText, LockKeyhole, MessageSquareMore, Scale } from "lucide-react";
import { Container } from "@/components/layout";
import { GlassCard } from "@/components/ui";

const trustItems = [
  { title: "Online Consultations", icon: MessageSquareMore },
  { title: "Business Documentation", icon: FileText },
  { title: "Legal Advisory", icon: Scale },
  { title: "Confidential Support", icon: LockKeyhole },
] as const;

export function TrustBar() {
  return <section aria-label="Consultancy support" className="relative border-y border-border bg-[hsl(var(--canvas-subtle))] py-7 sm:py-10"><Container size="wide"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{trustItems.map(({ title, icon: Icon }) => <GlassCard key={title} className="flex items-center gap-4 p-5 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-[hsl(var(--border-strong))] hover:shadow-raised"><span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--accent-subtle))] text-accent"><Icon className="size-5" strokeWidth={1.6} aria-hidden="true" /></span><span className="text-sm font-medium text-foreground">{title}</span></GlassCard>)}</div></Container></section>;
}
