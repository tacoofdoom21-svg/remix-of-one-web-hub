import { Link } from "@tanstack/react-router";
import { Check, ChevronRight, Circle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuizPanel } from "@/components/quiz-panel";
import { useCourseProgress } from "@/hooks/use-course-progress";
import type { CourseUnit } from "@/lib/course-data";
import { cn } from "@/lib/utils";

export function UnitPage({ unit }: { unit: CourseUnit }) {
  const { progress, toggleSection, saveQuizScore } = useCourseProgress();
  const completed = unit.sections.filter((section) => progress.completedSections.includes(`${unit.slug}:${section.id}`)).length;
  const percent = Math.round((completed / unit.sections.length) * 100);

  return <div className="space-y-6">
    <section className="rounded-lg border border-border bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl"><p className="eyebrow">Unit {unit.number} · {unit.source}</p><h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">{unit.title}</h1><p className="mt-3 max-w-[68ch] text-sm leading-6 text-muted-foreground">{unit.description}</p></div>
        <div className="min-w-32 rounded-md bg-secondary p-3"><p className="text-[10px] text-muted-foreground">Lesson progress</p><p className="mt-1 font-display text-2xl font-bold text-info">{percent}%</p><div className="mt-2 h-1 overflow-hidden rounded bg-border"><div className="h-full bg-info" style={{ width: `${percent}%` }} /></div></div>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-3">{unit.objectives.map((objective, index) => <div key={objective} className="flex items-center gap-2 rounded-md bg-secondary p-3 text-xs"><span className="text-primary">0{index + 1}</span>{objective}</div>)}</div>
    </section>

    <div className="grid gap-6 xl:grid-cols-[1fr_290px]">
      <div className="space-y-4">
        {unit.sections.map((section, index) => {
          const done = progress.completedSections.includes(`${unit.slug}:${section.id}`);
          return <article id={section.id} key={section.id} className="scroll-mt-24 overflow-hidden rounded-lg border border-border bg-card">
            <div className="border-b border-border p-5"><div className="flex items-start gap-3"><span className="grid size-7 shrink-0 place-items-center rounded bg-secondary font-display text-xs text-primary">{index + 1}</span><div><h2 className="font-display text-xl font-semibold">{section.title}</h2><p className="mt-1 text-sm text-muted-foreground">{section.summary}</p></div></div></div>
            <div className="p-5">
              <div className="space-y-2">{section.details.map((detail) => <p key={detail} className="flex gap-3 text-sm leading-6 text-muted-foreground"><ChevronRight className="mt-1.5 size-3 shrink-0 text-info" />{detail}</p>)}</div>
              {section.keyTerms && <div className="mt-4 grid gap-2 sm:grid-cols-2">{section.keyTerms.map((item) => <div key={item.term} className="rounded-md border border-dashed border-border p-3"><p className="font-display text-xs font-semibold text-primary">{item.term}</p><p className="mt-1 text-[11px] text-muted-foreground">{item.definition}</p></div>)}</div>}
              <div className="mt-4 flex justify-end"><Button variant={done ? "outline" : "primary"} className="gap-2" onClick={() => toggleSection(unit.slug, section.id)}>{done ? <Check className="size-3.5" /> : <Circle className="size-3.5" />}{done ? "Completed" : "Mark complete"}</Button></div>
            </div>
          </article>;
        })}
      </div>
      <aside className="space-y-4 xl:sticky xl:top-20 xl:self-start">
        <div className="rounded-lg border border-border bg-card p-4"><p className="eyebrow">In this unit</p><nav className="mt-3 space-y-1">{unit.sections.map((section, index) => <a key={section.id} href={`#${section.id}`} className="flex items-center gap-2 rounded-md px-2 py-2 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"><span className="text-info">0{index + 1}</span><span className="truncate">{section.title}</span></a>)}</nav></div>
        <QuizPanel questions={unit.quiz} onComplete={(score) => saveQuizScore(unit.slug, score)} />
        <div className="rounded-lg border border-border bg-card p-4"><div className="flex items-center gap-2 text-muted-foreground"><FileText className="size-4" /><span className="text-[10px] uppercase tracking-[0.18em]">Source material</span></div><p className="mt-2 font-display text-xs font-semibold">{unit.source}</p><p className="mt-1 text-[10px] text-muted-foreground">Content reorganized for study and review.</p></div>
      </aside>
    </div>
    <Link to="/" className="inline-flex items-center gap-2 text-xs text-info hover:text-primary">← Return to course dashboard</Link>
  </div>;
}