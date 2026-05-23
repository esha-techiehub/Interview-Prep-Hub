import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

export default async function TrackPage({ params }: TrackPageProps) {
  const { track } = await params;
  const currentTrack = getInterviewTrack(track as InterviewTrack["slug"]);

  if (!currentTrack) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-12 md:px-10 md:py-16">
      <Link className="chip" href="/">
        Back to interview hub
      </Link>

      <section className="glass-panel mt-6 p-7 md:p-10">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {currentTrack.name} Interview Questions and Answers
        </h1>
        <p className="mt-4 text-slate-200">{currentTrack.summary}</p>
        <p className="mt-2 text-slate-300">{currentTrack.audience}</p>
      </section>

      {currentTrack.sampleQA.length > 0 ? (
        <section className="mt-6 space-y-4">
          {currentTrack.sampleQA.map((qa, index) => (
            <article className="glass-panel p-6" key={qa.question}>
              <p className="text-sm text-cyan-200">Question {index + 1}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {qa.question}
              </h2>
              <p className="mt-3 leading-7 text-slate-200">{qa.answer}</p>
            </article>
          ))}
        </section>
      ) : null}

      {currentTrack.slug === "devops" ? (
        <section className="glass-panel mt-6 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">
            DevOps Deep-Dive Sections
          </h2>
          <p className="mt-3 text-slate-200">
            Continue with topic-specific interview preparation paths under
            DevOps.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="chip" href="/devops/aws">
              DevOps → AWS Concepts
            </Link>
            <Link className="chip" href="/devops/aws/aws-configuration">
              AWS Configuration
            </Link>
            <Link className="chip" href="/devops/aws/elastic-ip">
              Elastic IP
            </Link>
            <Link className="chip" href="/devops/networking/smtp">
              DevOps → Networking → SMTP
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  );
}
