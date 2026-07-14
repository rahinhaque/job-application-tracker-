"use client";

import { useSession } from "@/lib/auth/auth-client";
import { Card, CardContent } from "@/components/ui/card";
import { LogOut, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { data: session, isPending, error } = useSession();
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  }

  if (isPending) {
    return (
      <Card className="rounded-xl border border-gray-200 shadow-sm">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="h-14 w-14 animate-pulse rounded-full bg-gray-200" />
          <div className="space-y-2">
            <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-40 animate-pulse rounded bg-gray-200" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !session?.user) {
    return (
      <Card className="rounded-xl border border-gray-200 shadow-sm">
        <CardContent className="p-6 text-sm text-gray-500">
          Unable to load profile. Please sign in again.
        </CardContent>
      </Card>
    );
  }

  const { user } = session;

  return (
    <Card className="rounded-xl border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name || "User avatar"}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-violet-100"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-lg font-semibold text-violet-700">
              {user.name?.charAt(0).toUpperCase() || (
                <User className="h-6 w-6" />
              )}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-base font-semibold text-gray-900">
              {user.name || "Unnamed User"}
            </h2>
            <p className="flex items-center gap-1 truncate text-sm text-gray-500">
              <Mail className="h-3.5 w-3.5 shrink-0" />
              {user.email}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="text-xs text-gray-400">
            {user.emailVerified ? (
              <span className="inline-flex items-center gap-1 text-green-600">
                Email verified
              </span>
            ) : (
              <span className="text-amber-600">Email not verified</span>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleSignOut}
            className="gap-1.5 text-gray-600 hover:text-red-600"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign out
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
