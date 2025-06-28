// components/AppHydrationWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import Loader from "./loader";
import LoadingScreen from "./LoadingScreen";

export default function AppHydrationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated)
    return (
      <div className="h-[100dvh] w-full flex justify-center items-center">
        <div className="load-row">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );

  return <>{children}</>;
}
