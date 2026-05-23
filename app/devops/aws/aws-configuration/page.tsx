import type { Metadata } from "next";
import Link from "next/link";
import {
  awsConfigurationRapidFire,
  awsConfigurationSections,
} from "@/app/lib/aws-configuration-qa";

export const metadata: Metadata = {
  title: "AWS Configuration Interview Questions and Answers",
  description:
    "20 AWS configuration interview questions and answers for students and working professionals.",
};

export default function AwsConfigurationPage() {
  const numberedSections = awsConfigurationSections.map((section, sectionIndex) => {
    const previousItemsCount = awsConfigurationSections
      .slice(0, sectionIndex)
      .reduce((sum, currentSection) => sum + currentSection.items.length, 0);

    return {
      ...section,
      items: section.items.map((item, itemIndex) => ({
        ...item,
        number: previousItemsCount + itemIndex + 1,
      })),
    };
  });

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
        <span className="chip">AWS Configuration</span>
      </nav>

      <section className="glass-panel mt-6 p-7 md:p-10">
        <p className="text-sm tracking-[0.2em] text-cyan-200/85 uppercase">
          DevOps / AWS / AWS Configuration
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          AWS Configuration Interview Questions & Answers
        </h1>
        <p className="mt-4 text-slate-200">
          Focused for students and working professionals preparing for cloud and
          DevOps interviews.
        </p>
      </section>

      <div className="mt-6 space-y-6">
        {numberedSections.map((section) => (
          <section className="glass-panel p-6 md:p-8" key={section.title}>
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            <div className="mt-5 space-y-4">
              {section.items.map((qa) => (
                <article
                  className="rounded-xl border border-white/10 bg-black/20 p-5"
                  key={qa.question}
                >
                  <p className="text-xs tracking-wider text-cyan-200 uppercase">
                    Question {qa.number}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {qa.question}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-200">{qa.answer}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="glass-panel mt-6 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-white">Mini Rapid-Fire</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/20 text-cyan-200">
                <th className="py-3 pr-4 font-semibold">Question</th>
                <th className="py-3 font-semibold">Short Answer</th>
              </tr>
            </thead>
            <tbody>
              {awsConfigurationRapidFire.map((item) => (
                <tr className="border-b border-white/10" key={item.question}>
                  <td className="py-3 pr-4 text-slate-100">{item.question}</td>
                  <td className="py-3 text-slate-200">{item.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
