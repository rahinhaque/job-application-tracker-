"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function MobileMenu({ session, logoutAction }: { session: any, logoutAction?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden flex items-center">
      <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="px-2">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 flex flex-col bg-white border-b border-gray-200 p-4 shadow-lg animate-in slide-in-from-top-2">
          {session?.user ? (
            <div className="flex flex-col gap-2">
              <Link href="/dashboard" onClick={closeMenu}>
                <Button variant="ghost" className="w-full justify-start py-6 text-lg">
                  Dashboard
                </Button>
              </Link>
              <Link href="/About" onClick={closeMenu}>
                <Button variant="ghost" className="w-full justify-start py-6 text-lg">
                  About
                </Button>
              </Link>
              <Link href="/Contact" onClick={closeMenu}>
                <Button variant="ghost" className="w-full justify-start py-6 text-lg">
                  Contact
                </Button>
              </Link>
              <Link href="/Profile" onClick={closeMenu}>
                <Button variant="ghost" className="w-full justify-start py-6 text-lg">
                  Profile
                </Button>
              </Link>
              <div onClick={closeMenu} className="pt-2 flex justify-center">
                {logoutAction}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link href="/sign-in" onClick={closeMenu}>
                <Button variant="ghost" className="w-full justify-start py-6 text-lg">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up" onClick={closeMenu}>
                <Button className="w-full justify-center py-6 text-lg bg-violet-400 hover:bg-violet-400/80">
                  Start for free
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
