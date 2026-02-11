"use client";

import clsx from "clsx";
import { useMemo } from "react";
import type { ReactNode } from "react";

interface SparkleTextProps {
  children: ReactNode;
  sparkleCount?: number;
  className?: string;
}

// Pre-generated random values to avoid ESLint purity errors
const DEFAULT_RANDOM_VALUES = [
  0.123456789, 0.234567890, 0.345678901, 0.456789012,
  0.567890123, 0.678901234, 0.789012345, 0.890123456,
  0.901234567, 0.012345678, 0.123456789, 0.234567890,
  0.345678901, 0.456789012, 0.567890123, 0.678901234,
  0.789012345, 0.890123456, 0.901234567, 0.012345678,
  0.123456789, 0.234567890, 0.345678901, 0.456789012,
  0.567890123, 0.678901234, 0.789012345, 0.890123456,
  0.901234567, 0.012345678, 0.123456789, 0.234567890,
];

export default function SparkleText({
  children,
  sparkleCount = 8,
  className,
}: SparkleTextProps) {
  const sparkles = useMemo(() => {
    return Array.from({ length: sparkleCount }, (_, index) => ({
      id: index,
      top: 10 + DEFAULT_RANDOM_VALUES[index * 4 % DEFAULT_RANDOM_VALUES.length] * 80,
      left: 15 + DEFAULT_RANDOM_VALUES[(index * 4 + 1) % DEFAULT_RANDOM_VALUES.length] * 70,
      delay: DEFAULT_RANDOM_VALUES[(index * 4 + 2) % DEFAULT_RANDOM_VALUES.length] * 3.5,
      duration: 2.8 + DEFAULT_RANDOM_VALUES[(index * 4 + 3) % DEFAULT_RANDOM_VALUES.length] * 1.8,
    }));
  }, [sparkleCount]);

  return (
    <span className={clsx("relative inline-block", className)}>
      <span className="shine-text">{children}</span>
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="sparkle"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        />
      ))}
    </span>
  );
}
