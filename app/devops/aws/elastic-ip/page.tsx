import type { Metadata } from "next";
import { DocPageHero } from "@/app/components/docs/DocPageHero";
import { DocsBreadcrumbs } from "@/app/components/docs/DocsBreadcrumbs";
import { QACard } from "@/app/components/docs/QACard";
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

function AnswerList({ lines }: Readonly<{ lines: string[] }>) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-7">
      {lines.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  );
}

export default function ElasticIpPage() {
  return (
    <>
      <DocsBreadcrumbs
        items={[
          { label: "Developer", href: "/" },
          { label: "DevOps", href: "/devops" },
          { label: "AWS Concepts", href: "/devops/aws" },
          { label: "Elastic IP" },
        ]}
      />

      <DocPageHero
        description="AWS concept notes and interview Q&A for students and working professionals."
        title="Elastic IP Address"
      />

      <section className="doc-content-section">
        <h2 className="text-2xl font-bold text-heading">
          Short Notes on Elastic IP Address
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-foreground">
          {elasticIpShortNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="mb-5 text-2xl font-bold text-heading">
          Interview Questions & Answers
        </h2>
        <div className="space-y-4">
          {elasticIpQuestions.map((qa, index) => (
            <QACard
              answer={<AnswerList lines={qa.answer} />}
              key={qa.question}
              label={`Question ${index + 1}`}
              question={qa.question}
            />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-2xl font-bold text-heading">
          Scenario-Based Questions & Answers
        </h2>
        <p className="mb-5 text-muted">
          Real-world situations often asked in DevOps and cloud interviews.
        </p>
        <div className="space-y-4">
          {elasticIpScenarioQuestions.map((qa, index) => (
            <QACard
              answer={<AnswerList lines={qa.answer} />}
              key={qa.question}
              label={`Scenario ${index + 1}`}
              question={qa.question}
            />
          ))}
        </div>
      </section>
    </>
  );
}
