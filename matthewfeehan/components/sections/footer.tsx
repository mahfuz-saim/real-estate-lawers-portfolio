"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Scale,
} from "lucide-react";
import { siteData } from "@/lib/site-data";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { label: "Wills & Estate Planning", href: "#services" },
    { label: "Probate & Administration", href: "#services" },
    { label: "Powers of Attorney", href: "#services" },
    { label: "Personal Directives", href: "#services" },
    { label: "Real Estate Law", href: "#services" },
    { label: "Guardianship", href: "#services" },
  ],
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-dark text-white relative">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary-dark font-bold text-lg">
                  F
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div>
                <span className="block font-bold text-lg">Feehan Law</span>
                <span className="block text-xs text-white/40 tracking-wider uppercase">
                  Est. {siteData.firm.established}
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              {siteData.firm.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-white/30">
              <Scale className="w-3.5 h-3.5" />
              <span>Licensed in Alberta</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/50 hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/50 hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteData.firm.phone}`}
                  className="flex items-center gap-3 text-white/50 hover:text-secondary text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {siteData.firm.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteData.firm.email}`}
                  className="flex items-center gap-3 text-white/50 hover:text-secondary text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {siteData.firm.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    {siteData.firm.address.street}
                    <br />
                    {siteData.firm.address.city},{" "}
                    {siteData.firm.address.province}{" "}
                    {siteData.firm.address.postalCode}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Feehan Law Office. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/30 hover:text-secondary text-xs transition-colors group cursor-pointer"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
