"use client";

import FooterPublic from "@/components/footer-public";
import NavbarPublic from "@/components/navbar-public";
import React from "react";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full w-full relative">
      <NavbarPublic />
      {children}
      <FooterPublic />
    </main>
  );
}
