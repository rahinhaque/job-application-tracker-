import { Briefcase } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { getSession } from "@/lib/auth/auth";
import LogoutButton from "./LogoutButton";
import MobileMenu from "./mobile-menu";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="border-b border-gray-200 bg-white relative">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 space-x-2 text-xl font-semibold text-pretty text-violet-400"
        >
          <Briefcase />
          <span className="hidden sm:inline">Job Tracker</span>
        </Link>
        
        {/* Mobile Menu */}
        <MobileMenu session={session} logoutAction={<LogoutButton />} />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" className="px-4 py-4">
                  Dashboard
                </Button>
              </Link>
              <Link href="/About">
                <Button variant="ghost" className="px-4 py-4">
                  About
                </Button>
              </Link>
              <Link href="/Contact">
                <Button variant="ghost" className="px-4 py-4">
                  Contact
                </Button>
              </Link>
              <Link href="/Profile">
                <Button variant="ghost" className="px-4 py-4">
                  Profile
                </Button>
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost" className="px-4 py-4 ">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="px-4 py-4 bg-violet-400 hover:bg-violet-400/80 text-white">
                  Start for free
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
