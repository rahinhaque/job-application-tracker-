"use client";
import Link from "next/link";
import Image from "next/image";
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
import { signUp } from "@/lib/auth/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await signUp.email({
        name,
        email,
        password,
      });
      if (result.error) {
        setError(result.error.message ?? "Failed to create an account.");
      } else {
        router.push("/dashboard");
      }
    } catch {
      setError("Failed to create an account. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_35%),linear-gradient(to_bottom_right,_#faf5ff,_#ffffff,_#eef2ff)]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Illustration panel */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-violet-600 via-violet-500 to-indigo-600 lg:flex">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" />

          <div className="relative flex w-full flex-col justify-between p-6 sm:p-8 md:p-12 text-white">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium backdrop-blur">
                <Briefcase className="h-4 w-4" />
                Job Tracker
              </div>

              <h1 className="mt-6 max-w-md text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Keep your job search organized and stress-free.
              </h1>

              <p className="mt-4 max-w-md text-sm sm:text-base leading-7 text-white/80">
                Track applications, follow up faster, and stay in control of
                every interview stage.
              </p>
            </div>

            <div className="relative mx-auto mt-8 w-full max-w-xl">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-white/70">
                      Applications
                    </p>
                    <p className="text-xl sm:text-2xl font-semibold">24</p>
                  </div>
                  <div className="rounded-2xl bg-white/15 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                    +18% this month
                  </div>
                </div>

                <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                  {[
                    { title: "Applied", value: "12" },
                    { title: "Interviews", value: "7" },
                    { title: "Offers", value: "2" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white/10 p-3 sm:p-4 text-center backdrop-blur"
                    >
                      <p className="text-xs sm:text-sm text-white/70">
                        {item.title}
                      </p>
                      <p className="mt-1 text-lg sm:text-2xl font-semibold">
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
                <CardTitle className="text-2xl">Create your account</CardTitle>
                <CardDescription>
                  Start tracking your applications with a clean dashboard.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {error && (
                  <div className="flex items-center justify-center">
                    <p className="text-sm text-red-500">{error}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="h-11 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john.doe@example.com"
                      className="h-11 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="h-11 bg-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-11 w-full bg-violet-600 text-base font-medium hover:bg-violet-700"
                    disabled={loading}
                  >
                    {loading ? "Signing up..." : "Sign up"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="font-medium text-violet-600 hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-xs text-gray-500">
              By creating an account, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
