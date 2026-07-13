"use server";

import { getSession } from "../auth/auth";
import connectDB from "../db";
import { Board, Column, JobApplication } from "../models";

interface JobApplicationData {
  company: string;
  position: string;
  location: string;
  notes: string;
  salary: string;
  jobUrl: string;
  tags: string[];
  description: string;
  columnId: string;
  boardId: string;
  userId: string;
}

export default async function createJobApplication(data: JobApplicationData) {
  const session = await getSession();

  if (!session?.user)
    return {
      error: "You must be signed in to create a job application.",
    };

  await connectDB();

  const {
    company,
    position,
    location,
    notes,
    salary,
    jobUrl,
    tags,
    description,
    columnId,
    boardId,
    userId,
  } = data;

  if (!company || !position || !columnId || !boardId)
    return { error: "Missing required fields." };

  //Verify board ownership
  const board = await Board.findOne({
    _id: boardId,
    userId: session.user.id,
  });
  if (!board) {
    return { error: "You do not own this board." };
  }

  //veerify the columns belongs to the board.
  const column = await Column.findOne({
    _id: columnId,
    boardId: boardId,
  });
  if (!Column) {
    return { error: "Column does not belong to this board." };
  }

  const maxOrder =
    ((await JobApplication.findOne({ columnId })
      .sort({ order: -1 })
      .select("order")
      .lean()) as { order: number }) || null;

  const jobApplication = await JobApplication.create({
    company,
    position,
    location,
    notes,
    salary,
    jobUrl,
    tags: tags || [],
    description,
    columnId,
    boardId,
    userId: session.user.id,
    status: "applied",
    order: maxOrder ? maxOrder.order + 1 : 0,
  });

  await Column.findOneAndUpdate(columnId, {
    $push: { jobApplications: jobApplication._id },
  });

  return { data: JSON.parse(JSON.stringify(jobApplication)) };
}
