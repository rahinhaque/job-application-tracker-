import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    description: "Everything you need to run an organized search.",
    cta: "Start for free",
    highlighted: false,
    features: [
      "Unlimited job applications",
      "Full Kanban board (Wish List → Offer)",
      "Personal application dashboard",
      "CSV import",
      "Single user",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    cadence: "per month",
    description: "For a faster, more connected search.",
    cta: "Start Pro trial",
    highlighted: true,
    features: [
      "Everything in Free",
      "Chrome extension quick-save",
      "Gmail application syncing",
      "Interview reminders",
      "Custom board columns",
      "Priority support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
            Pricing
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple pricing, no catch
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600">
            Start free, stay free for as long as you want. Upgrade only if you
            want the extras.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-violet-600 via-violet-500 to-indigo-600 text-white shadow-xl"
                  : "border border-gray-200 bg-white text-gray-900"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur">
                  Most popular
                </span>
              )}

              <h3
                className={`text-lg font-semibold ${
                  plan.highlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  plan.highlighted ? "text-white/80" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {plan.cadence}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? "bg-white/20" : "bg-violet-100"
                      }`}
                    >
                      <Check
                        className={`h-3.5 w-3.5 ${
                          plan.highlighted ? "text-white" : "text-violet-600"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm leading-6 ${
                        plan.highlighted ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 h-11 w-full text-base font-medium ${
                  plan.highlighted
                    ? "bg-white text-violet-700 hover:bg-white/90"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          No credit card required for the free plan. Cancel Pro anytime.
        </p>
      </div>
    </section>
  );
}
