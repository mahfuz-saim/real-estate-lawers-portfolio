"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-primary-dark text-white/90 text-sm hidden lg:block"
        initial={{ y: -40 }}
        animate={{ y: isScrolled ? -40 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteData.firm.phone}`}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {siteData.firm.phone}
            </a>
            <a
              href={`mailto:${siteData.firm.email}`}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              {siteData.firm.email}
            </a>
          </div>
          <span className="text-white/60">{siteData.firm.hours}</span>
        </div>
      </motion.div>

      {/* Main nav */}
      <motion.header
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-500",
          isScrolled
            ? "top-0 glass shadow-lg"
            : "top-0 lg:top-10 bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary-light transition-colors">
                F
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-secondary" />
            </div>
            <div className="hidden sm:block">
              <span
                className={cn(
                  "block font-bold text-lg leading-tight transition-colors",
                  isScrolled ? "text-primary-dark" : "text-white lg:text-primary-dark"
                )}
              >
                Feehan Law
              </span>
              <span
                className={cn(
                  "block text-xs tracking-wider uppercase transition-colors",
                  isScrolled
                    ? "text-muted"
                    : "text-white/70 lg:text-muted"
                )}
              >
                Est. {siteData.firm.established}
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : isScrolled
                    ? "text-foreground/70 hover:text-primary"
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden lg:flex"
              onClick={() => handleNavClick("#contact")}
            >
              Free Consultation
            </Button>
            <button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-foreground hover:bg-primary/5"
                  : "text-white lg:text-foreground hover:bg-white/10 lg:hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-3">
                  <Button
                    className="w-full"
                    onClick={() => handleNavClick("#contact")}
                  >
                    Free Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
