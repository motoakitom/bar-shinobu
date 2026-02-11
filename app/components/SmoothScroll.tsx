"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useLayoutEffect, useState } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(mobile);
    setEnabled(!prefersReducedMotion);
  }, []);

  if (!enabled) {
    return <>{children}</>;
  }

  const options = isMobile
    ? { lerp: 0.12, duration: 0.9 }
    : { lerp: 0.1, duration: 1.5 };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
