"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Phone, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FloatingOrb } from "@/components/ui/magic-elements";
import { siteData } from "@/lib/site-data";
import { CountUp } from "@/components/motion/reveal";

export function Hero() {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grain-overlay" />

      {/* Floating orbs */}
      <FloatingOrb
        className="top-20 -left-20"
        color="rgba(201,169,110,0.3)"
        size={500}
        delay={0}
      />
      <FloatingOrb
        className="bottom-20 -right-20"
        color="rgba(42,90,143,0.3)"
        size={400}
        delay={2}
      />
      <FloatingOrb
        className="top-1/2 left-1/3"
        color="rgba(201,169,110,0.15)"
        size={300}
        delay={4}
      />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge
                variant="secondary"
                className="bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm"
              >
                <Scale className="w-3.5 h-3.5 mr-1.5" />
                Trusted Legal Counsel Since {siteData.firm.established}
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Protecting What{" "}
              <span className="relative inline-block">
                Matters
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                />
              </span>
              <br />
              <span className="text-secondary-light">Most to You</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Expert legal services in wills, estate planning, probate, and real
              estate law. Serving families across Alberta with compassion and
              integrity.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button
                size="xl"
                variant="secondary"
                onClick={() => handleScrollTo("contact")}
                className="group"
              >
                Book Free Consultation
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                onClick={() => window.open(`tel:${siteData.firm.phone}`)}
              >
                <Phone className="w-4 h-4" />
                {siteData.firm.phone}
              </Button>
            </motion.div>
          </div>

          {/* Right side: Stats card */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              {/* Main stats card */}
              <div className="glass-dark rounded-3xl p-8 space-y-6">
                <div className="text-white/60 text-sm font-medium uppercase tracking-wider">
                  Why Families Trust Us
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      value: 30,
                      suffix: "+",
                      label: "Years of\nExperience",
                    },
                    {
                      value: 5000,
                      suffix: "+",
                      label: "Clients\nServed",
                    },
                    {
                      value: 100,
                      suffix: "%",
                      label: "Dedicated\nApproach",
                    },
                    {
                      value: 3,
                      suffix: " Gen",
                      label: "Family\nLegacy",
                    },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <div className="text-3xl font-extrabold text-secondary">
                        <CountUp
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={2}
                        />
                      </div>
                      <div className="text-white/50 text-xs mt-1 whitespace-pre-line leading-snug">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Trust indicators */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-white/40 text-xs">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full bg-gradient-to-br from-secondary to-secondary-light border-2 border-primary-dark flex items-center justify-center text-[10px] font-bold text-primary-dark"
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span>Trusted by hundreds of Alberta families</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-secondary text-primary-dark rounded-2xl px-4 py-3 shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="text-sm font-bold">Free</div>
                <div className="text-xs opacity-80">Consultation</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={() => handleScrollTo("about")}
            className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-xs uppercase tracking-widest">
              Scroll Down
            </span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
