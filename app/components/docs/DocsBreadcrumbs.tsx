import Link from "next/link";
import type { BreadcrumbItem } from "@/app/lib/navigation";

type DocsBreadcrumbsProps = Readonly<{
  items: BreadcrumbItem[];
}>;

export function DocsBreadcrumbs({ items }: DocsBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li className="flex items-center gap-1.5" key={item.label}>
              {index > 0 ? <span className="text-subtle">/</span> : null}
              {item.href && !isLast ? (
                <Link
                  className="hover:text-heading hover:underline"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
