import type { Metadata } from "next";
import { DocPageHero } from "@/app/components/docs/DocPageHero";
import { DocsBreadcrumbs } from "@/app/components/docs/DocsBreadcrumbs";
import { QACard } from "@/app/components/docs/QACard";
import { smtpIntro, smtpProviders, smtpQASections } from "@/app/lib/smtp-qa";

export const metadata: Metadata = {
  title: "SMTP Interview Questions and Answers",
  description:
    "Beginner, intermediate, and advanced SMTP interview questions and answers for DevOps preparation.",
};

function AnswerList({ lines }: Readonly<{ lines: string[] }>) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-7">
      {lines.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  );
}

export default function SmtpPage() {
  return (
    <>
      <DocsBreadcrumbs
        items={[
          { label: "Developer", href: "/" },
          { label: "DevOps", href: "/devops" },
          { label: "Networking" },
          { label: "SMTP" },
        ]}
      />

      <DocPageHero
        description={`${smtpIntro.whatIsSmtp} ${smtpIntro.whyUsed}`}
        title="SMTP Interview Questions & Answers"
      />

      <section className="doc-content-section">
        <h2 className="text-2xl font-bold text-heading">SMTP Providers</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {smtpProviders.map((provider) => (
            <span className="doc-tag" key={provider}>
              {provider}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-8 space-y-8">
        {smtpQASections.map((section) => (
          <section key={section.level}>
            <h2 className="mb-5 text-2xl font-bold text-heading">
              {section.level} Questions
            </h2>
            <div className="space-y-4">
              {section.items.map((qa, index) => (
                <QACard
                  answer={<AnswerList lines={qa.answer} />}
                  key={qa.question}
                  label={`${section.level} ${index + 1}`}
                  question={qa.question}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
