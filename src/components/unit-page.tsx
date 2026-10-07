import { Link } from "@tanstack/react-router";
import { Check, ChevronRight, Circle, FileText, Star, ImageIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuizPanel } from "@/components/quiz-panel";
import { useCourseProgress } from "@/hooks/use-course-progress";
import type { CourseUnit } from "@/lib/course-data";
import { cn } from "@/lib/utils";
import { examPriorities, getUnitPriority } from "@/lib/exam-priorities";
import { getImportantNotes, type NoteBlock } from "@/lib/important-notes";
import { PriorityMarker } from "@/components/priority-marker";

export function UnitPage({ unit }: { unit: CourseUnit }) {
  const { progress, toggleSection, saveQuizScore } = useCourseProgress();
  const completed = unit.sections.filter((section) => progress.completedSections.includes(`${unit.slug}:${section.id}`)).length;
  const percent = Math.round((completed / unit.sections.length) * 100);
  const unitPriority = getUnitPriority(unit.slug);
  const notes = getImportantNotes(unit.slug);
  const [activeTab, setActiveTab] = useState("lesson");

  return <div className="space-y-6">
    <section className="rounded-lg border border-border bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl"><p className="eyebrow">Unit {unit.number} · {unit.source}</p><h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">{unit.title}</h1><p className="mt-3 max-w-[68ch] text-sm leading-6 text-muted-foreground">{unit.description}</p></div>
        <div className="min-w-32 rounded-md bg-secondary p-3"><p className="text-[10px] text-muted-foreground">Lesson progress</p><p className="mt-1 font-display text-2xl font-bold text-info">{percent}%</p><div className="mt-2 h-1 overflow-hidden rounded bg-border"><div className="h-full bg-info" style={{ width: `${percent}%` }} /></div></div>
      </div>
      {unitPriority && <div className="mt-4 border-l-2 border-primary pl-3"><PriorityMarker /><p className="mt-1 text-xs leading-5 text-muted-foreground">{unitPriority.papers} · Priority topics from your Gemini analysis of 3 past-year papers. Not a guarantee of future exam questions.</p></div>}
      <div className="mt-5 grid gap-2 sm:grid-cols-3">{unit.objectives.map((objective, index) => <div key={objective} className="flex items-center gap-2 rounded-md bg-secondary p-3 text-xs"><span className="text-primary">0{index + 1}</span>{objective}</div>)}</div>
    </section>

    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="w-full justify-start">
        <TabsTrigger value="lesson">Lesson</TabsTrigger>
        <TabsTrigger value="exam-topics" className="gap-1.5">
          <Star className="size-3.5 text-primary" />
          Exam Topics
          {notes && <span className="ml-1 rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary">{notes.blocks.length}</span>}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="lesson">
        <LessonTab unit={unit} progress={progress} toggleSection={toggleSection} saveQuizScore={saveQuizScore} unitPriority={unitPriority} />
      </TabsContent>

      <TabsContent value="exam-topics">
        {notes ? <ExamTopicsTab notes={notes} unit={unit} /> : <NoPriorityContent unit={unit} />}
      </TabsContent>
    </Tabs>

    <Link to="/" className="inline-flex items-center gap-2 text-xs text-info hover:text-primary">← Return to course dashboard</Link>
  </div>;
}

