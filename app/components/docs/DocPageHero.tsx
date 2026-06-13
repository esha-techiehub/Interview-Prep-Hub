type DocPageHeroProps = Readonly<{
  title: string;
  description: string;
}>;

export function DocPageHero({ title, description }: DocPageHeroProps) {
  return (
    <header className="mb-8 border-b border-border pb-8">
      <h1 className="text-3xl font-bold tracking-tight text-heading md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
        {description}
      </p>
    </header>
  );
}
