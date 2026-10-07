import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CourseShell } from "@/components/course-shell";
import { useCourseProgress } from "@/hooks/use-course-progress";
import { courseUnits } from "@/lib/course-data";
import { getUnitPriority } from "@/lib/exam-priorities";
import { PriorityMarker } from "@/components/priority-marker";

const title = "Circuit/101 — Computer Applications Study Hub";
const description = "All nine Computer Applications units in one place: lessons, key terms, quizzes and progress tracking.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { progress, percent, averageScore } = useCourseProgress();
  return (
    <CourseShell>
      <div className="space-y-6">
        <section className="rounded-lg border border-border bg-card p-5 sm:p-6">
          <p className="eyebrow">Computer Applications · 9 units</p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">Your course, in one place.</h1>
          <p className="mt-3 max-w-[68ch] text-sm leading-6 text-muted-foreground">{description}</p>
          <p className="mt-3 text-xs leading-5 text-muted-foreground"><PriorityMarker /> · Based on your Gemini analysis of 3 past-year papers. All nine units contain priority topics; stars within lessons identify the relevant subtopics. Not a guarantee of future exam questions.</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            <Stat label="Course progress" value={`${percent}%`} />
            <Stat label="Sections done" value={String(progress.completedSections.length)} />
            <Stat label="Avg quiz score" value={`${averageScore}%`} />
          </div>
        </section>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {courseUnits.map((unit) => {
            const done = unit.sections.filter((s) => progress.completedSections.includes(`${unit.slug}:${s.id}`)).length;
            const score = progress.quizScores[unit.slug];
            const priority = getUnitPriority(unit.slug);
            return (
              <Link key={unit.slug} to="/unit/$slug" params={{ slug: unit.slug }} className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary">
                <div className="flex flex-wrap items-center justify-between gap-2"><p className="eyebrow">Unit {unit.number}</p>{priority && <PriorityMarker />}</div>
                <h2 className="mt-2 font-display text-lg font-semibold">{unit.title}</h2>
                {priority && <p className="mt-2 text-[10px] text-primary">{priority.papers} · {priority.count} priority sections</p>}
                <p className="mt-2 line-clamp-3 flex-1 text-xs leading-5 text-muted-foreground">{unit.description}</p>
                <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>{done}/{unit.sections.length} sections{score !== undefined ? ` · quiz ${score}%` : ""}</span>
                  <ArrowRight className="size-3.5 text-info transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </CourseShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md bg-secondary p-3"><p className="text-[10px] text-muted-foreground">{label}</p><p className="mt-1 font-display text-2xl font-bold text-info">{value}</p></div>;
}
