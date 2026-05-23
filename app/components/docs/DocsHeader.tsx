import Link from "next/link";
import { headerNav } from "@/app/lib/navigation";
import { Box } from "@/app/components/docs/Box";

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white">
      <Box className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-4 px-4 md:px-6">
        <Box className="flex min-w-0 items-center gap-6">
          <Link className="flex shrink-0 items-center gap-2.5" href="/">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-[var(--brand-purple)] text-xs font-bold text-white">
              IP
            </span>
            <span className="hidden text-sm font-semibold text-gray-900 sm:inline">
              Interview Prep Hub
            </span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {headerNav.map((item) => (
              <Link
                className="text-sm text-gray-600 transition hover:text-gray-900"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Box>

        <Box className="flex items-center gap-3">
          <button
            className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-gray-50 px-3 py-1.5 text-sm text-gray-500 sm:flex"
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            Search
            <kbd className="rounded border border-gray-200 bg-white px-1.5 py-0.5 text-xs text-gray-400">
              Ctrl K
            </kbd>
          </button>
        </Box>
      </Box>
    </header>
  );
}
