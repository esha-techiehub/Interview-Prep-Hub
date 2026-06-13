import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocLinkCard } from "@/app/components/docs/DocLinkCard";
import { DocPageHero } from "@/app/components/docs/DocPageHero";
import { DocSection } from "@/app/components/docs/DocSection";
import { DocsBreadcrumbs } from "@/app/components/docs/DocsBreadcrumbs";
import { QACard } from "@/app/components/docs/QACard";
import {
  getInterviewTrack,
  interviewTracks,
  type InterviewTrack,
} from "@/app/lib/interview-content";

type TrackPageProps = Readonly<{
  params: Promise<{ track: string }>;
}>;

export function generateStaticParams() {
  return interviewTracks.map((track) => ({
    track: track.slug,
  }));
}

export async function generateMetadata({
  params,
}: TrackPageProps): Promise<Metadata> {
  const { track } = await params;
  const currentTrack = getInterviewTrack(track as InterviewTrack["slug"]);

  if (!currentTrack) {
    return {
      title: "Interview Track Not Found",
    };
  }

  return {
    title: `${currentTrack.name} Interview Questions and Answers`,
    description: `${currentTrack.summary} Built for students and working professionals.`,
  };
}

const devopsDeepDive = [
  {
    href: "/devops/aws",
    title: "AWS Concepts",
    description:
      "Topic-wise AWS notes and interview Q&A under DevOps.",
  },
  {
    href: "/devops/aws/aws-configuration",
    title: "AWS Configuration",
    description: "Credentials, regions, IAM, CLI setup — 20 Q&A.",
  },
  {
    href: "/devops/aws/elastic-ip",
    title: "Elastic IP",
    description: "Short notes and detailed interview questions.",
  },
  {
    href: "/devops/networking/smtp",
    title: "SMTP",
    description: "Networking and email protocol interview questions.",
  },
];

export default async function TrackPage({ params }: TrackPageProps) {
  const { track } = await params;
  const currentTrack = getInterviewTrack(track as InterviewTrack["slug"]);

  if (!currentTrack) {
    notFound();
  }

  return (
    <>
      <DocsBreadcrumbs
        items={[
          { label: "Developer", href: "/" },
          { label: "Interview Prep", href: "/" },
          { label: currentTrack.name },
        ]}
      />

      <DocPageHero
        description={`${currentTrack.summary} ${currentTrack.audience}`}
        title={`${currentTrack.name} Interview Questions and Answers`}
      />

      {currentTrack.sampleQA.length > 0 ? (
        <section className="mb-12 space-y-4">
          <h2 className="mb-5 text-2xl font-bold text-heading">
            Sample Questions
          </h2>
          {currentTrack.sampleQA.map((qa, index) => (
            <QACard
              answer={<p className="leading-7">{qa.answer}</p>}
              key={qa.question}
              label={`Question ${index + 1}`}
              question={qa.question}
            />
          ))}
        </section>
      ) : null}

      {currentTrack.slug === "devops" ? (
        <DocSection title="DevOps Deep-Dive Sections">
          {devopsDeepDive.map((item) => (
            <DocLinkCard
              description={item.description}
              href={item.href}
              key={item.href}
              title={item.title}
            />
          ))}
        </DocSection>
      ) : (
        <section className="doc-content-section">
          <h2 className="text-xl font-bold text-heading">More content coming soon</h2>
          <p className="mt-3 text-muted">
            Additional {currentTrack.name} interview questions are being added.
            Browse other tracks from the{" "}
            <Link className="text-[var(--link-blue)] hover:underline" href="/">
              documentation home
            </Link>
            .
          </p>
        </section>
      )}
    </>
  );
}
