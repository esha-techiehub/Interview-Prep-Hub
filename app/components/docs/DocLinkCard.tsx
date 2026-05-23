import Link from "next/link";

type DocLinkCardProps = Readonly<{
  href: string;
  title: string;
  description: string;
}>;

export function DocLinkCard({ href, title, description }: DocLinkCardProps) {
  return (
    <Link
      className="block rounded-lg border border-[var(--border)] bg-white p-5 transition hover:border-gray-300 hover:shadow-sm"
      href={href}
    >
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-6 text-gray-600">{description}</p>
    </Link>
  );
}
