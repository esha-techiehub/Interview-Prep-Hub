export type NavItem = {
  href: string;
  label: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const sidebarNav: NavSection[] = [
  {
    title: "Interview Tracks",
    items: [
      { href: "/devops", label: "DevOps" },
      { href: "/cyber-security", label: "Cyber Security" },
      { href: "/data-analytics", label: "Data Analytics" },
    ],
  },
  {
    title: "DevOps Deep Dive",
    items: [
      { href: "/devops/aws", label: "AWS Concepts" },
      { href: "/devops/aws/aws-configuration", label: "AWS Configuration" },
      { href: "/devops/aws/elastic-ip", label: "Elastic IP" },
      { href: "/devops/networking/smtp", label: "SMTP" },
    ],
  },
];

export const headerNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/devops", label: "DevOps" },
  { href: "/cyber-security", label: "Cyber Security" },
  { href: "/data-analytics", label: "Data Analytics" },
];

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function isNavItemActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
