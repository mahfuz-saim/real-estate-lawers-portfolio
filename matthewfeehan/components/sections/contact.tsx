"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedGridBackground } from "@/components/ui/magic-elements";
import { siteData } from "@/lib/site-data";

const contactMethods = [
  {
    icon: Phone,
    label: "Office Phone",
    value: siteData.firm.phone,
    href: `tel:${siteData.firm.phone}`,
    description: "Main office line",
  },
  {
    icon: Phone,
    label: "Direct Line",
    value: siteData.firm.directLine,
    href: `tel:${siteData.firm.directLine}`,
    description: "Reach Matthew directly",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteData.firm.email,
    href: `mailto:${siteData.firm.email}`,
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: `${siteData.firm.address.street}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      `${siteData.firm.address.street}, ${siteData.firm.address.city}, ${siteData.firm.address.province}`
    )}`,
    description: `${siteData.firm.address.city}, ${siteData.firm.address.province} ${siteData.firm.address.postalCode}`,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <AnimatedGridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary">Get In Touch</Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground mt-4 leading-tight">
              Start With a{" "}
              <span className="text-gradient">Free Consultation</span>
            </h2>
            <p className="text-muted text-lg mt-4">
              Whether you need a will prepared, have questions about probate, or
              are planning a real estate transaction — we&apos;re here to help.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Reveal direction="left">
            <div className="bg-card rounded-3xl border border-border/50 shadow-xl p-8 lg:p-10">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const name = formData.get("name");
                  const email = formData.get("email");
                  const phone = formData.get("phone");
                  const service = formData.get("service");
                  const message = formData.get("message");
                  const subject = encodeURIComponent(
                    `Consultation Request from ${name}`
                  );
                  const body = encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
                  );
                  window.location.href = `mailto:${siteData.firm.email}?subject=${subject}&body=${body}`;
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="(780) 000-0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium mb-2"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option value="">Select a service</option>
                      {siteData.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your situation..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  <Send className="w-4 h-4" />
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-muted text-center">
                  Your information is kept strictly confidential. We typically
                  respond within one business day.
                </p>
              </form>
            </div>
          </Reveal>

          {/* Contact info & map */}
          <div className="space-y-6">
            {/* Contact methods */}
            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {contactMethods.map((method) => (
                <StaggerItem key={method.label}>
                  <a
                    href={method.href}
                    target={method.label === "Office Address" ? "_blank" : undefined}
                    rel={
                      method.label === "Office Address"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-secondary/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors">
                      <method.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm">{method.label}</div>
                      <div className="text-foreground/80 font-medium">
                        {method.value}
                      </div>
                      <div className="text-xs text-muted mt-0.5">
                        {method.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Office hours card */}
            <Reveal delay={0.3}>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-bold">Office Hours</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Monday — Friday</span>
                    <span className="font-medium">9:00 AM — 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Saturday — Sunday</span>
                    <span className="font-medium text-muted">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-muted mt-4">
                  Evening and weekend appointments available by prior
                  arrangement.
                </p>
              </div>
            </Reveal>

            {/* Map embed */}
            <Reveal delay={0.4}>
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg h-[220px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.7!2d-113.5!3d53.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s10160+118+Street+NW+Edmonton+Alberta!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Feehan Law Office Location"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
