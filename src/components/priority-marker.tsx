import { Star } from "lucide-react";

export function PriorityMarker({ compact = false }: { compact?: boolean }) {
  return <span className="inline-flex shrink-0 items-center gap-1.5 text-primary" title="High importance — user-provided Gemini analysis of three past-year papers">
    <Star className="size-3.5 fill-current" aria-hidden="true" />
    <span className={compact ? "sr-only" : "text-[10px] font-semibold"}>High importance</span>
  </span>;
}