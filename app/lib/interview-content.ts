export type InterviewTrack = {
  slug: "devops" | "cyber-security" | "data-analytics";
  name: string;
  audience: string;
  summary: string;
  sampleQA: Array<{
    question: string;
    answer: string;
  }>;
};

export const interviewTracks: InterviewTrack[] = [
  {
    slug: "devops",
    name: "DevOps",
    audience: "SRE, platform engineer, cloud engineer, and release-focused roles.",
    summary:
      "Focus on automation, deployment reliability, scaling, observability, and incident handling.",
    sampleQA: [],
  },
  {
    slug: "cyber-security",
    name: "Cyber Security",
    audience: "SOC analyst, security engineer, risk analyst, and defensive security roles.",
    summary:
      "Focus on threat detection, prevention controls, incident response, and secure engineering practices.",
    sampleQA: [
      {
        question: "What is the CIA triad in cyber security?",
        answer:
          "CIA stands for Confidentiality, Integrity, and Availability. It is a foundational model for evaluating and designing security controls.",
      },
      {
        question: "How do you respond when suspicious login activity is detected?",
        answer:
          "Contain immediately by disabling affected sessions, investigate logs and indicators, enforce password reset and MFA checks, then document and improve controls.",
      },
      {
        question: "What is OWASP Top 10 used for?",
        answer:
          "It is a widely used awareness guide for common web application security risks and helps prioritize secure coding and testing.",
      },
    ],
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    audience: "Data analyst, BI analyst, product analyst, and decision-support roles.",
    summary:
      "Focus on SQL, dashboarding, statistical reasoning, and translating data into business decisions.",
    sampleQA: [
      {
        question: "How is a LEFT JOIN different from an INNER JOIN?",
        answer:
          "INNER JOIN returns only matching rows in both tables. LEFT JOIN returns all rows from the left table plus matched rows from the right table.",
      },
      {
        question: "What is the difference between a metric and a dimension?",
        answer:
          "A metric is a measurable numeric value, like revenue. A dimension is a descriptive attribute, like region or product category.",
      },
      {
        question: "How would you validate a dashboard before sharing it?",
        answer:
          "Check source logic, filters, date ranges, edge cases, and compare totals against trusted baseline reports before release.",
      },
    ],
  },
];

export function getInterviewTrack(slug: InterviewTrack["slug"]) {
  return interviewTracks.find((track) => track.slug === slug);
}
