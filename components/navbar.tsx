import { Briefcase } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 space-x-2 text-xl font-semibold text-pretty text-violet-400"
        >
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="ghost" className="px-4 py-4 ">Login</Button>
          </Link>
          <Link href="/sign-up">
            <Button className="px-4 py-4 bg-violet-400 hover:bg-violet-400/80">Start for free</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
