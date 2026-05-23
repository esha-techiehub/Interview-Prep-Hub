import type { Metadata } from "next";
import Link from "next/link";

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
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-12 md:px-10 md:py-16">
      <nav className="flex flex-wrap gap-2">
        <Link className="chip" href="/">
          Home
        </Link>
        <Link className="chip" href="/devops">
          DevOps
        </Link>
        <span className="chip">AWS Concepts</span>
      </nav>

      <section className="glass-panel mt-6 p-7 md:p-10">
        <p className="text-sm tracking-[0.2em] text-cyan-200/85 uppercase">
          DevOps / AWS Concepts
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          AWS Concepts
        </h1>
        <p className="mt-4 text-slate-200">
          Topic-wise AWS notes and interview Q&A under DevOps. Pick a concept to
          start preparing.
        </p>
      </section>

      <section className="mt-6 grid gap-5 md:grid-cols-2">
        {awsConcepts.map((concept) => (
          <Link
            className="glass-panel card-hover block p-6"
            href={concept.href}
            key={concept.href}
          >
            <h2 className="text-xl font-semibold text-white">{concept.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              {concept.description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
