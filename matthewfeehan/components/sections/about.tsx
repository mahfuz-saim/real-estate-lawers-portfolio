"use client";

import React from "react";
import { Award, BookOpen, Clock, Users } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { AnimatedGridBackground } from "@/components/ui/magic-elements";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/lib/site-data";

const highlights = [
  {
    icon: Clock,
    title: "30+ Years",
    description: "Dedicated legal practice serving Alberta families",
  },
  {
    icon: Award,
    title: "Alberta Bar 1994",
    description: "Licensed and in good standing for three decades",
  },
  {
    icon: Users,
    title: "Family Legacy",
    description: "Part of a multi-generational legal family in Edmonton",
  },
  {
    icon: BookOpen,
    title: "Specialized Focus",
    description: "Deep expertise in wills, estates, and real estate law",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <AnimatedGridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image composition */}
          <Reveal direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={siteData.images.office}
                  alt="Feehan Law Office"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />

                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-secondary font-bold text-sm uppercase tracking-wider">
                    Est. {siteData.firm.established}
                  </div>
                  <div className="text-white text-2xl font-bold mt-1">
                    Feehan Law Office
                  </div>
                  <div className="text-white/60 text-sm mt-1">
                    Edmonton, Alberta
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 shadow-xl border border-border/50 max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Trusted Counsel</div>
                    <div className="text-xs text-muted">Since 1994</div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-secondary/20 rounded-3xl" />
            </div>
          </Reveal>

          {/* Right: Content */}
          <div className="space-y-8">
            <Reveal>
              <Badge variant="secondary">About Our Practice</Badge>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground mt-4 leading-tight">
                A Legacy of{" "}
                <span className="text-gradient">Trust & Expertise</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-muted text-lg leading-relaxed">
                {siteData.lawyer.bio}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-extrabold text-primary">
                    MF
                  </span>
                </div>
                <div>
                  <div className="font-bold text-lg">
                    {siteData.lawyer.name}
                  </div>
                  <div className="text-muted text-sm">
                    {siteData.lawyer.title}
                  </div>
                  <div className="text-secondary text-xs font-medium mt-0.5">
                    {siteData.lawyer.barAdmission}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Highlights grid */}
            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {highlights.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="p-4 rounded-2xl bg-card border border-border/50 hover:border-secondary/30 hover:shadow-md transition-all duration-300 group">
                    <item.icon className="w-5 h-5 text-secondary mb-2 group-hover:scale-110 transition-transform" />
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-xs text-muted mt-0.5 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
