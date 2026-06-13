import Link from "next/link";

type DocLinkCardProps = Readonly<{
  href: string;
  title: string;
  description: string;
}>;

export function DocLinkCard({ href, title, description }: DocLinkCardProps) {
  return (
    <Link className="doc-card" href={href}>
      <h3 className="font-semibold text-heading">{title}</h3>
      <p className="mt-1.5 text-sm leading-6 text-muted">{description}</p>
    </Link>
  );
}
