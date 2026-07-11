import { Briefcase } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { getSession } from "@/lib/auth/auth";
import LogoutButton from "./LogoutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Navbar = async () => {
  const session = await getSession();
  // console.log("Session in Navbar:", session);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        {session?.user ? (
          <>
            <Link
              href="/"
              className="flex items-center gap-2 space-x-2 text-xl font-semibold text-pretty text-violet-400"
            >
              <Briefcase />
              Job Tracker
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/All-Jobs">
                <Button variant="ghost" className="px-4 py-4">
                  All Jobs
                </Button>
              </Link>
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
              {/* <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-violet-400 text-white">
                        {session.user.name[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <div>
                      <p>{session.user.name}</p>
                      <p className="text-sm text-gray-500">
                        {session.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>

                  <DropdownMenuItem>
                    <LogoutButton />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
            </div>
          </>
        ) : (
          <>
            <Link
              href="/"
              className="flex items-center gap-2 space-x-2 text-xl font-semibold text-pretty text-violet-400"
            >
              <Briefcase />
              Job Tracker
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/sign-in">
                <Button variant="ghost" className="px-4 py-4 ">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="px-4 py-4 bg-violet-400 hover:bg-violet-400/80">
                  Start for free
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
