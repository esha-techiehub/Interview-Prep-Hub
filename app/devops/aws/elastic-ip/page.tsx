import type { Metadata } from "next";
import Link from "next/link";
import {
  elasticIpQuestions,
  elasticIpScenarioQuestions,
  elasticIpShortNotes,
} from "@/app/lib/elastic-ip-qa";

export const metadata: Metadata = {
  title: "Elastic IP | AWS Concepts Interview Notes and Q&A",
  description:
    "Short notes and detailed interview questions on AWS Elastic IP for DevOps and cloud interviews.",
};

export default function ElasticIpPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-12 md:px-10 md:py-16">
      <nav className="flex flex-wrap gap-2">
        <Link className="chip" href="/">
          Home
        </Link>
        <Link className="chip" href="/devops">
          DevOps
        </Link>
        <Link className="chip" href="/devops/aws">
          AWS Concepts
        </Link>
        <span className="chip">Elastic IP</span>
      </nav>

      <section className="glass-panel mt-6 p-7 md:p-10">
        <p className="text-sm tracking-[0.2em] text-cyan-200/85 uppercase">
          DevOps / AWS Concepts / Elastic IP
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          Elastic IP Address
        </h1>
        <p className="mt-4 text-slate-200">
          AWS concept notes and interview Q&A for students and working
          professionals.
        </p>
      </section>

      <section className="glass-panel mt-6 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-white">
          Short Notes on Elastic IP Address
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200">
          {elasticIpShortNotes.map((note) => (
            <li className="leading-7" key={note}>
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section className="glass-panel mt-6 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-white">
          Interview Questions & Answers
        </h2>
        <div className="mt-5 space-y-4">
          {elasticIpQuestions.map((qa, index) => (
            <article
              className="rounded-xl border border-white/10 bg-black/20 p-5"
              key={qa.question}
            >
              <p className="text-xs tracking-wider text-cyan-200 uppercase">
                Question {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {qa.question}
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200">
                {qa.answer.map((line) => (
                  <li className="leading-7" key={line}>
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-6 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-white">
          Scenario-Based Questions & Answers
        </h2>
        <p className="mt-2 text-slate-300">
          Real-world situations often asked in DevOps and cloud interviews.
        </p>
        <div className="mt-5 space-y-4">
          {elasticIpScenarioQuestions.map((qa, index) => (
            <article
              className="rounded-xl border border-white/10 bg-black/20 p-5"
              key={qa.question}
            >
              <p className="text-xs tracking-wider text-cyan-200 uppercase">
                Scenario {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {qa.question}
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200">
                {qa.answer.map((line) => (
                  <li className="leading-7" key={line}>
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
