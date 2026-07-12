import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Heart,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const storyColumns = [
  {
    stage: "Wish List",
    color: "bg-sky-500",
    year: "2023",
    title: "An idea we couldn't stop thinking about",
    copy: "Three of us were job hunting at the same time, each running our search out of a different spreadsheet. None of them told us what actually mattered: what stage we were at, and what to do next.",
  },
  {
    stage: "Applied",
    color: "bg-violet-600",
    year: "2024",
    title: "We started building, screen by screen",
    copy: "Nights and weekends went into the first board. No logins, no fluff — just columns that matched how a search actually moves: save it, apply, wait, follow up.",
  },
  {
    stage: "Interviewing",
    color: "bg-emerald-500",
    year: "2024",
    title: "A hundred job seekers put us through it",
    copy: "Our closed beta group broke every version we shipped. Every piece of feedback — good and blunt — reshaped the product until the board finally felt effortless.",
  },
  {
    stage: "Offer",
    color: "bg-amber-500",
    year: "Today",
    title: "Now the board behind thousands of searches",
    copy: "Job Tracker runs quietly in the background of job hunts everywhere, turning a stressful, scattered process into one clear view.",
  },
];

const values = [
  {
    icon: Target,
    title: "Clarity over clutter",
    copy: "A job search already has enough uncertainty in it. Every screen we ship earns its place by making the next step obvious.",
  },
  {
    icon: Heart,
    title: "Built with empathy",
    copy: "Half of our team has been laid off at least once. We design for the version of you that's tired, not the version with infinite patience.",
  },
  {
    icon: Sparkles,
    title: "Small team, fast hands",
    copy: "We stay small on purpose. It means the person who hears your feedback is often the person who ships the fix.",
  },
];

const stats = [
  { label: "Applications tracked", value: "50K+" },
  { label: "Interviews scheduled", value: "12K+" },
  { label: "Offers landed", value: "3.2K+" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_35%),linear-gradient(to_bottom_right,_#faf5ff,_#ffffff,_#eef2ff)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
            <Briefcase className="h-4 w-4" />
            About Job Tracker
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            We built the board we wished existed.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Job Tracker started as a way to stop losing track of our own
            applications. It's now a home base for anyone trying to keep a job
            search organized instead of overwhelming.
          </p>
        </div>
      </section>

      {/* Story as a Kanban board */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
            Our story
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We tracked our own idea like a job application
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {storyColumns.map((col) => (
            <div
              key={col.stage}
              className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50/60"
            >
              <div
                className={`flex items-center justify-between rounded-t-2xl px-4 py-3 text-sm font-semibold text-white ${col.color}`}
              >
                <span>{col.stage}</span>
                <span className="text-xs font-medium text-white/80">
                  {col.year}
                </span>
              </div>
              <div className="flex-1 space-y-2 p-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  {col.title}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{col.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50/80 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              What we care about
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The rules we build by
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-gray-200/80 bg-white shadow-sm"
              >
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="pt-3 text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-sm leading-6">
                    {value.copy}
                  </CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band, styled after the sign-in panel */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-violet-500 to-indigo-600 px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl" />

          <div className="relative">
            <div className="mb-10 flex items-center gap-2 text-white/90">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">
                Job seekers using Job Tracker
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur"
                >
                  <p className="text-3xl font-bold text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to move your search off the spreadsheet?
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Start your board for free. No credit card, no clutter.
        </p>
        <Button
          asChild
          className="mt-8 h-11 bg-violet-600 px-6 text-base font-medium hover:bg-violet-700"
        >
          <Link href="/sign-up">
            Start for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
