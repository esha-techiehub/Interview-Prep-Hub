import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DevOps, Cyber Security, Data Analytics Interview Questions and Answers",
  description:
    "Prepare for interviews in one place with curated DevOps, Cyber Security, and Data Analytics questions and answers.",
};

const tracks = [
  {
    href: "/devops",
    title: "DevOps Interview Questions",
    description:
      "CI/CD, cloud, Linux, Docker, Kubernetes, monitoring, and reliability scenarios.",
    keywords: ["AWS", "Kubernetes", "CI/CD"],
  },
  {
    href: "/cyber-security",
    title: "Cyber Security Interview Questions",
    description:
      "Network security, OWASP, SIEM, incident response, IAM, and threat fundamentals.",
    keywords: ["OWASP", "SOC", "Threat Modeling"],
  },
  {
    href: "/data-analytics",
    title: "Data Analytics Interview Questions",
    description:
      "SQL, Excel, Python, BI dashboards, statistics, and business case interpretation.",
    keywords: ["SQL", "Power BI", "Python"],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060913] text-white">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="hero-blob hero-blob-one" />
      <div className="hero-blob hero-blob-two" />
      <div className="hero-blob hero-blob-three" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-14 md:px-10 lg:py-20">
        <section className="glass-panel reveal-fade p-8 md:p-12">
          <p className="text-sm tracking-[0.24em] text-cyan-200/85 uppercase">
            Interview Prep Hub
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            One place for DevOps, Cyber Security, and Data Analytics interview
            questions and answers.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-200 md:text-lg">
            Built for students and working professionals. Practice fundamentals,
            scenario-based questions, and role-focused answers in a simple,
            distraction-free preparation space.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="chip">students interview preparation</span>
            <span className="chip">working professional upskilling</span>
            <span className="chip">technology interview Q&A</span>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {tracks.map((track, index) => (
            <Link
              className="glass-panel reveal-fade card-hover p-6"
              href={track.href}
              key={track.href}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <h2 className="text-xl font-semibold text-white">{track.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                {track.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {track.keywords.map((keyword) => (
                  <span className="chip" key={keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="glass-panel reveal-fade p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Who this is for</h2>
            <p className="mt-4 text-slate-200">
              Students can build strong basics quickly. Working professionals can
              revise advanced concepts and prepare for role switches.
            </p>
            <ul className="mt-5 space-y-2 text-slate-100">
              <li>Structured topic-wise preparation</li>
              <li>Beginner to advanced difficulty flow</li>
              <li>Fast revision before interviews</li>
            </ul>
          </article>

          <article className="glass-panel reveal-fade p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Suggested technology stack</h2>
            <p className="mt-4 text-slate-200">
              Keep version one simple and scalable with SEO-first rendering.
            </p>
            <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl border border-white/12 bg-black/15 p-4">
                <p className="font-semibold text-cyan-200">Frontend</p>
                <p className="mt-2 text-slate-100">
                  Next.js, React, Tailwind CSS, Framer Motion
                </p>
              </div>
              <div className="rounded-xl border border-white/12 bg-black/15 p-4">
                <p className="font-semibold text-cyan-200">Backend</p>
                <p className="mt-2 text-slate-100">
                  Start with static MDX/JSON. Add Node API + PostgreSQL when
                  user features are needed.
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
