import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function FinalCtaSection() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-violet-500 to-indigo-600 px-6 py-16 text-center shadow-xl sm:px-12 sm:py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />
        <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl" />

        <div className="relative">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            <Briefcase className="h-4 w-4" />
            Job Tracker
          </div>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Start tracking your search today
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            Bring your applications into one board and always know what to do
            next. Free forever, no credit card required.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 w-full bg-white px-6 text-base font-medium text-violet-700 hover:bg-white/90 sm:w-auto"
            >
              <Link href="/sign-up">
                Start for free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-11 w-full border-white/30 bg-transparent px-6 text-base font-medium text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
