"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { createJobApplication } from "@/lib/actions/job-application"; // ✅ named import

interface CreateJobApplicationDialogueProps {
  columnId: string;
  boardId: string;
}

const fieldClass =
  "rounded-lg border-gray-200 placeholder:text-gray-400 focus-visible:border-violet-500 focus-visible:ring-2 focus-visible:ring-violet-500/30";

export default function CreateJobApplicationDialogue({
  columnId,
  boardId,
}: CreateJobApplicationDialogueProps) {
  const [open, setOpen] = useState<boolean>(false);

  const INITIAL_FORM_DATA = {
    company: "",
    position: "",
    location: "",
    notes: "",
    salary: "",
    jobUrl: "",
    tags: "",
    description: "",
  };

  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await createJobApplication({
        ...formData,
        columnId,
        boardId,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0),
      });

      if (!result.error) {
        setOpen(false);
        setFormData(INITIAL_FORM_DATA);
      } else {
        console.error(result.error, "Failed to create job");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="outline">
          <Plus /> Add Job
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Job Application</DialogTitle>
          <DialogDescription>Track a new job application</DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-gray-700"
                >
                  Company *
                </label>
                <Input
                  id="company"
                  required
                  className={fieldClass}
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="position"
                  className="text-sm font-medium text-gray-700"
                >
                  Position *
                </label>
                <Input
                  id="position"
                  required
                  className={fieldClass}
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="location"
                  className="text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <Input
                  id="location"
                  className={fieldClass}
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="salary"
                  className="text-sm font-medium text-gray-700"
                >
                  Salary
                </label>
                <Input
                  id="salary"
                  placeholder="e.g., $100k - $150k"
                  className={fieldClass}
                  value={formData.salary}
                  onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="jobUrl"
                className="text-sm font-medium text-gray-700"
              >
                Job URL
              </label>
              <Input
                id="jobUrl"
                placeholder="https://example.com"
                className={fieldClass}
                value={formData.jobUrl}
                onChange={(e) =>
                  setFormData({ ...formData, jobUrl: e.target.value })
                }
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="tags"
                className="text-sm font-medium text-gray-700"
              >
                Tags (comma separated)
              </label>
              <Input
                id="tags"
                placeholder="React, Angular, Vue, Svelte"
                className={fieldClass}
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Brief description about the role..."
                className={`min-h-[80px] resize-none ${fieldClass}`}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="notes"
                className="text-sm font-medium text-gray-700"
              >
                Notes
              </label>
              <Textarea
                id="notes"
                placeholder="Whatever you want to write..."
                className={`min-h-[80px] resize-none ${fieldClass}`}
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <DialogClose asChild>
              <Button
                onClick={() => setOpen(false)}
                type="button"
                variant="outline"
                className="h-10 rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="h-10 rounded-lg bg-violet-600 font-medium text-white hover:bg-violet-700"
            >
              Add Application
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
