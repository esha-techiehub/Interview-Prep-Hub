import type { ReactNode } from "react";

export function Box({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  return <div className={className}>{children}</div>;
}
