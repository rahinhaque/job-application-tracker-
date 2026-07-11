// components/LogoutButton.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth/auth-client";
import { Button } from "./ui/button";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
          router.refresh();
        },
        onError: () => {
          setIsLoading(false);
        },
      },
    });
  };

  return (
    <Button
      variant="ghost"
      onClick={handleLogout}
      disabled={isLoading}
      className="group flex items-center gap-2 px-4 py-4 text-gray-600 hover:bg-red-50 hover:text-red-600"
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <LogOut className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
      Logout
    </Button>
  );
}
