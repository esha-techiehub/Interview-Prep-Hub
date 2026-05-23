import type { Metadata } from "next";
import { DocHubHero } from "@/app/components/docs/DocHubHero";
import { DocLinkCard } from "@/app/components/docs/DocLinkCard";
import { DocSection } from "@/app/components/docs/DocSection";
import { DocsBreadcrumbs } from "@/app/components/docs/DocsBreadcrumbs";

export const metadata: Metadata = {
  title:
    "DevOps, Cyber Security, Data Analytics Interview Questions and Answers",
  description:
    "Prepare for interviews in one place with curated DevOps, Cyber Security, and Data Analytics questions and answers.",
};

const tracks = [
  {
    href: "/devops",
    title: "DevOps Interview Questions",
    description:
      "CI/CD, cloud, Linux, Docker, Kubernetes, monitoring, and reliability scenarios.",
  },
  {
    href: "/cyber-security",
    title: "Cyber Security Interview Questions",
    description:
      "Network security, OWASP, SIEM, incident response, IAM, and threat fundamentals.",
  },
  {
    href: "/data-analytics",
    title: "Data Analytics Interview Questions",
    description:
      "SQL, Excel, Python, BI dashboards, statistics, and business case interpretation.",
  },
];

const deepDiveTopics = [
  {
    href: "/devops/aws",
    title: "AWS Concepts",
    description:
      "Configuration, Elastic IP, and core AWS services for cloud interviews.",
  },
  {
    href: "/devops/aws/aws-configuration",
    title: "AWS Configuration",
    description:
      "Credentials, regions, IAM, CLI setup — 20 interview Q&A.",
  },
  {
    href: "/devops/aws/elastic-ip",
    title: "Elastic IP",
    description:
      "Short notes and detailed interview questions on static public IPv4 addresses.",
  },
  {
    href: "/devops/networking/smtp",
    title: "SMTP",
    description:
      "Beginner to advanced SMTP interview questions for DevOps networking.",
  },
];

export default function Home() {
  return (
    <>
      <DocsBreadcrumbs
        items={[
          { label: "Developer", href: "/" },
          { label: "Interview Prep", href: "/" },
          { label: "Documentation" },
        ]}
      />

      <DocHubHero
        description="Find interview questions and answers for DevOps, Cyber Security, and Data Analytics. Built for students and working professionals to practice fundamentals, scenario-based questions, and role-focused answers."
        title="Interview Prep Documentation"
      />

      <DocSection title="Introduction">
        <DocLinkCard
          description="Structured topic-wise preparation for technology interviews."
          href="/devops"
          title="Getting Started"
        />
        <DocLinkCard
          description="Browse all interview tracks and deep-dive topics from the sidebar."
          href="/cyber-security"
          title="Browse Tracks"
        />
      </DocSection>

      <DocSection title="Interview Tracks">
        {tracks.map((track) => (
          <DocLinkCard
            description={track.description}
            href={track.href}
            key={track.href}
            title={track.title}
          />
        ))}
      </DocSection>

      <DocSection title="DevOps Deep Dive">
        {deepDiveTopics.map((topic) => (
          <DocLinkCard
            description={topic.description}
            href={topic.href}
            key={topic.href}
            title={topic.title}
          />
        ))}
      </DocSection>
    </>
  );
}
