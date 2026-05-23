"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Box } from "@/app/components/docs/Box";
import { isNavItemActive, sidebarNav } from "@/app/lib/navigation";

export function DocsSidebar() {
  const pathname = usePathname();
  const [filter, setFilter] = useState("");

  const filteredNav = useMemo(() => {
    const query = filter.trim().toLowerCase();
    if (!query) {
      return sidebarNav;
    }

    return sidebarNav
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.label.toLowerCase().includes(query),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [filter]);

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-[var(--border)] bg-[var(--sidebar-bg)] lg:flex">
      <Box className="sticky top-14 flex max-h-[calc(100vh-3.5rem)] flex-col overflow-y-auto px-4 py-5">
        <Link
          className="text-sm font-medium text-[var(--link-blue)] hover:underline"
          href="/"
        >
          ← Interview Prep Home
        </Link>

        <Box className="relative mt-4">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            className="w-full rounded-md border border-[var(--border)] bg-white py-2 pr-3 pl-9 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[var(--brand-purple)] focus:ring-1 focus:ring-[var(--brand-purple)] focus:outline-none"
            onChange={(event) => setFilter(event.target.value)}
            placeholder="Filter sidebar"
            type="search"
            value={filter}
          />
        </Box>

        <nav className="mt-5 space-y-6">
          {filteredNav.map((section) => (
            <Box key={section.title}>
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                {section.title}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = isNavItemActive(pathname, item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-sm transition ${
                          isActive
                            ? "bg-[var(--brand-purple-light)] font-medium text-[var(--brand-purple)]"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        href={item.href}
                      >
                        {isActive ? (
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[var(--brand-purple)] text-[10px] font-bold text-white">
                            T
                          </span>
                        ) : null}
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Box>
          ))}
        </nav>
      </Box>
    </aside>
  );
}
