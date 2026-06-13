type QACardProps = Readonly<{
  label: string;
  question: string;
  answer: React.ReactNode;
}>;

export function QACard({ label, question, answer }: QACardProps) {
  return (
    <article className="rounded-lg border border-border bg-card p-5">
      <p className="text-xs font-medium tracking-wide text-muted uppercase">
        {label}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-heading">{question}</h3>
      <div className="mt-3 text-foreground">{answer}</div>
    </article>
  );
}
