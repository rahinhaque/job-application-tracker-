import { Suspense } from "react";
import Navbar from "@/components/navbar";

function NavbarSkeleton() {
  return <div className="h-16 w-full border-b border-gray-200 bg-white" />;
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>
      <main className="flex-1">{children}</main>
    </>
  );
}
