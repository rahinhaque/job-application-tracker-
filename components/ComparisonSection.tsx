import { Check, X } from "lucide-react";

const comparisons = [
  {
    problem: "Copy-pasting job links between tabs and files",
    solution: "Save a job to your board in one click",
  },
  {
    problem: "No idea what stage each application is at",
    solution: "See every stage at a glance, from Wish List to Offer",
  },
  {
    problem: "Forgetting to follow up after an interview",
    solution: "Know exactly which applications need action next",
  },
  {
    problem: "Scattered across five tabs, two notebooks, one spreadsheet",
    solution: "Everything lives in a single dashboard",
  },
  {
    problem: "Turns into an unreadable wall of rows after 50 entries",
    solution: "Built to stay clear at 5 applications or 500",
  },
  {
    problem: "Only makes sense to the person who built it",
    solution: "Simple enough to hand off or share with anyone",
  },
];

export default function ComparisonSection() {
  return (
    <section className="bg-gray-50/80 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
            Why switch
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your spreadsheet was never built for this
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600">
            It works, until row 40. Here&apos;s what changes when your search
            has an actual board behind it.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-2">
          {/* Divider "vs" badge, desktop only */}
          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-400 shadow-sm md:flex">
            VS
          </div>

          {/* Spreadsheet column */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              The spreadsheet
            </p>
            <ul className="mt-5 space-y-4">
              {comparisons.map((item) => (
                <li key={item.problem} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50">
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <p className="text-sm leading-6 text-gray-500">
                    {item.problem}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Tracker column */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-violet-500 to-indigo-600 p-6 shadow-xl sm:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <p className="relative text-sm font-semibold uppercase tracking-wide text-white/70">
              Job Tracker
            </p>
            <ul className="relative mt-5 space-y-4">
              {comparisons.map((item) => (
                <li key={item.solution} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-sm leading-6 text-white">
                    {item.solution}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
