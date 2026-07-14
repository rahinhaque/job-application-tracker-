import { Column, JobApplication } from "@/lib/models/models.types";
import { Card, CardContent } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { EditIcon, ExternalLink, MoreVertical, Trash2Icon } from "lucide-react";

interface JobApplicationCardProps {
  job: JobApplication;
  columns: Column[];
}

export default function JobApplicationCard({
  job,
  columns,
}: JobApplicationCardProps) {
  return (
    <Card className="gap-0 rounded-xl border border-gray-200 py-0 shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1 space-y-1">
            <h3 className="text-sm font-semibold text-gray-900">
              {job.position}
            </h3>
            <p className="text-sm text-gray-500">{job.company}</p>

            {job.description && (
              <p className="line-clamp-2 text-sm text-gray-600">
                {job.description}
              </p>
            )}

            {job.tags && job.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {job.jobUrl && (
              <a
                href={job.jobUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 pt-1 text-gray-400 transition-colors hover:text-violet-600"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 shrink-0 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem className="gap-2">
                <EditIcon className="h-4 w-4" /> Edit
              </DropdownMenuItem>

              {columns.length > 1 && (
                <>
                  {columns
                    .filter((c) => c._id !== job.columnId)
                    .map((column) => (
                      <DropdownMenuItem key={column._id}>
                        Move to {column.name}
                      </DropdownMenuItem>
                    ))}
                </>
              )}

              <DropdownMenuItem className="gap-2 text-red-600 focus:text-red-600">
                <Trash2Icon className="h-4 w-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}
