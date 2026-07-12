import { FileSpreadsheet, Globe, Link2, Mail } from "lucide-react";

const integrations = [
  {
    name: "Gmail",
    icon: Mail,
    description: "Pull application confirmations straight into your board.",
    live: true,
  },
  {
    name: "Chrome Extension",
    icon: Globe,
    description: "Save a listing to your board in one click, from any site.",
    live: true,
  },
  {
    name: "LinkedIn",
    icon: Link2,
    description: "Import a job post's details without retyping them.",
    live: false,
  },
  {
    name: "CSV Import",
    icon: FileSpreadsheet,
    description: "Bring your existing spreadsheet over in a few seconds.",
    live: true,
  },
];

export default function IntegrationsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
            Works with
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fits into the tools you already use
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600">
            Job Tracker doesn't ask you to change how you search — it just keeps
            everything in one place.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col items-center rounded-2xl border border-gray-200/80 bg-gray-50/60 p-6 text-center transition-colors hover:border-violet-200 hover:bg-violet-50/60"
            >
              {!item.live && (
                <span className="absolute right-3 top-3 rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-600">
                  Coming soon
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-gray-400 shadow-sm transition-colors group-hover:text-violet-600">
                <item.icon className="h-6 w-6" />
              </div>

              <p className="mt-4 text-sm font-semibold text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
