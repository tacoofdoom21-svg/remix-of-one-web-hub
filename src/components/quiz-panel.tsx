import { Check, RotateCcw, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { QuizQuestion } from "@/lib/course-data";
import { cn } from "@/lib/utils";

export function QuizPanel({ questions, onComplete }: { questions: QuizQuestion[]; onComplete: (score: number) => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = questions[index];

  const check = () => {
    if (selected === null || !question) return;
    setChecked(true);
    if (selected === question.answer) setCorrect((value) => value + 1);
  };

  const next = () => {
    const finalCorrect = correct;
    if (index === questions.length - 1) {
      const score = Math.round((finalCorrect / questions.length) * 100);
      setFinished(true);
      onComplete(score);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
    setChecked(false);
  };

  const restart = () => { setIndex(0); setSelected(null); setChecked(false); setCorrect(0); setFinished(false); };

  if (finished) return <section className="rounded-lg border border-border bg-card p-5"><p className="eyebrow">Quiz complete</p><h2 className="mt-2 font-display text-2xl font-bold">{correct}/{questions.length} correct</h2><p className="mt-2 text-muted-foreground">Your score has been added to the course dashboard.</p><Button className="mt-4 gap-2" onClick={restart}><RotateCcw className="size-3.5" />Try again</Button></section>;
  if (!question) return null;

  return <section className="rounded-lg border border-border bg-card p-5" aria-labelledby="quiz-heading">
    <div className="flex items-center justify-between gap-3"><p className="eyebrow text-highlight">Knowledge check</p><span className="text-[10px] text-muted-foreground">{index + 1} / {questions.length}</span></div>
    <div className="mt-3 flex gap-1">{questions.map((_, itemIndex) => <span key={itemIndex} className={cn("h-1 flex-1 rounded-full", itemIndex <= index ? "bg-highlight" : "bg-border")} />)}</div>
    <h2 id="quiz-heading" className="mt-5 font-display text-xl font-semibold">{question.question}</h2>
    <div className="mt-4 grid gap-2">
      {question.options.map((option, optionIndex) => {
        const isAnswer = checked && optionIndex === question.answer;
        const isWrong = checked && selected === optionIndex && optionIndex !== question.answer;
        return <button key={option} disabled={checked} onClick={() => setSelected(optionIndex)} className={cn("flex min-h-11 items-center gap-3 rounded-md border px-3 py-2 text-left text-xs transition-colors", selected === optionIndex ? "border-info bg-info/10 text-info" : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground", isAnswer && "border-primary bg-primary/10 text-primary", isWrong && "border-destructive bg-destructive/10 text-destructive")}>
          <span className="grid size-6 shrink-0 place-items-center rounded-full border border-current text-[10px]">{isAnswer ? <Check className="size-3" /> : isWrong ? <X className="size-3" /> : String.fromCharCode(65 + optionIndex)}</span>{option}
        </button>;
      })}
    </div>
    {checked && <div className="mt-4 rounded-md border border-border bg-secondary p-3 text-xs text-muted-foreground"><strong className="text-foreground">{selected === question.answer ? "Correct." : "Not quite."}</strong> {question.explanation}</div>}
    <Button className="mt-4 w-full" disabled={selected === null} onClick={checked ? next : check}>{checked ? (index === questions.length - 1 ? "Finish quiz" : "Next question") : "Check answer"}</Button>
  </section>;
}