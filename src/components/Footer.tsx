/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import {
  ShieldCheck,
  Users,
  Award,
  Mail,
  Lock,
  MapPin,
  Phone,
  Clock,
  Linkedin,
  Twitter,
  Github,
  Globe,
  ChevronRight,
  ArrowRight,
  Loader2
} from "lucide-react";
import { submitToWeb3Forms } from "../lib/web3forms";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubbing, setIsSubbing] = useState(false);
  const [subSubmitted, setSubSubmitted] = useState(false);
  const [subError, setSubError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubbing(true);
    setSubError("");

    const res = await submitToWeb3Forms({
      email: newsletterEmail,
      subject: "New Newsletter Subscription",
    });

    setIsSubbing(false);
    if (res.success) {
      setSubSubmitted(true);
      setNewsletterEmail("");
    } else {
      setSubError(res.message || "Failed to subscribe. Please try again.");
    }
  };

  // Reusable card styling elements based on the About Us page premium glass design
  const cardStyle = {
    backgroundColor: 'rgba(246, 242, 232, 0.58)',
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.065'/%3E%3C/svg%3E")`,
    border: '1px solid rgba(180, 200, 230, 0.65)',
    boxShadow: '0 12px 40px rgba(11, 20, 62, 0.08), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)',
    backdropFilter: 'blur(32px) saturate(140%)',
    WebkitBackdropFilter: 'blur(32px) saturate(140%)',
  };

  const iconCircleStyle = {
    background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
    border: '1.5px solid rgba(255, 255, 255, 0.65)',
    boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.45), inset 0 -3px 6px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.8), 0 0 14px rgba(0, 75, 255, 0.35), 0 3px 6px rgba(0, 0, 0, 0.15)'
  };

  return (
    <footer className="relative bg-[#FCFBF9] text-[#0B143E] overflow-hidden" id="footer-section">

      {/* Decorative top border with gold caret pointing up */}
      <div className="relative border-t border-[#D0DDF5] w-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FCFBF9] px-4">
          <div className="w-3.5 h-3.5 rotate-45 border-t border-l border-[#B39262] bg-[#FCFBF9]"></div>
        </div>
      </div>

      {/* Dotted Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#0B143E 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-12 pt-16 md:pt-20 pb-0">

        {/* Upper Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-12 mb-16">

          {/* Column 1: Brand Info & Mini Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            {/* Logo */}
            <div>
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer group w-fit"
              >
                <img
                  src="/logo.png"
                  alt="Indravex Technologies"
                  className="h-14 sm:h-16 md:h-20 max-w-[280px] sm:max-w-[380px] md:max-w-[480px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="font-sans text-[13.5px] sm:text-[14px] text-[#1E293B] leading-relaxed font-normal mt-5 max-w-sm">
                Engineering digital intelligence for a smarter tomorrow. We design, build and scale technology solutions that drive real business impact.
              </p>
            </div>

            {/* Benefit Mini Cards */}
            <div className="flex flex-col gap-4 w-full max-w-md lg:max-w-sm">
              {[
                { Icon: ShieldCheck, title: "Trusted by Global Clients", desc: "Delivering excellence across domains and industries." },
                { Icon: Users, title: "Innovation First", desc: "AI-powered solutions built for the future." },
                { Icon: Award, title: "Quality Assured", desc: "Industry best practices with measurable results." }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 rounded-2xl p-3.5 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-0.5"
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(246, 242, 232, 0.72)';
                    e.currentTarget.style.border = '1px solid rgba(0, 75, 255, 0.5)';
                    e.currentTarget.style.boxShadow = '0 24px 48px rgba(11, 20, 62, 0.14), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.95), 0 0 20px rgba(0, 75, 255, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(246, 242, 232, 0.58)';
                    e.currentTarget.style.border = '1px solid rgba(180, 200, 230, 0.65)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(11, 20, 62, 0.08), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)';
                  }}
                >
                  {/* Sheen sweep */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl z-10">
                    <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
                  </div>

                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110 relative z-20"
                    style={iconCircleStyle}
                  >
                    <card.Icon className="w-5 h-5" />
                  </div>
                  <div className="relative z-20">
                    <h4 className="font-sans text-[13px] sm:text-[13.5px] font-bold text-[#0B143E] leading-tight">
                      {card.title}
                    </h4>
                    <p className="font-sans text-[11.5px] sm:text-[12px] text-[#334155] leading-tight mt-0.5 font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columns 2-5: Link Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-3 xl:gap-6 pt-2">
            {/* Services */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="w-8 h-[1.5px] bg-[#A67E4E] mb-2.5"></div>
                <h3 className="font-serif font-extrabold text-[14px] sm:text-[15px] text-[#0B143E] tracking-tight">Services</h3>
              </div>
              <ul className="flex flex-col gap-3 text-[12px] sm:text-[13px] text-[#1E293B] font-medium">
                {["Web Development", "Mobile App Development", "Custom Software Development", "AI & Automation Solutions", "Digital Marketing", "IT Staffing Solutions"].map((link) => (
                  <li key={link} className="flex items-center gap-1 hover:text-[#0000FF] hover:underline decoration-1 transition-colors cursor-pointer group">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0000FF] shrink-0 transform group-hover:translate-x-0.5 transition-transform" />
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="w-8 h-[1.5px] bg-[#A67E4E] mb-2.5"></div>
                <h3 className="font-serif font-extrabold text-[14px] sm:text-[15px] text-[#0B143E] tracking-tight">Solutions</h3>
              </div>
              <ul className="flex flex-col gap-3 text-[12px] sm:text-[13px] text-[#1E293B] font-medium">
                {["Web Development", "Enterprise Solutions", "AI & ML Solutions", "Data Engineering", "DevOps & Integration", "IT Staffing Solutions"].map((link) => (
                  <li key={link} className="flex items-center gap-1 hover:text-[#0000FF] hover:underline decoration-1 transition-colors cursor-pointer group">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0000FF] shrink-0 transform group-hover:translate-x-0.5 transition-transform" />
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="w-8 h-[1.5px] bg-[#A67E4E] mb-2.5"></div>
                <h3 className="font-serif font-extrabold text-[14px] sm:text-[15px] text-[#0B143E] tracking-tight">Company</h3>
              </div>
              <ul className="flex flex-col gap-3 text-[12px] sm:text-[13px] text-[#1E293B] font-medium">
                {["About Us", "Our Work", "Careers", "Leadership", "Our Process", "Contact Us"].map((link) => (
                  <li key={link} className="flex items-center gap-1 hover:text-[#0000FF] hover:underline decoration-1 transition-colors cursor-pointer group">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0000FF] shrink-0 transform group-hover:translate-x-0.5 transition-transform" />
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="w-8 h-[1.5px] bg-[#A67E4E] mb-2.5"></div>
                <h3 className="font-serif font-extrabold text-[14px] sm:text-[15px] text-[#0B143E] tracking-tight">Resources</h3>
              </div>
              <ul className="flex flex-col gap-3 text-[12px] sm:text-[13px] text-[#1E293B] font-medium">
                {["Blog", "Case Studies", "Whitepapers", "FAQs", "Insights", "News & Updates"].map((link) => (
                  <li key={link} className="flex items-center gap-1 hover:text-[#0000FF] hover:underline decoration-1 transition-colors cursor-pointer group">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0000FF] shrink-0 transform group-hover:translate-x-0.5 transition-transform" />
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 6: Stay Updated Card */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end w-full">
            <div
              className="w-full max-w-md lg:max-w-sm rounded-[24px] p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden group cursor-pointer transition-all duration-500"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(246, 242, 232, 0.72)';
                e.currentTarget.style.border = '1px solid rgba(0, 75, 255, 0.5)';
                e.currentTarget.style.boxShadow = '0 24px 48px rgba(11, 20, 62, 0.14), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.95), 0 0 20px rgba(0, 75, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(246, 242, 232, 0.58)';
                e.currentTarget.style.border = '1px solid rgba(180, 200, 230, 0.65)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(11, 20, 62, 0.08), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)';
              }}
            >
              {/* Sheen sweep */}
              <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[24px] z-10">
                <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
              </div>

              {/* Header with Mail Icon & Title */}
              <div className="flex items-center gap-3 relative z-20">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110"
                  style={iconCircleStyle}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-extrabold text-lg text-[#0B143E] relative">
                    Stay Updated
                    <span className="absolute bottom-0 left-0 w-8 h-[1.5px] bg-[#A67E4E] translate-y-1"></span>
                  </h3>
                </div>
              </div>

              <p className="font-sans text-[13px] text-[#1E293B] leading-relaxed font-medium relative z-20">
                Subscribe to our newsletter for insights, trends and technology updates straight to your inbox.
              </p>

              {/* Form Input & Button */}
              {subSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center relative z-20">
                  <p className="font-sans text-xs text-emerald-800 font-bold">Subscribed Successfully!</p>
                  <p className="font-sans text-[11px] text-emerald-600 mt-1">Thank you for subscribing to our newsletter.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3 relative z-20">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-white border border-[#C5A880] rounded-full text-xs text-[#0B143E] focus:outline-none focus:border-[#0000FF] focus:ring-1 focus:ring-[#0000FF] transition-colors placeholder:text-[#475569] font-medium"
                  />

                  {subError && (
                    <p className="text-red-600 text-[11px] font-semibold">{subError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubbing}
                    className="w-full bg-[#0B143E] text-white py-3.5 px-6 rounded-full font-sans font-bold text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-[#0B143E]/95 disabled:opacity-70 transition-colors cursor-pointer group"
                  >
                    {isSubbing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#C5A880]" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe Now</span>
                        <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Privacy Warning */}
              <div className="flex items-center gap-2 text-[11px] text-[#334155] font-semibold relative z-20">
                <Lock className="w-3.5 h-3.5 text-[#A67E4E] shrink-0" />
                <span>We respect your privacy. Unsubscribe anytime.</span>
              </div>

            </div>
          </div>

        </div>

        {/* Horizontal Contact Info Strip */}
        <div
          className="rounded-[24px] p-6 mb-16 relative overflow-hidden group cursor-pointer transition-all duration-500"
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(246, 242, 232, 0.72)';
            e.currentTarget.style.border = '1px solid rgba(0, 75, 255, 0.5)';
            e.currentTarget.style.boxShadow = '0 24px 48px rgba(11, 20, 62, 0.14), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.95), 0 0 20px rgba(0, 75, 255, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(246, 242, 232, 0.58)';
            e.currentTarget.style.border = '1px solid rgba(180, 200, 230, 0.65)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(11, 20, 62, 0.08), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)';
          }}
        >
          {/* Sheen sweep */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[24px] z-10">
            <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
          </div>

          {/* Grid Layout: Stacks on mobile, 2 columns on tablet, 4 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 md:gap-x-8 md:gap-y-6 lg:divide-x divide-[#D0DDF5] relative z-20">

            {/* Info 1 */}
            <div className="flex items-center gap-4 lg:px-4 md:pb-2 lg:pb-0 first:pl-0">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110"
                style={iconCircleStyle}
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-sans text-[11px] font-extrabold text-[#475569] uppercase tracking-wider">Our Location</h4>
                <p className="font-sans text-[13px] sm:text-[13.5px] font-bold text-[#0B143E] mt-0.5">Pune, Maharashtra, India</p>
              </div>
            </div>

            {/* Info 2 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 lg:px-6 md:pb-2 lg:pb-0 lg:border-l-0">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110"
                style={iconCircleStyle}
              >
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-sans text-[11px] font-extrabold text-[#475569] uppercase tracking-wider">Call Us</h4>
                <p className="font-sans text-[13px] sm:text-[13.5px] font-bold text-[#0B143E] mt-0.5">+91-7666506689</p>
              </div>
            </div>

            {/* Info 3 */}
            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-6 md:pt-2 lg:pb-0">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110"
                style={iconCircleStyle}
              >
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-sans text-[11px] font-extrabold text-[#475569] uppercase tracking-wider">Email Us</h4>
                <p className="font-sans text-[13px] sm:text-[11.5px] font-bold text-[#0B143E] mt-0.5">indravextechnologies@gmail.com</p>
              </div>
            </div>

            {/* Info 4 */}
            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:pl-6 md:pt-2 lg:pb-0">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110"
                style={iconCircleStyle}
              >
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-sans text-[11px] font-extrabold text-[#475569] uppercase tracking-wider">Working Hours</h4>
                <p className="font-sans text-[13px] sm:text-[13.5px] font-bold text-[#0B143E] mt-0.5 font-sans">Mon - Sat : 9:00 AM - 7:00 PM</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Dark Navy Bar with Elegant Wave Gradients */}
      <div className="relative bg-[#0B143E] text-white overflow-hidden py-8">

        {/* SVG/CSS Wavy Background Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80C120 70 240 40 360 45C480 50 600 90 720 95C840 100 960 70 1080 55C1200 40 1320 40 1440 50V120H0V80Z" fill="url(#grad1)" />
            <path d="M0 95C150 90 300 70 450 75C600 80 750 110 900 110C1050 110 1200 90 1350 85C1380 84 1410 84 1440 85V120H0V95Z" fill="url(#grad2)" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C5A880" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0000FF" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0000FF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#C5A880" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          {/* Logo and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <img
              src="/logo.png"
              alt="Indravex Logo"
              className="h-7 sm:h-8 max-w-[200px] sm:max-w-[240px] w-auto object-contain shrink-0 brightness-0 invert"
            />
            <span className="font-sans text-[12px] sm:text-[12.5px] text-white/95 font-medium">
              © {currentYear} Indravex Technologies. All rights reserved.
            </span>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-sans text-[12px] sm:text-[12.5px] text-white/95 font-medium">
            <span className="hover:text-white/80 cursor-pointer transition-colors hover:underline">Privacy Policy</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="hover:text-white/80 cursor-pointer transition-colors hover:underline">Terms of Service</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="hover:text-white/80 cursor-pointer transition-colors hover:underline">Cookie Policy</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-sans text-[11px] sm:text-[11.5px] font-bold text-[#C5A880] uppercase tracking-wider mr-0 sm:mr-2">Follow Us</span>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Github, link: "#" },
                { icon: Globe, link: "#" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white/90 hover:text-white hover:border-[#C5A880] hover:shadow-[0_0_10px_rgba(197,168,128,0.4)] transition-all duration-300"
                >
                  <item.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
}
