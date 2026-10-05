import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { BookOpen, Menu, RotateCcw, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useCourseProgress } from "@/hooks/use-course-progress";
import { courseUnits, searchCourse } from "@/lib/course-data";
import { cn } from "@/lib/utils";

const accentClasses = { volt: "bg-primary", cyan: "bg-info", mag: "bg-highlight" } as const;

export function CourseShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();
  const { percent, resetProgress } = useCourseProgress();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchCourse(query), [query]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const goToResult = (slug: string, sectionId?: string) => {
    setOpen(false);
    setQuery("");
    navigate({ to: "/unit/$slug", params: { slug }, hash: sectionId });
  };

  return (
    <div className="min-h-screen bg-background font-mono text-[13px] leading-relaxed text-foreground">
      <div className="tech-grid pointer-events-none fixed inset-0" aria-hidden="true" />
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-4 py-3 sm:px-5">
          <Button variant="ghost" className="size-9 px-0 lg:hidden" aria-label="Open units" onClick={() => setMobileNav(true)}><Menu className="size-4" /></Button>
          <Link to="/" className="flex shrink-0 items-center gap-2 font-display text-sm font-semibold">
            <span className="grid size-7 place-items-center rounded-md bg-primary font-bold text-primary-foreground">C</span>
            <span className="hidden sm:inline">CIRCUIT<span className="text-muted-foreground">/101</span></span>
          </Link>
          <div className="relative ml-auto w-full max-w-[420px]">
            <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <input ref={searchRef} value={query} onFocus={() => setOpen(true)} onChange={(event) => { setQuery(event.target.value); setOpen(true); }} className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-14 text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary" placeholder="Search lessons, terms, quizzes…" aria-label="Search course" />
            <kbd className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded border border-border px-1.5 py-0.5 text-[9px] text-muted-foreground sm:inline">⌘K</kbd>
            {open && query.trim() && (
              <div className="absolute left-0 right-0 top-11 max-h-80 overflow-auto rounded-lg border border-border bg-popover p-2 shadow-2xl">
                {results.length ? results.map((result, index) => (
                  <button key={`${result.unit.slug}-${result.section?.id ?? "unit"}-${index}`} onClick={() => goToResult(result.unit.slug, result.section?.id)} className="block w-full rounded-md px-3 py-2 text-left hover:bg-secondary focus:bg-secondary focus:outline-none">
                    <span className="block font-display text-xs font-semibold text-foreground">{result.section?.title ?? result.unit.title}</span>
                    <span className="mt-0.5 block truncate text-[10px] text-muted-foreground">{result.unit.number} · {result.unit.shortTitle} — {result.excerpt}</span>
                  </button>
                )) : <p className="px-3 py-4 text-center text-xs text-muted-foreground">No matching course content.</p>}
              </div>
            )}
          </div>
          <div className="hidden items-center gap-2 sm:flex"><span className="text-[10px] text-muted-foreground">{percent}%</span><div className="h-1.5 w-20 overflow-hidden rounded-full bg-border"><div className="h-full rounded-full bg-info" style={{ width: `${percent}%` }} /></div></div>
          <div className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-[10px] text-info">TCA</div>
        </div>
      </header>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-4 py-6 sm:px-5 lg:grid-cols-[240px_1fr]">
        <aside className="sticky top-[73px] hidden self-start rounded-lg border border-border bg-card p-3 lg:block">
          <SideNavigation pathname={pathname} resetProgress={resetProgress} />
        </aside>
        <main className="min-w-0">{children}</main>
      </div>

      {mobileNav && <div className="fixed inset-0 z-50 bg-background/85 backdrop-blur-sm lg:hidden" onClick={() => setMobileNav(false)}><aside className="h-full w-[min(88vw,320px)] border-r border-border bg-card p-4" onClick={(event) => event.stopPropagation()}><div className="mb-4 flex items-center justify-between"><span className="font-display font-semibold">Course units</span><Button variant="ghost" className="size-9 px-0" aria-label="Close units" onClick={() => setMobileNav(false)}><X className="size-4" /></Button></div><SideNavigation pathname={pathname} resetProgress={resetProgress} onNavigate={() => setMobileNav(false)} /></aside></div>}
    </div>
  );
}

function SideNavigation({ pathname, resetProgress, onNavigate }: { pathname: string; resetProgress: () => void; onNavigate?: () => void }) {
  return <>
    <p className="mb-2 px-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Units · 9</p>
    <nav className="space-y-1" aria-label="Course units">
      {courseUnits.map((unit) => {
        const active = pathname === `/unit/${unit.slug}`;
        return <Link key={unit.slug} to="/unit/$slug" params={{ slug: unit.slug }} onClick={onNavigate} className={cn("flex min-h-9 items-center gap-2 rounded-md px-2 py-2 text-xs transition-colors hover:bg-secondary hover:text-foreground", active ? "bg-secondary text-foreground" : "text-muted-foreground")}>
          <span className={cn("h-3 w-1 shrink-0 rounded", accentClasses[unit.accent])} />
          <span className="truncate">{unit.number} {unit.shortTitle}</span>
        </Link>;
      })}
    </nav>
    <div className="mt-3 border-t border-border pt-3">
      <Link to="/" onClick={onNavigate} className="flex min-h-9 items-center gap-2 rounded-md px-2 py-2 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"><BookOpen className="size-3.5" />Dashboard</Link>
      <Button variant="ghost" className="w-full justify-start gap-2 px-2" onClick={resetProgress}><RotateCcw className="size-3.5" />Reset progress</Button>
    </div>
  </>;
}