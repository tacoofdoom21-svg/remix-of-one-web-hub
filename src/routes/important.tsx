import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CourseShell } from "@/components/course-shell";
import { PriorityMarker } from "@/components/priority-marker";
import { courseUnits } from "@/lib/course-data";
import { importantNotes } from "@/lib/important-notes";

export const Route = createFileRoute("/important")({
  head: () => ({
    meta: [
      { title: "Important Topics — Detailed Exam Notes" },
      { name: "description", content: "Every high-priority exam topic from all nine units, compiled with detailed notes and comparison tables." },
      { property: "og:title", content: "Important Topics — Detailed Exam Notes" },
      { property: "og:description", content: "Detailed notes for all high-priority exam topics in one place." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ImportantPage,
});

function ImportantPage() {
  const [q, setQ] = useState("");
  const units = useMemo(() => {
    const s = q.trim().toLowerCase();
    return importantNotes.map((u) => ({ ...u, unit: courseUnits.find((c) => c.slug === u.slug)!, blocks: s ? u.blocks.filter((b) => (b.heading + b.points.join(" ") + JSON.stringify(b.table ?? "")).toLowerCase().includes(s)) : u.blocks })).filter((u) => u.blocks.length);
  }, [q]);

  return (
    <CourseShell>
      <div className="space-y-6">
        <section className="rounded-lg border border-border bg-card p-5 sm:p-6">
          <p className="eyebrow">Revision · All priority topics</p>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Important Topics</h1>
          <p className="mt-3 max-w-[68ch] text-sm leading-6 text-muted-foreground"><PriorityMarker /> · Every frequently tested topic from your past-paper analysis, with fuller notes. Not a guarantee of future questions.</p>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter topics (e.g. RLE, compiler, SSD)…" aria-label="Filter important topics" className="mt-4 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
          <nav className="mt-4 flex flex-wrap gap-2" aria-label="Jump to unit">
            {units.map((u) => <a key={u.slug} href={`#${u.slug}`} className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground hover:border-primary hover:text-foreground">{u.unit.number} {u.unit.shortTitle}</a>)}
          </nav>
        </section>

        {units.length === 0 && <p className="text-sm text-muted-foreground">No topics match “{q}”.</p>}

        {units.map((u) => (
          <section key={u.slug} id={u.slug} className="scroll-mt-24 rounded-lg border border-border bg-card p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="eyebrow">Unit {u.unit.number} · Paper {u.papers}</p>
              <Link to="/unit/$slug" params={{ slug: u.slug }} className="text-[11px] text-info hover:underline">Open full unit →</Link>
            </div>
            <h2 className="mt-1 font-display text-2xl font-semibold">{u.unit.title}</h2>
            <div className="mt-4 space-y-5">
              {u.blocks.map((b) => (
                <article key={b.heading} className="border-l-2 border-primary pl-4">
                  <h3 className="flex items-center gap-2 font-display text-base font-semibold"><PriorityMarker compact />{b.heading}</h3>
                  {b.points.length > 0 && <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground">{b.points.map((p) => <li key={p}>{p}</li>)}</ul>}
                  {b.table && (
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full min-w-[420px] border-collapse text-left text-xs">
                        <thead><tr>{b.table.head.map((h) => <th key={h} className="border border-border bg-secondary px-2 py-1.5 font-semibold">{h}</th>)}</tr></thead>
                        <tbody>{b.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className={j === 0 ? "border border-border px-2 py-1.5 font-medium" : "border border-border px-2 py-1.5 text-muted-foreground"}>{c}</td>)}</tr>)}</tbody>
                      </table>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </CourseShell>
  );
}
