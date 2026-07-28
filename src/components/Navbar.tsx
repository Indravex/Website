/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Layers, Radio, HelpCircle, Send } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY <= 40) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 5) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "/services", icon: Layers },
    { name: "About Us", href: "/about-us", icon: Cpu },
    { name: "FAQs", href: "/faqs", icon: HelpCircle },
    { name: "Contact Us", href: "/contact", icon: Send }
  ];

  const navigateTo = (href: string) => {
    setMenuOpen(false);
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: visible || menuOpen ? 0 : -100, opacity: visible || menuOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 pointer-events-none"
        id="navbar-header"
      >
        <div className="max-w-[1320px] mx-auto w-full flex items-center justify-between">
          {/* Brand Logo Identity */}
          <div
            onClick={() => navigateTo("/")}
            className="flex items-center cursor-pointer pointer-events-auto group"
            id="brand-logo"
          >
            <img
              src="/logo.png"
              alt="Indravex Technologies"
              className="h-10 sm:h-12 md:h-14 max-w-[220px] sm:max-w-[300px] md:max-w-[380px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Center Navigation Links (Glass Container) */}
          <div className="hidden md:flex items-center bg-white/40 backdrop-blur-xl border border-white/50 rounded-full px-2 py-1.5 shadow-premium pointer-events-auto" id="center-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.href);
                  }}
                  className="font-sans text-[14px] font-semibold text-primary-navy/85 hover:text-accent-blue px-5 py-2 rounded-full transition-all duration-300 relative group flex items-center gap-2 hover:bg-white/50"
                >
                  <Icon className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action Button Container */}
          <div className="hidden md:flex items-center gap-4 pointer-events-auto" id="cta-container">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/contact");
              }}
              className="group relative flex items-center justify-center px-6 py-3 rounded-full bg-primary-navy hover:bg-accent-blue font-sans text-[13px] font-bold text-white transition-all duration-500 overflow-hidden shadow-premium"
              id="cta-nav-button"
            >
              <span>REQUEST PROPOSAL</span>
            </a>
          </div>

          {/* Mobile Drawer Trigger */}
          <div className="flex md:hidden items-center gap-3 pointer-events-auto" id="mobile-trigger-container">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-11 h-11 rounded-full bg-white/70 border border-primary-navy/15 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 shadow-sm"
              id="mobile-drawer-button"
              aria-label="Toggle Navigation Menu"
            >
              <span className={`w-5 h-0.5 bg-primary-navy transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-primary-navy transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-primary-navy transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>
      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#FAF9F6]/98 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-between px-6 pt-28 pb-8"
            id="mobile-drawer"
          >
            {/* Ambient Background Spotlights */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
              <div className="absolute -top-[10%] -left-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#004BFF]/10 to-transparent blur-[80px]" />
              <div className="absolute -bottom-[10%] -right-[20%] w-[350px] h-[350px] rounded-full bg-gradient-to-bl from-[#C5A880]/10 to-transparent blur-[90px]" />
              {/* Dotted pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "radial-gradient(#0B143E 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}
              />
            </div>

            {/* Menu Navigation Items */}
            <div className="flex flex-col gap-6 my-auto pt-8">
              <span className="font-sans font-bold tracking-[0.2em] text-[9.5px] text-primary-navy/50 uppercase block pl-2">
                Systems Navigation
              </span>
              <nav className="flex flex-col gap-4">
                {navItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isHovered = hoveredIdx === idx;
                  return (
                    <motion.a
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.08, duration: 0.4 }}
                      href={item.href}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(item.href);
                      }}
                      className="flex items-center gap-4 p-4 rounded-[22px] transition-all duration-300 relative group pointer-events-auto cursor-pointer"
                      style={{
                        backgroundColor: isHovered ? 'rgba(246, 242, 232, 0.85)' : 'rgba(246, 242, 232, 0.58)',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.065'/%3E%3C/svg%3E")`,
                        border: isHovered ? '1px solid rgba(0, 75, 255, 0.5)' : '1px solid rgba(180, 200, 230, 0.65)',
                        boxShadow: isHovered
                          ? '0 20px 40px rgba(11, 20, 62, 0.12), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.95), 0 0 15px rgba(0, 75, 255, 0.1)'
                          : '0 12px 30px rgba(11, 20, 62, 0.06), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)',
                        backdropFilter: 'blur(32px) saturate(140%)',
                        WebkitBackdropFilter: 'blur(32px) saturate(140%)',
                      }}
                    >
                      {/* iOS Glass sheen reflection sweep */}
                      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[22px] z-10">
                        <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
                      </div>

                      {/* Radial blue gradient icon container matching AboutUs cards */}
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110 relative z-20"
                        style={{
                          background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.45)',
                          boxShadow: 'inset 0 2.5px 4px rgba(255, 255, 255, 0.4), inset 0 -3px 6px rgba(0, 0, 0, 0.45), 0 6px 16px rgba(0, 75, 255, 0.22)'
                        }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      <div className="flex flex-col relative z-20">
                        <span className="font-serif text-[22px] font-bold text-primary-navy group-hover:text-[#004BFF] transition-colors leading-tight">
                          {item.name}
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="flex flex-col gap-6 w-full pb-4 pointer-events-auto"
            >
              <div className="w-full h-px bg-primary-navy/10" />
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="w-full py-4 rounded-xl bg-primary-navy hover:bg-accent-blue text-white font-sans text-xs font-bold tracking-wider hover:shadow-premium active:scale-[0.99] transition-all block text-center uppercase shadow-premium"
              >
                REQUEST PROPOSAL
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
