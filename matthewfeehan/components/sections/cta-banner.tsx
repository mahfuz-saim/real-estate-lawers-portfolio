"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";

export function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={siteData.images.cta}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
                Ready to Protect{" "}
                <span className="text-secondary">Your Legacy?</span>
              </h2>
              <p className="text-white/60 text-lg max-w-lg">
                Take the first step toward securing your family&apos;s future.
                Schedule your free consultation with our experienced legal team
                today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="xl"
                  variant="secondary"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                  onClick={() =>
                    window.open(`tel:${siteData.firm.phone}`)
                  }
                >
                  Call {siteData.firm.phone}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "30+", label: "Years Experience" },
                  { number: "Free", label: "Initial Consultation" },
                  { number: "5000+", label: "Clients Served" },
                  { number: "24hr", label: "Response Time" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="text-2xl font-extrabold text-secondary">
                      {stat.number}
                    </div>
                    <div className="text-white/50 text-sm mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
