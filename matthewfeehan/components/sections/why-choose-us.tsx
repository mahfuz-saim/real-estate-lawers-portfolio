"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Shield,
  Clock,
  Heart,
  Award,
  Users,
  DollarSign,
} from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Clock,
    title: "30+ Years Experience",
    description:
      "Three decades of dedicated legal practice means deep knowledge and proven expertise in estate and real estate law.",
  },
  {
    icon: Heart,
    title: "Compassionate Approach",
    description:
      "We understand that legal matters often arise during life's most challenging moments. We handle every case with empathy.",
  },
  {
    icon: Shield,
    title: "Client-Focused",
    description:
      "Your interests always come first. We take the time to understand your unique situation and tailor our approach accordingly.",
  },
  {
    icon: DollarSign,
    title: "Transparent Fees",
    description:
      "No hidden costs or surprise bills. We provide clear fee estimates upfront so you can make informed decisions.",
  },
  {
    icon: Award,
    title: "Multi-Generational Legacy",
    description:
      "Part of a respected legal family in Edmonton, we carry forward a tradition of excellence spanning generations.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description:
      "As a focused practice, we offer the personal attention and accessibility that larger firms simply cannot match.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-background via-primary/[0.02] to-background overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary">Why Feehan Law</Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground mt-4 leading-tight">
              Why Families{" "}
              <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="text-muted text-lg mt-4">
              When it comes to protecting your family&apos;s future, you deserve
              a lawyer who combines expertise with genuine care.
            </p>
          </div>
        </Reveal>

        {/* Features grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {features.map((feature, i) => (
            <StaggerItem key={feature.title}>
              <motion.div
                className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-secondary/30 transition-all duration-500 group overflow-hidden h-full"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/10 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
