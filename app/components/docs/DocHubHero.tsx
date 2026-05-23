type DocHubHeroProps = Readonly<{
  title: string;
  description: string;
}>;

export function DocHubHero({ title, description }: DocHubHeroProps) {
  return (
    <header className="mb-10">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-[var(--brand-purple-light)]">
        <span className="flex h-8 w-8 items-center justify-center rounded bg-[var(--brand-purple)] text-sm font-bold text-white">
          IP
        </span>
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
        {description}
      </p>
    </header>
  );
}
