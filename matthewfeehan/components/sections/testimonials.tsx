"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { AnimatedGridBackground } from "@/components/ui/magic-elements";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonials = siteData.testimonials;

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <AnimatedGridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary">Client Testimonials</Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground mt-4 leading-tight">
              What Our{" "}
              <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-muted text-lg mt-4">
              Hear from families and individuals we&apos;ve had the privilege of
              serving across Alberta.
            </p>
          </div>
        </Reveal>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Large quote icon */}
            <div className="absolute -top-6 left-8 z-0">
              <Quote className="w-24 h-24 text-primary/5" />
            </div>

            {/* Card */}
            <div className="relative bg-card rounded-3xl border border-border/50 shadow-xl p-8 lg:p-12 min-h-[320px] overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  className="relative z-10"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-lg lg:text-xl text-foreground/80 leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[active].text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {testimonials[active].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground">
                        {testimonials[active].name}
                      </div>
                      <div className="text-sm text-muted">
                        {testimonials[active].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/5 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full" />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > active ? 1 : -1);
                      setActive(i);
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 cursor-pointer",
                      i === active
                        ? "w-8 bg-secondary"
                        : "w-2 bg-border hover:bg-muted-foreground"
                    )}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
