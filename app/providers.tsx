"use client";

import { useEffect } from "react";
import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import("flowbite");
  }, []);

  return <HeroUIProvider>{children}</HeroUIProvider>;
}
