"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Phone,
  FileText,
  Handshake,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { AnimatedGridBackground } from "@/components/ui/magic-elements";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Free Consultation",
    description:
      "Contact us by phone or email to schedule your complimentary initial consultation. We'll discuss your needs and how we can help.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Review & Strategy",
    description:
      "We thoroughly review your situation, explain your options, and develop a tailored legal strategy that meets your specific goals.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Expert Execution",
    description:
      "Our experienced team handles all documentation, filings, and legal proceedings with precision and care on your behalf.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Peace of Mind",
    description:
      "Rest assured knowing your legal matters are resolved professionally, with ongoing support whenever you need it.",
  },
];

export function Process() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <AnimatedGridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary">Our Process</Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground mt-4 leading-tight">
              How We{" "}
              <span className="text-gradient">Work Together</span>
            </h2>
            <p className="text-muted text-lg mt-4">
              A straightforward, transparent approach to handling your legal
              matters with care and professionalism.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative group">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-border to-transparent z-0" />
                )}

                <motion.div
                  className="relative bg-card rounded-3xl border border-border/50 p-8 hover:border-secondary/30 hover:shadow-xl transition-all duration-500 z-10 h-full"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Number */}
                  <div className="text-6xl font-extrabold text-primary/5 absolute top-4 right-6">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/10 transition-colors">
                    <step.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="text-center mt-12">
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              Start with Step 1 — It&apos;s Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
