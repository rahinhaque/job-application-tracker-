import KanbanBoard from "@/components/Kanban-board";
import { Spinner } from "@/components/ui/spinner";
import { getSession } from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import { Board } from "@/lib/models";
import React, { Suspense } from "react";

const getBoard = async (userId: string) => {
  await connectDB();

  const boardDoc = await Board.findOne({
    userId: userId,
    name: "Job Hunt",
  }).populate({
    path: "columns",
    populate: {
      path: "jobApplications",
    },
  });

  if (!boardDoc) return null;

  return JSON.parse(JSON.stringify(boardDoc));
};

const DashboardPageWrapper = async () => {
  const session = await getSession();

  const board = await getBoard(session?.user?.id || "");

  if (!board) {
    return (
      <div className="min-h-screen bg-white p-6">
        <p className="text-gray-600">No board found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">{board.name}</h1>
          <p className="text-gray-600">Tract your job applications</p>
        </div>
        <KanbanBoard board={board} userId={session?.user?.id || ""} />
      </div>
    </div>
  );
};

const DashboardFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-white">
    <Spinner className="size-10 text-gray-500" />
  </div>
);

const Dashboard = async () => {
  return (
    <Suspense fallback={<DashboardFallback />}>
      <DashboardPageWrapper />
    </Suspense>
  );
};

export default Dashboard;
