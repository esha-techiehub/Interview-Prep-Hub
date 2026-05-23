type QACardProps = Readonly<{
  label: string;
  question: string;
  answer: React.ReactNode;
}>;

export function QACard({ label, question, answer }: QACardProps) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-white p-5">
      <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
        {label}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-gray-900">{question}</h3>
      <div className="mt-3 text-gray-700">{answer}</div>
    </article>
  );
}
