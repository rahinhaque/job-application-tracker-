"use client";

import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "support@jobtracker.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Main St, City, Country",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message ?? "Failed to send message.");
      }

      setSent(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_35%),linear-gradient(to_bottom_right,_#faf5ff,_#ffffff,_#eef2ff)]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Info panel */}
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
                Stuck on something? Tell us about it.
              </h1>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                Bug reports, feature requests, or just a question about your
                board — a real person on our small team reads every message.
              </p>

              <div className="mt-10 space-y-4">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto mt-8 w-full max-w-xl">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 sm:text-sm">
                      Average response time
                    </p>
                    <p className="text-lg font-semibold sm:text-xl">
                      Under 24 hours
                    </p>
                  </div>
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
                <CardTitle className="text-2xl">Get in touch</CardTitle>
                <CardDescription>
                  Fill out the form and we&apos;ll get back to you by email.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {sent ? (
                  <div className="flex flex-col items-center gap-3 rounded-2xl bg-violet-50 px-6 py-10 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Message sent
                    </h3>
                    <p className="text-sm text-gray-600">
                      Thanks for reaching out — we&apos;ll reply within a day.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-2 h-10"
                      onClick={() => setSent(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
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
                        required
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
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="What's this about?"
                        className="h-11 bg-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us what's going on..."
                        className="min-h-[120px] bg-white"
                        required
                      />
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="h-11 w-full bg-violet-600 text-base font-medium hover:bg-violet-700"
                    >
                      {loading ? "Sending..." : "Send message"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-xs text-gray-500">
              Prefer email? Reach us directly at support@jobtracker.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
