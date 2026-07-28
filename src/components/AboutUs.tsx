import { useState, useEffect } from "react";
import { BarChart3, Users, Globe, Calendar, Mail, Phone, MapPin, Lightbulb, ShieldCheck, Lock } from "lucide-react";
import Separator from "./Separator";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);

  useEffect(() => {
    const section = document.getElementById("about-us");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasScrolledIntoView(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="relative z-[25] pt-16 pb-32 px-4 sm:px-6 md:px-12 bg-transparent"
      id="about-us"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes loopGlare {
          0% { left: -150%; }
          30% { left: 150%; }
          100% { left: 150%; }
        }
        .animate-loop-glare {
          position: absolute;
          top: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.28), transparent);
          transform: skewX(-12deg);
          animation: loopGlare 6.5s infinite ease-in-out;
        }
      `}} />
      {/* Background glowing spotlights & matrix pattern for glassy refraction */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: 'radial-gradient(rgba(0, 75, 255, 0.08) 1.25px, transparent 1.25px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Glowing colorful spotlights behind the cards */}
        <div className="absolute top-[20%] left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#004BFF]/12 to-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-purple-500/10 to-[#004BFF]/8 blur-[140px]" />
      </div>
      {/* Top-Left Grooved Dot Grid */}
      <div className="absolute top-12 left-12 w-28 h-24 opacity-60 pointer-events-none hidden md:block select-none">
        {/* White shadow dots */}
        <div
          className="absolute inset-0 translate-x-[1.2px] translate-y-[1.2px]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,1) 2.2px, transparent 2.2px)",
            backgroundSize: "14px 14px",
          }}
        />
        {/* Dark blue dots */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#001D80 2px, transparent 2px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      {/* Bottom-Left Grooved Dot Grid */}
      <div className="absolute bottom-12 left-6 w-32 h-28 opacity-55 pointer-events-none hidden md:block select-none">
        {/* White shadow dots */}
        <div
          className="absolute inset-0 translate-x-[1.2px] translate-y-[1.2px]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,1) 2.2px, transparent 2.2px)",
            backgroundSize: "14px 14px",
          }}
        />
        {/* Dark blue dots */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#001D80 2px, transparent 2px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      {/* Top-Right 3D Grooved Orbit Curves */}
      <svg
        className="absolute top-0 right-0 w-[420px] h-[420px] opacity-60 pointer-events-none hidden lg:block select-none"
        viewBox="0 0 420 420"
        fill="none"
      >
        {/* Outer Orbit (Dashed) */}
        {/* White shadow */}
        <circle cx="420" cy="0" r="320" stroke="rgba(255,255,255,1)" strokeWidth="2.2" strokeDasharray="1 6" strokeLinecap="round" transform="translate(1.2, 1.2)" />
        {/* Dark blue line */}
        <circle cx="420" cy="0" r="320" stroke="#001D80" strokeWidth="1.8" strokeDasharray="1 6" strokeLinecap="round" />

        {/* Inner Orbit (Solid Blue) */}
        {/* White shadow */}
        <circle cx="420" cy="0" r="220" stroke="rgba(255,255,255,1)" strokeWidth="2" transform="translate(1, 1)" />
        {/* Blue line */}
        <circle cx="420" cy="0" r="220" stroke="#004BFF" strokeWidth="1.2" />

        {/* Nodes */}
        {/* Node 1 */}
        <circle cx="170.2" cy="201.2" r="6" fill="rgba(255,255,255,1)" />
        <circle cx="169" cy="200" r="4.5" fill="#001D80" />

        {/* Node 2 */}
        <circle cx="298.2" cy="301.2" r="6" fill="rgba(255,255,255,1)" />
        <circle cx="297" cy="300" r="4.5" fill="#001D80" />
      </svg>

      <div className="max-w-[1320px] mx-auto w-full relative z-10">
        {/* Section Heading */}
        <div className={`text-center mb-16 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${hasScrolledIntoView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-6 scale-98"
          }`}>
          <div className="flex items-center justify-center gap-4 mb-5">
            {/* Left Dots */}
            <div className="flex items-center gap-1.5 opacity-60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B1C66] shadow-[0_1px_1px_rgba(255,255,255,0.9)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#004BFF]/80 shadow-[0_1px_1px_rgba(255,255,255,0.9)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B1C66] shadow-[0_1px_1px_rgba(255,255,255,0.9)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#004BFF]/80 shadow-[0_1px_1px_rgba(255,255,255,0.9)]" />
            </div>

            <span
              className="font-sans text-[11px] sm:text-[12px] font-bold text-[#004BFF] tracking-[0.22em] uppercase block"
              style={{
                textShadow: "0 1px 1px rgba(255, 255, 255, 0.9), 0 -0.5px 0.5px rgba(0, 0, 0, 0.1)",
              }}
            >
              ABOUT US
            </span>

            {/* Right Dots */}
            <div className="flex items-center gap-1.5 opacity-60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004BFF]/80 shadow-[0_1px_1px_rgba(255,255,255,0.9)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B1C66] shadow-[0_1px_1px_rgba(255,255,255,0.9)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#004BFF]/80 shadow-[0_1px_1px_rgba(255,255,255,0.9)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B1C66] shadow-[0_1px_1px_rgba(255,255,255,0.9)]" />
            </div>
          </div>

          <h2
            className="font-serif text-[38px] sm:text-[49px] md:text-[60px] leading-[1.1] font-semibold tracking-tight mb-8"
            style={{
              textShadow: "0 2px 4px rgba(11, 20, 62, 0.08), 0 6px 16px rgba(11, 20, 62, 0.04)",
            }}
          >
            <span
              className="bg-gradient-to-br from-[#2A2B36] via-[#050508] to-[#1B1C24] bg-clip-text text-transparent font-serif font-semibold"
              style={{
                textShadow: "0 1.5px 3px rgba(0, 0, 0, 0.28), 0 3px 8px rgba(0, 0, 0, 0.12)",
              }}
            >
              Indravex
            </span>{" "}
            <span
              className="font-serif font-semibold bg-gradient-to-br from-[#003CE5] to-[#001D80] bg-clip-text text-transparent tracking-tight inline-block ml-1"
              style={{
                textShadow: "0 1.5px 3px rgba(0, 29, 128, 0.25), 0 3px 8px rgba(0, 29, 128, 0.12)",
              }}
            >
              Technologies
            </span>
          </h2>

          <p
            className="font-sans text-[14.5px] sm:text-[16.5px] text-[#1C1D24] leading-[1.65] font-normal max-w-[600px] mx-auto"
            style={{
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.12)",
            }}
          >
            Engineering Digital Intelligence for a Smarter Tomorrow
          </p>
        </div>

        {/* First Row of Cards */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-6 w-full z-10 mb-8">

          {/* Card 1: Who We Are (Dark Blue Gradient, Carbon Pattern) */}
          <div
            className={`w-full lg:w-[38%] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 min-h-[200px] transform ${hasScrolledIntoView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-12 scale-97"
              } delay-[150ms]`}
            style={{
              backgroundColor: '#0B133E',
              boxShadow: '0 8px 24px rgba(11, 20, 62, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <div className="relative z-10 flex items-start gap-3.5 mb-4">
              {/* Flat Icon Container */}
              <div className="w-10.5 h-10.5 rounded-[12px] bg-white/10 flex items-center justify-center text-white shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3
                  className="font-sans text-[18px] font-bold text-white tracking-tight mb-1"
                >
                  Who We Are
                </h3>
                <div className="w-8 h-[2px] bg-white/30 rounded-full" />
              </div>
            </div>

            <p
              className="font-sans text-[12.5px] sm:text-[13px] text-white/90 leading-[1.55] relative z-10 mt-auto font-medium"
            >
              We are a forward-thinking technology company on a mission to bridge traditional
              engineering with the power of AI. We believe in creating intelligent, scalable, and
              future-ready solutions that drive real-world impact.
            </p>
          </div>

          {/* Card 2: 150+ Engineers */}
          <div
            className={`w-full lg:flex-1 rounded-[24px] py-7 px-5 sm:px-6 flex flex-col items-center text-center transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 cursor-pointer relative z-10 group min-h-[200px] transform ${hasScrolledIntoView ? "opacity-100 translate-y-0 translate-x-0 scale-100" : "opacity-0 translate-y-12 -translate-x-3 scale-97"
              } delay-[300ms]`}
            style={{
              backgroundColor: 'rgba(246, 242, 232, 0.58)',
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.065'/%3E%3C/svg%3E")`,
              border: '1px solid rgba(180, 200, 230, 0.65)',
              boxShadow: '0 12px 40px rgba(11, 20, 62, 0.08), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)',
              backdropFilter: 'blur(32px) saturate(140%)',
              WebkitBackdropFilter: 'blur(32px) saturate(140%)',
            }}
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
            {/* iOS Glass sheen reflection sweep */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[24px] z-10">
              <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
            </div>

            {/* Grooved Shiny Circle Icon */}
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.65)',
                boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.45), inset 0 -3px 6px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.8), 0 0 14px rgba(0, 75, 255, 0.35), 0 3px 6px rgba(0, 0, 0, 0.15)'
              }}
            >
              <Users className="w-5 h-5" />
            </div>

            <span
              className="font-sans text-[30px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight bg-gradient-to-br from-[#0B143E] via-[#050508] to-[#1C1D24] bg-clip-text text-transparent mt-4 leading-none"
              style={{
                textShadow: '0 2px 4px rgba(11, 20, 62, 0.15), 0 4px 10px rgba(11, 20, 62, 0.08)'
              }}
            >
              15+
            </span>
            <span
              className="font-sans text-[10px] sm:text-[11px] font-bold text-[#003CE5] tracking-[0.18em] uppercase mt-2"
              style={{
                textShadow: '0 1px 2px rgba(0, 75, 255, 0.25), 0 2px 4px rgba(0, 75, 255, 0.12)'
              }}
            >
              Engineers
            </span>
          </div>

          {/* Card 3: 500+ Projects */}
          <div
            className={`w-full lg:flex-1 rounded-[24px] py-7 px-5 sm:px-6 flex flex-col items-center text-center transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 cursor-pointer relative z-10 group min-h-[200px] transform ${hasScrolledIntoView ? "opacity-100 translate-y-0 translate-x-0 scale-100" : "opacity-0 translate-y-12 translate-x-3 scale-97"
              } delay-[450ms]`}
            style={{
              backgroundColor: 'rgba(246, 242, 232, 0.58)',
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.065'/%3E%3C/svg%3E")`,
              border: '1px solid rgba(180, 200, 230, 0.65)',
              boxShadow: '0 12px 40px rgba(11, 20, 62, 0.08), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)',
              backdropFilter: 'blur(32px) saturate(140%)',
              WebkitBackdropFilter: 'blur(32px) saturate(140%)',
            }}
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
            {/* iOS Glass sheen reflection sweep */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[24px] z-10">
              <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
            </div>

            {/* Grooved Shiny Circle Icon */}
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.65)',
                boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.45), inset 0 -3px 6px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.8), 0 0 14px rgba(0, 75, 255, 0.35), 0 3px 6px rgba(0, 0, 0, 0.15)'
              }}
            >
              <Globe className="w-5 h-5" />
            </div>

            <span
              className="font-sans text-[30px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight bg-gradient-to-br from-[#0B143E] via-[#050508] to-[#1C1D24] bg-clip-text text-transparent mt-4 leading-none"
              style={{
                textShadow: '0 2px 4px rgba(11, 20, 62, 0.15), 0 4px 10px rgba(11, 20, 62, 0.08)'
              }}
            >
              5+
            </span>
            <span
              className="font-sans text-[10px] sm:text-[11px] font-bold text-[#003CE5] tracking-[0.18em] uppercase mt-2"
              style={{
                textShadow: '0 1px 2px rgba(0, 75, 255, 0.25), 0 2px 4px rgba(0, 75, 255, 0.12)'
              }}
            >
              Global Projects
            </span>
          </div>

          {/* Card 4: 10+ Years */}
          <div
            className={`w-full lg:flex-1 rounded-[24px] py-7 px-5 sm:px-6 flex flex-col items-center text-center transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 cursor-pointer relative z-10 group min-h-[200px] transform ${hasScrolledIntoView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-97"
              } delay-[600ms]`}
            style={{
              backgroundColor: 'rgba(246, 242, 232, 0.58)',
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.065'/%3E%3C/svg%3E")`,
              border: '1px solid rgba(180, 200, 230, 0.65)',
              boxShadow: '0 12px 40px rgba(11, 20, 62, 0.08), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)',
              backdropFilter: 'blur(32px) saturate(140%)',
              WebkitBackdropFilter: 'blur(32px) saturate(140%)',
            }}
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
            {/* iOS Glass sheen reflection sweep */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[24px] z-10">
              <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
            </div>

            {/* Grooved Shiny Circle Icon */}
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.65)',
                boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.45), inset 0 -3px 6px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.8), 0 0 14px rgba(0, 75, 255, 0.35), 0 3px 6px rgba(0, 0, 0, 0.15)'
              }}
            >
              <Calendar className="w-5 h-5" />
            </div>

            <span
              className="font-sans text-[30px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight bg-gradient-to-br from-[#0B143E] via-[#050508] to-[#1C1D24] bg-clip-text text-transparent mt-4 leading-none"
              style={{
                textShadow: '0 2px 4px rgba(11, 20, 62, 0.15), 0 4px 10px rgba(11, 20, 62, 0.08)'
              }}
            >
              1+
            </span>
            <span
              className="font-sans text-[10px] sm:text-[11px] font-bold text-[#003CE5] tracking-[0.18em] uppercase mt-2"
              style={{
                textShadow: '0 1px 2px rgba(0, 75, 255, 0.25), 0 2px 4px rgba(0, 75, 255, 0.12)'
              }}
            >
              Years
            </span>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full z-10">

          {/* Card 5: Contact Info (col-span-4) */}
          <div
            className={`col-span-12 lg:col-span-4 rounded-[24px] p-5 sm:p-8 lg:p-10 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group transform ${hasScrolledIntoView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-16 scale-97"
              } delay-[750ms]`}
            style={{
              backgroundColor: 'rgba(246, 242, 232, 0.58)',
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.065'/%3E%3C/svg%3E")`,
              border: '1px solid rgba(180, 200, 230, 0.65)',
              boxShadow: '0 12px 40px rgba(11, 20, 62, 0.08), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)',
              backdropFilter: 'blur(32px) saturate(140%)',
              WebkitBackdropFilter: 'blur(32px) saturate(140%)',
            }}
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
            {/* iOS Glass sheen reflection sweep */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[24px] z-10">
              <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
            </div>

            <div className="relative z-10 flex flex-col gap-8 h-full justify-between">

              {/* Vertical grooved connector line between icons */}
              <svg className="absolute left-[20px] top-[24px] bottom-[24px] w-3 h-[calc(100%-48px)] pointer-events-none -z-10">
                {/* White shadow vertical line */}
                <line x1="5" y1="0" x2="5" y2="100%" stroke="rgba(255,255,255,0.95)" strokeWidth="2.5" strokeDasharray="1 6" strokeLinecap="round" />
                {/* Dark blue vertical line */}
                <line x1="4" y1="0" x2="4" y2="100%" stroke="#0B1C66" strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" />
              </svg>

              {/* Item 1: Email */}
              <div className="flex items-center gap-4 relative z-10 group/item">
                {/* Grooved Shiny Circle Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover/item:scale-110"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.65)',
                    boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.45), inset 0 -3px 6px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.8), 0 0 14px rgba(0, 75, 255, 0.35), 0 3px 6px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[11px] font-bold text-[#003CE5] tracking-[0.15em] uppercase mb-0.5">Email</span>
                  <a
                    href="mailto:indravextechnologies@gmail.com"
                    className="font-sans text-[12px] sm:text-[14.5px] lg:text-[15.5px] text-[#0B143E] font-bold hover:text-[#004BFF] transition-colors break-all"
                  >
                    indravextechnologies@gmail.com
                  </a>
                </div>
              </div>

              {/* Divider (Grooved) */}
              <div className="relative w-full pl-16">
                <div className="border-t border-dotted border-white/95 mt-[1px] w-full" />
                <div className="absolute top-0 left-16 right-0 border-t border-dotted border-[#0B1C66]/25" />
              </div>

              {/* Item 2: Telephone */}
              <div className="flex items-center gap-4 relative z-10 group/item">
                {/* Grooved Shiny Circle Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover/item:scale-110"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.65)',
                    boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.45), inset 0 -3px 6px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.8), 0 0 14px rgba(0, 75, 255, 0.35), 0 3px 6px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[11px] font-bold text-[#003CE5] tracking-[0.15em] uppercase mb-0.5">Telephone</span>
                  <a
                    href="tel:+91-7666506689"
                    className="font-sans text-[14.5px] sm:text-[15.5px] text-[#0B143E] font-bold hover:text-[#004BFF] transition-colors"
                  >
                    +91-7666506689
                  </a>
                </div>
              </div>

              {/* Divider (Grooved) */}
              <div className="relative w-full pl-16">
                <div className="border-t border-dotted border-white/95 mt-[1px] w-full" />
                <div className="absolute top-0 left-16 right-0 border-t border-dotted border-[#0B1C66]/25" />
              </div>

              {/* Item 3: Founding Location */}
              <div className="flex items-center gap-4 relative z-10 group/item">
                {/* Grooved Shiny Circle Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover/item:scale-110"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.65)',
                    boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.45), inset 0 -3px 6px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.8), 0 0 14px rgba(0, 75, 255, 0.35), 0 3px 6px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[11px] font-bold text-[#003CE5] tracking-[0.15em] uppercase mb-0.5">
                    Founding Location
                  </span>
                  <span className="font-sans text-[14.5px] sm:text-[15.5px] text-[#0B143E] font-bold">
                    Pune, Maharashtra, India
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Card 6: Our Core Values (col-span-8) */}
          <div
            className={`col-span-12 lg:col-span-8 rounded-[24px] p-5 sm:p-8 lg:p-10 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group transform ${hasScrolledIntoView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-16 scale-97"
              } delay-[900ms]`}
            style={{
              backgroundColor: 'rgba(246, 242, 232, 0.58)',
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.065'/%3E%3C/svg%3E")`,
              border: '1px solid rgba(180, 200, 230, 0.65)',
              boxShadow: '0 12px 40px rgba(11, 20, 62, 0.08), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)',
              backdropFilter: 'blur(32px) saturate(140%)',
              WebkitBackdropFilter: 'blur(32px) saturate(140%)',
            }}
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
            {/* iOS Glass sheen reflection sweep */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[24px] z-10">
              <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
            </div>

            {/* Header: Our Core Values with 3D separators */}
            <div className="flex items-center justify-center gap-4 mb-10 w-full">
              <div className="flex-grow h-[3px] relative">
                {/* White shadow line */}
                <div className="absolute top-[1px] left-0 right-0 border-t border-dotted border-white/95" />
                {/* Dark blue line */}
                <div className="absolute top-0 left-0 right-0 border-t border-dotted border-[#0B1C66]/40" />
                {/* Node */}
                <div className="absolute right-4 -top-[4px] w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#004BFF] to-[#0B1C66] border border-white/50 shadow-[0_1px_3px_rgba(11,28,102,0.3)]" />
              </div>

              <h3 className="font-serif text-[18px] sm:text-[21px] font-bold text-[#0B143E] whitespace-nowrap">
                Our Core Values
              </h3>

              <div className="flex-grow h-[3px] relative">
                {/* White shadow line */}
                <div className="absolute top-[1px] left-0 right-0 border-t border-dotted border-white/95" />
                {/* Dark blue line */}
                <div className="absolute top-0 left-0 right-0 border-t border-dotted border-[#0B1C66]/40" />
                {/* Node */}
                <div className="absolute left-4 -top-[4px] w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#004BFF] to-[#0B1C66] border border-white/50 shadow-[0_1px_3px_rgba(11,28,102,0.3)]" />
              </div>
            </div>

            {/* Core Values 4 Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">

              {/* Column 1: Agile Innovation */}
              <div className="flex flex-col items-center text-center lg:pr-4 group/val relative">
                {/* Grooved Shiny Circle Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 mb-4 transition-transform duration-500 group-hover/val:scale-110"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.65)',
                    boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.45), inset 0 -3px 6px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.8), 0 0 14px rgba(0, 75, 255, 0.35), 0 3px 6px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <Lightbulb className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-sans text-[14px] font-bold text-[#0B143E] tracking-tight whitespace-nowrap">
                  Agile Innovation
                </h4>
                <div className="w-5 h-[2px] bg-[#004BFF] mt-2 mb-3 rounded-full" />
                <p className="font-sans text-[12px] text-[#5C5C5C] leading-[1.65] font-semibold">
                  We adapt, evolve, and deliver innovative solutions that keep our clients ahead.
                </p>
                {/* Vertical grooved divider (Desktop Only) */}
                <div className="absolute top-4 bottom-4 right-0 w-[2px] hidden lg:block pointer-events-none">
                  <div className="h-full border-r border-dotted border-white/90 translate-x-[1px]" />
                  <div className="absolute top-0 right-0 h-full border-r border-dotted border-[#0B1C66]/20" />
                </div>
              </div>

              {/* Column 2: Radical Transparency */}
              <div className="flex flex-col items-center text-center lg:px-4 group/val relative">
                {/* Grooved Shiny Circle Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 mb-4 transition-transform duration-500 group-hover/val:scale-110"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.65)',
                    boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.45), inset 0 -3px 6px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.8), 0 0 14px rgba(0, 75, 255, 0.35), 0 3px 6px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="8.5" r="4" />
                    <circle cx="8.5" cy="14.5" r="4" />
                    <circle cx="15.5" cy="14.5" r="4" />
                  </svg>
                </div>
                <h4 className="font-sans text-[14px] font-bold text-[#0B143E] tracking-tight whitespace-nowrap">
                  Radical Transparency
                </h4>
                <div className="w-5 h-[2px] bg-[#004BFF] mt-2 mb-3 rounded-full" />
                <p className="font-sans text-[12px] text-[#5C5C5C] leading-[1.65] font-semibold">
                  Openness and honesty at every step, building trust through clear communication.
                </p>
                {/* Vertical grooved divider (Desktop Only) */}
                <div className="absolute top-4 bottom-4 right-0 w-[2px] hidden lg:block pointer-events-none">
                  <div className="h-full border-r border-dotted border-white/90 translate-x-[1px]" />
                  <div className="absolute top-0 right-0 h-full border-r border-dotted border-[#0B1C66]/20" />
                </div>
              </div>

              {/* Column 3: Engineering Rigor */}
              <div className="flex flex-col items-center text-center lg:px-4 group/val relative">
                {/* Grooved Shiny Circle Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 mb-4 transition-transform duration-500 group-hover/val:scale-110"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.65)',
                    boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.45), inset 0 -3px 6px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.8), 0 0 14px rgba(0, 75, 255, 0.35), 0 3px 6px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <ShieldCheck className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-sans text-[14px] font-bold text-[#0B143E] tracking-tight whitespace-nowrap">
                  Engineering Rigor
                </h4>
                <div className="w-5 h-[2px] bg-[#004BFF] mt-2 mb-3 rounded-full" />
                <p className="font-sans text-[12px] text-[#5C5C5C] leading-[1.65] font-semibold">
                  We follow best practices and engineering excellence in everything we build.
                </p>
                {/* Vertical grooved divider (Desktop Only) */}
                <div className="absolute top-4 bottom-4 right-0 w-[2px] hidden lg:block pointer-events-none">
                  <div className="h-full border-r border-dotted border-white/90 translate-x-[1px]" />
                  <div className="absolute top-0 right-0 h-full border-r border-dotted border-[#0B1C66]/20" />
                </div>
              </div>

              {/* Column 4: Security by Design */}
              <div className="flex flex-col items-center text-center lg:pl-4 group/val">
                {/* Grooved Shiny Circle Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 mb-4 transition-transform duration-500 group-hover/val:scale-110"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #598BFF 0%, #004BFF 50%, #001680 100%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.65)',
                    boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.45), inset 0 -3px 6px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.8), 0 0 14px rgba(0, 75, 255, 0.35), 0 3px 6px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <Lock className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-sans text-[14px] font-bold text-[#0B143E] tracking-tight whitespace-nowrap">
                  Security by Design
                </h4>
                <div className="w-5 h-[2px] bg-[#004BFF] mt-2 mb-3 rounded-full" />
                <p className="font-sans text-[12px] text-[#5C5C5C] leading-[1.65] font-semibold">
                  Security is not an add-on; it's built into the foundation of our solutions.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Overlapping Separator to next page */}
      <Separator bottom="-90px" />
    </section>
  );
}
