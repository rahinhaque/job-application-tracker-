import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_35%),linear-gradient(to_bottom_right,_#faf5ff,_#ffffff,_#eef2ff)]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Illustration panel */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-violet-600 via-violet-500 to-indigo-600 lg:flex">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" />

          <div className="relative flex w-full flex-col justify-between p-6 text-white sm:p-8 md:p-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium backdrop-blur sm:px-4 sm:py-2">
                <Briefcase className="h-4 w-4" />
                Job Tracker
              </div>

              <h1 className="mt-6 max-w-md text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Welcome back. Let’s continue your job search.
              </h1>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                Sign in to review applications, manage interviews, and keep your progress moving.
              </p>
            </div>

            <div className="relative mx-auto mt-8 w-full max-w-xl">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/70 sm:text-sm">Interview progress</p>
                    <p className="text-xl font-semibold sm:text-2xl">76%</p>
                  </div>
                  <div className="rounded-2xl bg-white/15 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm">
                    3 new updates
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                  {[
                    { title: "Saved jobs", value: "18" },
                    { title: "Interviews", value: "7" },
                    { title: "Offers", value: "2" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur sm:p-4"
                    >
                      <p className="text-xs text-white/70 sm:text-sm">{item.title}</p>
                      <p className="mt-1 text-lg font-semibold sm:text-2xl">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="flex items-center justify-center px-6 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">
            <div className="mb-6 flex items-center gap-2 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                <Briefcase className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Job Tracker
              </span>
            </div>

            <Card className="border-gray-200/80 bg-white/80 shadow-2xl backdrop-blur-xl">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl">Welcome back</CardTitle>
                <CardDescription>
                  Sign in to continue managing your applications.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="h-11 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="h-11 bg-white"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-violet-600 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button className="h-11 w-full bg-violet-600 text-base font-medium hover:bg-violet-700">
                    Sign in
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link href="/sign-up" className="font-medium text-violet-600 hover:underline">
                    Sign up
                  </Link>
                </p>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-xs text-gray-500">
              Use your email and password to access your dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
