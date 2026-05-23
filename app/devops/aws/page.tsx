import type { Metadata } from "next";
import { DocHubHero } from "@/app/components/docs/DocHubHero";
import { DocLinkCard } from "@/app/components/docs/DocLinkCard";
import { DocSection } from "@/app/components/docs/DocSection";
import { DocsBreadcrumbs } from "@/app/components/docs/DocsBreadcrumbs";

export const metadata: Metadata = {
  title: "AWS Concepts | DevOps Interview Preparation",
  description:
    "AWS concepts for DevOps interviews: configuration, Elastic IP, and more.",
};

const awsConcepts = [
  {
    href: "/devops/aws/aws-configuration",
    title: "AWS Configuration",
    description:
      "Credentials, regions, IAM, CLI setup, and core AWS services — 20 Q&A.",
  },
  {
    href: "/devops/aws/elastic-ip",
    title: "Elastic IP",
    description:
      "Short notes and detailed interview questions on static public IPv4 addresses.",
  },
];

export default function AwsConceptsPage() {
  return (
    <>
      <DocsBreadcrumbs
        items={[
          { label: "Developer", href: "/" },
          { label: "DevOps", href: "/devops" },
          { label: "AWS Concepts" },
        ]}
      />

      <DocHubHero
        description="Topic-wise AWS notes and interview Q&A under DevOps. Pick a concept to start preparing."
        title="AWS Concepts"
      />

      <DocSection title="Topics">
        {awsConcepts.map((concept) => (
          <DocLinkCard
            description={concept.description}
            href={concept.href}
            key={concept.href}
            title={concept.title}
          />
        ))}
      </DocSection>
    </>
  );
}
