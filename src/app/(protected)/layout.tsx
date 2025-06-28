"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   const token = storageUtil.get(ACCESS_TOKEN);
  //   if (!token) {
  //     router.push("/login");
  //   }
  // }, [router]);

  return (
    <main className="min-h-[100vh] h-full w-full relative">
      <div className="w-full h-full">{children}</div>
    </main>
  );
}
