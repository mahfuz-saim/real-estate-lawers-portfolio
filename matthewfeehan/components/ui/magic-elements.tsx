"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  className?: string;
}

export function AnimatedGridBackground({ className }: AnimatedBeamProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,95,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,95,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_70%)]" />
    </div>
  );
}

interface FloatingOrbProps {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
}

export function FloatingOrb({
  className,
  color = "var(--color-primary)",
  size = 300,
  delay = 0,
}: FloatingOrbProps) {
  return (
    <div
      className={cn("absolute rounded-full blur-3xl opacity-10 animate-float pointer-events-none", className)}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className={cn("transition-transform duration-300 ease-out", className)}>
      {children}
    </div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
}

export function GradientText({ text, className }: TextRevealProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </span>
  );
}

export function DotPattern({ className }: { className?: string }) {
  return (
    <svg
      className={cn("absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dot-pattern"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
}

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function Marquee({ children, speed = 40, className }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