function LessonTab({ unit, progress, toggleSection, saveQuizScore, unitPriority }: {
  unit: CourseUnit;
  progress: ReturnType<typeof useCourseProgress>["progress"];
  toggleSection: (slug: string, sectionId: string) => void;
  saveQuizScore: (slug: string, score: number) => void;
  unitPriority: ReturnType<typeof getUnitPriority>;
}) {
  return <div className="grid gap-6 xl:grid-cols-[1fr_290px]">
    <div className="space-y-4">
      {unit.sections.map((section, index) => {
        const done = progress.completedSections.includes(`${unit.slug}:${section.id}`);
        const priority = examPriorities[unit.slug]?.[section.id];
        return <article id={section.id} key={section.id} className={cn("scroll-mt-24 overflow-hidden rounded-lg border bg-card", priority ? "border-primary/40" : "border-border")}>
          <div className="border-b border-border p-5"><div className="flex items-start gap-3"><span className="grid size-7 shrink-0 place-items-center rounded bg-secondary font-display text-xs text-primary">{index + 1}</span><div><h2 className="font-display text-xl font-semibold">{section.title}</h2><p className="mt-1 text-sm text-muted-foreground">{section.summary}</p></div></div></div>
          <div className="p-5">
            {priority && <div className="mb-5 border-l-2 border-primary bg-primary/5 p-3"><div className="flex flex-wrap items-center justify-between gap-2"><PriorityMarker /><span className="text-[10px] text-muted-foreground">{priority.papers} · 3-paper analysis</span></div><ul className="mt-2 space-y-2">{priority.topics.map((topic) => <li key={topic} className="flex items-start gap-2 text-xs leading-5 text-primary"><span aria-hidden="true">★</span><span>{topic}</span></li>)}</ul></div>}
            <div className="space-y-2">{section.details.map((detail) => <p key={detail} className="flex gap-3 text-sm leading-6 text-muted-foreground"><ChevronRight className="mt-1.5 size-3 shrink-0 text-info" />{detail}</p>)}</div>
            {section.keyTerms && <div className="mt-4 grid gap-2 sm:grid-cols-2">{section.keyTerms.map((item) => <div key={item.term} className="rounded-md border border-dashed border-border p-3"><p className="font-display text-xs font-semibold text-primary">{item.term}</p><p className="mt-1 text-[11px] text-muted-foreground">{item.definition}</p></div>)}</div>}
            <div className="mt-4 flex justify-end"><Button variant={done ? "outline" : "primary"} className="gap-2" onClick={() => toggleSection(unit.slug, section.id)}>{done ? <Check className="size-3.5" /> : <Circle className="size-3.5" />}{done ? "Completed" : "Mark complete"}</Button></div>
          </div>
        </article>;
      })}
    </div>
    <aside className="space-y-4 xl:sticky xl:top-20 xl:self-start">
      <div className="rounded-lg border border-border bg-card p-4"><p className="eyebrow">In this unit</p><nav className="mt-3 space-y-1">{unit.sections.map((section, index) => <a key={section.id} href={`#${section.id}`} className="flex items-center gap-2 rounded-md px-2 py-2 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"><span className="text-info">0{index + 1}</span><span className="min-w-0 flex-1 truncate">{section.title}</span>{examPriorities[unit.slug]?.[section.id] && <PriorityMarker compact />}</a>)}</nav></div>
      <QuizPanel questions={unit.quiz} onComplete={(score) => saveQuizScore(unit.slug, score)} />
      <div className="rounded-lg border border-border bg-card p-4"><div className="flex items-center gap-2 text-muted-foreground"><FileText className="size-4" /><span className="text-[10px] uppercase tracking-[0.18em]">Source material</span></div><p className="mt-2 font-display text-xs font-semibold">{unit.source}</p><p className="mt-1 text-[10px] text-muted-foreground">Content reorganized for study and review.</p></div>
    </aside>
  </div>;
}

