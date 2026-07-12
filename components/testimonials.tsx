import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amara Chen",
    role: "Frontend Developer",
    initial: "A",
    color: "bg-violet-600",
    rating: 5,
    quote:
      "I applied to 40+ places last year and lost track of half of them. Job Tracker is the first tool that made my search feel manageable instead of chaotic.",
  },
  {
    name: "Marcus Ibe",
    role: "Product Designer",
    initial: "M",
    color: "bg-fuchsia-500",
    rating: 5,
    quote:
      "The board view alone was worth switching for. I can see exactly which interviews need a follow-up email without digging through my inbox.",
  },
  {
    name: "Priya Nair",
    role: "Data Analyst",
    initial: "P",
    color: "bg-emerald-500",
    rating: 5,
    quote:
      "Went from three spreadsheets to one clean dashboard. Landed an offer six weeks after I started using it, and I genuinely think staying organized helped.",
  },
  {
    name: "Jonah Weiss",
    role: "Backend Engineer",
    initial: "J",
    color: "bg-amber-500",
    rating: 4,
    quote:
      "Simple, fast, and doesn't try to do a hundred things badly. It tracks applications and it does that one job really well.",
  },
  {
    name: "Sofia Reyes",
    role: "UX Researcher",
    initial: "S",
    color: "bg-sky-500",
    rating: 5,
    quote:
      "The stage columns match how a job search actually works. Moving a card to 'Offer' for the first time felt like a real milestone.",
  },
  {
    name: "Devon Clarke",
    role: "New Grad, CS",
    initial: "D",
    color: "bg-indigo-600",
    rating: 5,
    quote:
      "As someone applying to my first job out of school, this took a lot of the anxiety out of the process. I always knew what to do next.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50/80 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
            What people say
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by job seekers everywhere
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2">
            <StarRating rating={5} />
            <span className="text-sm font-medium text-gray-600">
              4.9 out of 5, from 1,200+ reviews
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm"
            >
              <div>
                <StarRating rating={t.rating} />
                <p className="mt-4 text-sm leading-6 text-gray-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${t.color}`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
