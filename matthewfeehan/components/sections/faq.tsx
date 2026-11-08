"use client";

import React from "react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteData } from "@/lib/site-data";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-primary-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white/80 border border-white/10"
            >
              Common Questions
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mt-4 leading-tight">
              Frequently Asked{" "}
              <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
              Get answers to common questions about our services and the legal
              process.
            </p>
          </div>
        </Reveal>

        {/* FAQ list */}
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-4">
            {siteData.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 overflow-hidden data-[state=open]:bg-white/[0.08]"
              >
                <AccordionTrigger className="text-white/90 hover:text-white text-left text-base lg:text-lg [&>svg]:text-white/30">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {/* Additional CTA */}
        <Reveal delay={0.2}>
          <div className="text-center mt-12">
            <p className="text-white/40 text-sm">
              Have a question not listed here?{" "}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-secondary hover:text-secondary-light transition-colors underline underline-offset-4"
              >
                Contact us directly
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