function ExamTopicsTab({ notes, unit }: { notes: NonNullable<ReturnType<typeof getImportantNotes>>; unit: CourseUnit }) {
  const [activeBlock, setActiveBlock] = useState(0);
  const block = notes.blocks[activeBlock];

  return <div className="grid gap-6 xl:grid-cols-[220px_1fr]">
    {/* Navigation sidebar */}
    <aside className="xl:sticky xl:top-20 xl:self-start">
      <div className="rounded-lg border border-border bg-card p-3">
        <div className="mb-3 flex items-center gap-2"><Star className="size-3.5 text-primary" /><p className="eyebrow">Priority topics</p></div>
        <p className="mb-3 px-1 text-[10px] text-muted-foreground">Paper {notes.papers} · {notes.blocks.length} topics</p>
        <nav className="space-y-1" aria-label="Exam topics in this unit">
          {notes.blocks.map((b, i) => (
            <button key={b.heading} onClick={() => setActiveBlock(i)} className={cn("flex w-full items-start gap-2 rounded-md px-2 py-2 text-left text-xs transition-colors", activeBlock === i ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground")}>
              <span className={cn("mt-0.5 grid size-5 shrink-0 place-items-center rounded text-[10px] font-semibold", activeBlock === i ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground")}>{i + 1}</span>
              <span className="min-w-0 flex-1 leading-5">{b.heading}</span>
            </button>
          ))}
        </nav>
        <div className="mt-3 border-t border-border pt-3">
          <Link to="/important" className="flex items-center gap-2 rounded-md px-2 py-2 text-xs text-primary hover:bg-secondary"><PriorityMarker compact />All-unit topic list</Link>
        </div>
      </div>
    </aside>

    {/* Content area */}
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <p className="eyebrow">Unit {unit.number} · Paper {notes.papers}</p>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" disabled={activeBlock === 0} onClick={() => setActiveBlock((v) => Math.max(0, v - 1))} className="h-7 px-2 text-[11px]">Prev</Button>
          <Button variant="outline" size="sm" disabled={activeBlock === notes.blocks.length - 1} onClick={() => setActiveBlock((v) => Math.min(notes.blocks.length - 1, v + 1))} className="h-7 px-2 text-[11px]">Next</Button>
        </div>
      </div>

      <NoteBlockCard block={block} index={activeBlock} total={notes.blocks.length} />

      {/* Dot indicators */}
      <div className="flex flex-wrap items-center gap-1.5">
        {notes.blocks.map((_, i) => (
          <button key={i} onClick={() => setActiveBlock(i)} aria-label={`Go to topic ${i + 1}`} className={cn("h-2 rounded-full transition-all", activeBlock === i ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground")} />
        ))}
      </div>
    </div>
  </div>;
}

function NoteBlockCard({ block, index, total }: { block: NoteBlock; index: number; total: number }) {
  return <article className="overflow-hidden rounded-lg border border-primary/40 bg-card">
    <div className="border-b border-border bg-primary/5 p-5">
      <div className="flex items-center gap-3">
        <span className="grid size-8 shrink-0 place-items-center rounded bg-primary font-display text-sm font-bold text-primary-foreground">{index + 1}</span>
        <h2 className="font-display text-xl font-semibold">{block.heading}</h2>
      </div>
      <p className="mt-2 text-[10px] text-muted-foreground">Topic {index + 1} of {total} · Exam priority</p>
    </div>
    <div className="p-5">
      {block.points.length > 0 && <ul className="space-y-2.5">{block.points.map((point, i) => (
        <li key={i} className="flex gap-3 text-sm leading-6 text-foreground/90">
          <ChevronRight className="mt-1.5 size-3.5 shrink-0 text-primary" />
          <span>{point}</span>
        </li>
      ))}</ul>}

      {block.table && (
        <div className="mt-5 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[420px] border-collapse text-left text-xs">
            <thead><tr>{block.table.head.map((h) => <th key={h} className="border-b border-border bg-secondary px-3 py-2 font-display font-semibold text-foreground">{h}</th>)}</tr></thead>
            <tbody>{block.table.rows.map((row, i) => (
              <tr key={i} className={cn(i % 2 === 1 && "bg-secondary/30")}>
                {row.map((cell, j) => <td key={j} className={cn("border-b border-border px-3 py-2", j === 0 ? "font-medium text-foreground" : "text-muted-foreground")}>{cell}</td>)}
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}

      {block.images && block.images.length > 0 && (
        <div className="mt-5 space-y-4">
          {block.images.map((img, i) => (
            <figure key={i} className="overflow-hidden rounded-lg border border-border">
              <img src={img.src} alt={img.alt} className="w-full" />
              {img.caption && <figcaption className="border-t border-border bg-secondary px-3 py-2 text-[11px] text-muted-foreground">{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}

      {!block.images && (
        <div className="mt-5 flex items-center gap-2 rounded-md border border-dashed border-border px-3 py-2.5 text-[11px] text-muted-foreground">
          <ImageIcon className="size-3.5 shrink-0" />
          <span>Slide images will be added here once the original slides are provided.</span>
        </div>
      )}
    </div>
  </article>;
}

function NoPriorityContent({ unit }: { unit: CourseUnit }) {
  return <div className="rounded-lg border border-border bg-card p-8 text-center">
    <Star className="mx-auto size-8 text-muted-foreground/40" />
    <p className="mt-3 font-display text-lg font-semibold">No exam-priority topics for this unit</p>
    <p className="mt-2 max-w-md mx-auto text-xs text-muted-foreground">This unit was not flagged in the past-paper analysis. Study the full lesson using the Lesson tab.</p>
    <Link to="/important" className="mt-4 inline-flex items-center gap-2 text-xs text-info hover:text-primary">View all-unit priority topics →</Link>
  </div>;
}
