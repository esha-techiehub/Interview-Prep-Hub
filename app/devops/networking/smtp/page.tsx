import type { Metadata } from "next";
import Link from "next/link";
import { smtpIntro, smtpProviders, smtpQASections } from "@/app/lib/smtp-qa";

export const metadata: Metadata = {
  title: "SMTP Interview Questions and Answers",
  description:
    "Beginner, intermediate, and advanced SMTP interview questions and answers for DevOps preparation.",
};

export default function SmtpPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-12 md:px-10 md:py-16">
      <nav className="flex flex-wrap gap-2">
        <Link className="chip" href="/">
          Home
        </Link>
        <Link className="chip" href="/devops">
          DevOps
        </Link>
        <span className="chip">Networking</span>
        <span className="chip">SMTP</span>
      </nav>

      <section className="glass-panel mt-6 p-7 md:p-10">
        <p className="text-sm tracking-[0.2em] text-cyan-200/85 uppercase">
          DevOps / Networking / SMTP
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          SMTP Interview Questions & Answers
        </h1>
        <p className="mt-4 text-slate-200">{smtpIntro.whatIsSmtp}</p>
        <p className="mt-2 text-slate-200">{smtpIntro.whyUsed}</p>
      </section>

      <section className="glass-panel mt-6 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-white">SMTP Providers</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {smtpProviders.map((provider) => (
            <span className="chip" key={provider}>
              {provider}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-6 space-y-6">
        {smtpQASections.map((section) => (
          <section className="glass-panel p-6 md:p-8" key={section.level}>
            <h2 className="text-2xl font-semibold text-white">
              {section.level} Questions
            </h2>
            <div className="mt-5 space-y-4">
              {section.items.map((qa, index) => (
                <article
                  className="rounded-xl border border-white/10 bg-black/20 p-5"
                  key={qa.question}
                >
                  <p className="text-xs tracking-wider text-cyan-200 uppercase">
                    {section.level} {index + 1}
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
        ))}
      </div>
    </main>
  );
}
