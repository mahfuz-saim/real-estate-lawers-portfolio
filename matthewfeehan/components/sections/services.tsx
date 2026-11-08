"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ScrollText,
  Scale,
  Shield,
  Heart,
  Home,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  scroll: ScrollText,
  scale: Scale,
  shield: Shield,
  heart: Heart,
  home: Home,
  users: Users,
};

export function Services() {
  const [activeService, setActiveService] = useState(0);
  const service = siteData.services[activeService];
  const Icon = iconMap[service.icon] || Scale;

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-primary-dark overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white/80 border border-white/10"
            >
              Our Practice Areas
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mt-4 leading-tight">
              Comprehensive{" "}
              <span className="text-secondary">Legal Services</span>
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
              From estate planning to real estate transactions, we provide the
              expert legal guidance you need at every stage of life.
            </p>
          </div>
        </Reveal>

        {/* Services layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Service tabs */}
          <StaggerContainer
            className="lg:col-span-5 space-y-3"
            staggerDelay={0.08}
          >
            {siteData.services.map((s, i) => {
              const SIcon = iconMap[s.icon] || Scale;
              return (
                <StaggerItem key={s.id}>
                  <button
                    onClick={() => setActiveService(i)}
                    className={cn(
                      "w-full text-left p-5 rounded-2xl transition-all duration-300 group cursor-pointer",
                      activeService === i
                        ? "bg-white/10 border border-white/20 shadow-lg"
                        : "hover:bg-white/5 border border-transparent"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                          activeService === i
                            ? "bg-secondary text-primary-dark"
                            : "bg-white/5 text-white/40 group-hover:text-white/60"
                        )}
                      >
                        <SIcon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className={cn(
                            "font-bold transition-colors",
                            activeService === i
                              ? "text-white"
                              : "text-white/70 group-hover:text-white/90"
                          )}
                        >
                          {s.title}
                        </div>
                        <div className="text-xs text-white/40 mt-0.5 truncate">
                          {s.shortDescription}
                        </div>
                      </div>
                      <ArrowRight
                        className={cn(
                          "w-4 h-4 transition-all",
                          activeService === i
                            ? "text-secondary translate-x-0 opacity-100"
                            : "text-white/20 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        )}
                      />
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Service details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/40 text-sm">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <span className="text-white/70 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  variant="secondary"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Discuss Your Needs
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
