type DocSectionProps = Readonly<{
  title: string;
  children: React.ReactNode;
}>;

export function DocSection({ title, children }: DocSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-5 text-2xl font-bold text-gray-900">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}
