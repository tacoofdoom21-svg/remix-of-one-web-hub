import { useEffect, useMemo, useState } from "react";
import { courseUnits } from "@/lib/course-data";

type ProgressState = {
  completedSections: string[];
  quizScores: Record<string, number>;
};

const STORAGE_KEY = "circuit101-progress";
const emptyProgress: ProgressState = { completedSections: [], quizScores: {} };

export function useCourseProgress() {
  const [progress, setProgress] = useState<ProgressState>(emptyProgress);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setProgress(JSON.parse(saved) as ProgressState);
    } catch {
      setProgress(emptyProgress);
    }
  }, []);

  const persist = (next: ProgressState) => {
    setProgress(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const toggleSection = (unitSlug: string, sectionId: string) => {
    const key = `${unitSlug}:${sectionId}`;
    const completedSections = progress.completedSections.includes(key)
      ? progress.completedSections.filter((item) => item !== key)
      : [...progress.completedSections, key];
    persist({ ...progress, completedSections });
  };

  const saveQuizScore = (unitSlug: string, score: number) => {
    persist({ ...progress, quizScores: { ...progress.quizScores, [unitSlug]: score } });
  };

  const resetProgress = () => persist(emptyProgress);
  const totalSections = courseUnits.reduce((total, unit) => total + unit.sections.length, 0);
  const percent = Math.round((progress.completedSections.length / totalSections) * 100);
  const averageScore = useMemo(() => {
    const scores = Object.values(progress.quizScores);
    return scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0;
  }, [progress.quizScores]);

  return { progress, percent, averageScore, toggleSection, saveQuizScore, resetProgress };
}