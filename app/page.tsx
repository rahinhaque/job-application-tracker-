import ImageTabs from "@/components/image-tabs";
import { Button } from "@/components/ui/button";

// import Image from "next/image";
import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Hero section */}
        <section className="container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-black mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-violet-400">A better way</span> to track
              your job applications
            </h1>
            <p className="text-gray-600 mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl px-2 sm:px-0">
              Track and manage your job searches with ease.
            </p>
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <Link href="/sign-up" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="px-6 sm:px-8 h-10 sm:h-12 text-base sm:text-lg font-medium bg-violet-400 w-full sm:w-auto"
                >
                  Start for free <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>

              <p className="text-gray-600 text-xs sm:text-sm">
                Free forever, no credit card required
              </p>
            </div>
          </div>
        </section>

        {/* Hero images section with tabs*/}
        <ImageTabs />

        {/* Features Section */}
        <section className="border-t bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* Section heading */}
              <div className="mx-auto mb-16 max-w-2xl text-center">
                <span className="mb-3 inline-block rounded-full bg-violet-100 px-4 py-1 text-sm font-medium text-violet-500">
                  Why teams choose us
                </span>
                <h2 className="text-3xl font-semibold text-black md:text-4xl">
                  Everything you need to land the job
                </h2>
              </div>

              {/* Feature cards */}
              <div className="relative grid gap-8 md:grid-cols-3">
                {/* Connecting line for desktop */}
                <div className="absolute left-0 right-0 top-6 hidden h-px bg-violet-100 md:block" />

                {[
                  {
                    icon: Briefcase,
                    step: "01",
                    title: "Organize Applications",
                    desc: "Create custom boards and columns to track your job applications at every stage of the process.",
                  },
                  {
                    icon: TrendingUp,
                    step: "02",
                    title: "Track Progress",
                    desc: "Monitor your application status from applied to interview to offer with visual Kanban boards.",
                  },
                  {
                    icon: CheckCircle2,
                    step: "03",
                    title: "Stay Organized",
                    desc: "Never lose track of an application. Keep all your job search information in one centralized place.",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-400 transition-colors duration-300 group-hover:bg-violet-500">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-violet-200 transition-colors duration-300 group-hover:text-violet-400">
                        {feature.step}
                      </span>
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
