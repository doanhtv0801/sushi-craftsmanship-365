"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Quiz } from "@/types/database";
import { localize } from "@/types/locale";

export function MissionQuiz({
  quiz,
  onSubmit,
}: {
  quiz: Quiz;
  onSubmit: (score: number, total: number) => void;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = quiz.questions.every((q) => answers[q.id]);

  function handleSubmit() {
    const score = quiz.questions.reduce((acc, q) => {
      const chosen = q.answers.find((a) => a.id === answers[q.id]);
      return acc + (chosen?.isCorrect ? 1 : 0);
    }, 0);
    setSubmitted(true);
    onSubmit(score, quiz.questions.length);
  }

  const score = submitted
    ? quiz.questions.reduce((acc, q) => {
        const chosen = q.answers.find((a) => a.id === answers[q.id]);
        return acc + (chosen?.isCorrect ? 1 : 0);
      }, 0)
    : 0;

  return (
    <div className="flex flex-col gap-6">
      {quiz.questions.map((q, qi) => {
        const chosenId = answers[q.id];
        return (
          <div key={q.id} className="flex flex-col gap-2.5">
            <p className="text-sm font-medium text-ink">
              {qi + 1}. {localize(q.question, "en")}
            </p>
            <div className="flex flex-col gap-2">
              {q.answers.map((a) => {
                const isChosen = chosenId === a.id;
                const showResult = submitted;
                return (
                  <button
                    key={a.id}
                    type="button"
                    disabled={submitted}
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: a.id }))}
                    className={cn(
                      "flex items-center justify-between gap-2 rounded-md border px-3.5 py-2.5 text-left text-sm transition-colors",
                      "border-border bg-washi-soft hover:border-accent/40",
                      isChosen && !showResult && "border-accent bg-accent-soft",
                      showResult && a.isCorrect && "border-success bg-success-soft",
                      showResult && isChosen && !a.isCorrect && "border-accent bg-accent-soft"
                    )}
                  >
                    <span>
                      <span className="mr-2 font-medium text-sumi">{a.label}.</span>
                      {localize(a.answer, "en")}
                    </span>
                    {showResult && a.isCorrect && <Check className="size-4 text-success" />}
                    {showResult && isChosen && !a.isCorrect && <X className="size-4 text-accent" />}
                  </button>
                );
              })}
            </div>
            {submitted && q.explanation && (
              <p className="rounded-md bg-washi px-3 py-2 text-xs text-sumi">
                {localize(q.explanation, "en")}
              </p>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <Button variant="default" disabled={!allAnswered} onClick={handleSubmit} className="self-start">
          Submit Answers
        </Button>
      ) : (
        <p className="text-sm font-medium text-ink">
          You scored {score} / {quiz.questions.length}
          {score === quiz.questions.length && " — perfect score! +30 XP"}
        </p>
      )}
    </div>
  );
}
