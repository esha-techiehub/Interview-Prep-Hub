import type { Metadata } from "next";
import { DocPageHero } from "@/app/components/docs/DocPageHero";
import { DocsBreadcrumbs } from "@/app/components/docs/DocsBreadcrumbs";
import { QACard } from "@/app/components/docs/QACard";
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
    <>
      <DocsBreadcrumbs
        items={[
          { label: "Developer", href: "/" },
          { label: "DevOps", href: "/devops" },
          { label: "AWS Concepts", href: "/devops/aws" },
          { label: "AWS Configuration" },
        ]}
      />

      <DocPageHero
        description="Focused for students and working professionals preparing for cloud and DevOps interviews."
        title="AWS Configuration Interview Questions & Answers"
      />

      <div className="space-y-8">
        {numberedSections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-5 text-2xl font-bold text-heading">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.items.map((qa) => (
                <QACard
                  answer={<p className="leading-7">{qa.answer}</p>}
                  key={qa.question}
                  label={`Question ${qa.number}`}
                  question={qa.question}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="doc-content-section mt-8">
        <h2 className="text-2xl font-bold text-heading">Mini Rapid-Fire</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Short Answer</th>
              </tr>
            </thead>
            <tbody>
              {awsConfigurationRapidFire.map((item) => (
                <tr key={item.question}>
                  <td>{item.question}</td>
                  <td>{item.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
