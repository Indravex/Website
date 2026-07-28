import { useState, useEffect } from "react";
import Separator from "./Separator";
import MagnetLines from "./MagnetLines";

const CARDS = [
  {
    num: "01",
    title: "AI & Automation",
    desc: "Intelligent workflows that optimize operations and accelerate growth.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Web Development",
    desc: "Custom Websites that are Fast, Responsive & SEO Friendly.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Custom Development",
    desc: "Robust digital products crafted to solve real business problems.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Mobile Application Development",
    desc: "Android, iOS & Cross-Platform Apps for your business.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    num: "05",
    title: "Digital Marketing",
    desc: "Data-driven strategies to grow your brand and deliver measurable results.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  },
  {
    num: "06",
    title: "IT Staffing Solutions",
    desc: "Access top IT talent quickly and efficiently to scale your teams.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function Capabilities() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);

  useEffect(() => {
    const section = document.getElementById("capabilities");
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
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="relative z-30 py-24 md:py-32 px-6 md:px-12 bg-transparent"
      id="capabilities"
    >
      {/* Background glowing accents and rich geometric textures */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Futuristic Dot-Matrix Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: 'radial-gradient(rgba(0, 75, 255, 0.08) 1.25px, transparent 1.25px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Ambient Glowing Spotlights (Gives depth and life to the layout) */}
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#004BFF]/12 to-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-purple-500/10 to-[#004BFF]/8 blur-[140px]" />

        {/* Topographic contours (Faint overlay) */}
        <svg className="w-full h-full text-primary-navy opacity-[0.04]" fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <path d="M -100 100 Q 300 300 700 150 T 1500 200 T 2100 100" />
          <path d="M -100 150 Q 300 350 700 200 T 1500 250 T 2100 150" />
          <path d="M -100 400 Q 400 200 900 400 T 1700 300 T 2100 400" />
          <path d="M -100 450 Q 400 250 900 450 T 1700 350 T 2100 450" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: Text Content & 3D Art Asset */}
          <div className="lg:col-span-5 flex flex-col items-start text-left relative z-20 -translate-y-16 md:-translate-y-24 lg:-translate-y-32">
            {/* Eyebrow */}
            <span
              className={`font-sans text-[11px] sm:text-[12px] font-bold text-[#004BFF] tracking-[0.22em] uppercase block mb-5 transition-all duration-700 delay-100 transform ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[2px]"
                }`}
              style={{
                textShadow: '0 1px 1px rgba(255, 255, 255, 0.9), 0 -0.5px 0.5px rgba(0, 0, 0, 0.1)'
              }}
            >
              WHAT WE DO
            </span>

            {/* Headline - ink-grade gradient & elegant 3D text shadow */}
            <h2
              className={`font-serif text-[38px] sm:text-[48px] md:text-[54px] leading-[1.12] font-semibold tracking-tight mb-8 transition-all duration-700 delay-300 transform ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[2px]"
                }`}
              style={{
                textShadow: '0 2px 4px rgba(11, 20, 62, 0.08), 0 6px 16px rgba(11, 20, 62, 0.04)',
              }}
            >
              <span
                className="bg-gradient-to-br from-[#2A2B36] via-[#050508] to-[#1B1C24] bg-clip-text text-transparent"
                style={{
                  textShadow: '0 1.5px 3px rgba(0, 0, 0, 0.28), 0 3px 8px rgba(0, 0, 0, 0.12)',
                }}
              >
                End-to-end digital <br />
              </span>
              <span
                className="font-serif font-extrabold bg-gradient-to-br from-[#003CE5] to-[#001D80] bg-clip-text text-transparent tracking-tight inline-block relative mr-2"
                style={{
                  textShadow: '0 1.5px 3px rgba(0, 29, 128, 0.25), 0 3px 8px rgba(0, 29, 128, 0.12)',
                }}
              >
                solutions
              </span>
              <span
                className="bg-gradient-to-br from-[#2A2B36] via-[#050508] to-[#1B1C24] bg-clip-text text-transparent"
                style={{
                  textShadow: '0 1.5px 3px rgba(0, 0, 0, 0.28), 0 3px 8px rgba(0, 0, 0, 0.12)',
                }}
              >
                built for <br />
                real business.
              </span>
            </h2>

            {/* Subtitle / Description */}
            <p
              className={`font-sans text-[14.5px] sm:text-[16.5px] text-[#1C1D24] leading-[1.65] font-normal max-w-[460px] mb-8 transition-all duration-700 delay-500 transform ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[2px]"
                }`}
              style={{
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.12)',
              }}
            >
              We partner with ambitious companies to design, develop, automate and scale digital products that create measurable impact.
            </p>

            {/* CTA Link with Royal Blue Underline */}
            <a
              href="/services"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/services', '_blank');
              }}
              className={`group relative inline-flex items-center gap-2 text-[#0B143E] font-sans text-[13px] sm:text-[14px] font-bold tracking-wide pb-1.5 transition-all duration-700 delay-700 transform hover:text-[#004BFF] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[2px]"
                }`}
            >
              View All Services
              <span className="text-[12px] font-bold transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110">↗</span>

              {/* Expanding Glowing Underline */}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#004BFF] transition-all duration-300 group-hover:h-[2.5px] group-hover:bg-[#003CE5] group-hover:shadow-[0_0_10px_rgba(0,75,255,0.6)]" />
            </a>

            {/* Magnet Lines Effect - Laptops Only */}
            <div className="hidden lg:block mt-12 w-full max-w-[280px]">
              <MagnetLines
                rows={6}
                columns={8}
                containerSize="100%"
                lineColor="rgba(0, 75, 255, 0.18)"
                lineWidth="3px"
                lineHeight="26px"
                baseAngle={-15}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Service Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 relative z-20">
            {/* Global Gradient Definition for the Border Beam effect */}
            <svg style={{ width: 0, height: 0, position: 'absolute', pointerEvents: 'none' }}>
              <defs>
                <linearGradient id="hover-border-beam" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="30%" stopColor="#93C5FD" />
                  <stop offset="70%" stopColor="#003CE5" />
                  <stop offset="100%" stopColor="#0B143E" />
                </linearGradient>
              </defs>
            </svg>

            {CARDS.map((card, idx) => (
              <div
                key={idx}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-[22px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.025] cursor-pointer transform ${hasScrolledIntoView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                  } ${idx === 0 ? 'delay-[700ms]' : idx === 1 ? 'delay-[900ms]' : 'delay-[1100ms]'
                  }`}
                style={{
                  backgroundColor: 'rgba(240, 244, 250, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.65)',
                  boxShadow: '0 8px 32px rgba(11, 20, 62, 0.06), inset 0 1.5px 2px rgba(255, 255, 255, 0.7), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)',
                  backdropFilter: 'blur(32px) saturate(140%)',
                  WebkitBackdropFilter: 'blur(32px) saturate(140%)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(240, 244, 250, 0.65)';
                  e.currentTarget.style.border = '1px solid rgba(0, 75, 255, 0.5)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(11, 20, 62, 0.12), inset 0 1.5px 2px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 75, 255, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(240, 244, 250, 0.5)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.65)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(11, 20, 62, 0.06), inset 0 1.5px 2px rgba(255, 255, 255, 0.7), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)';
                }}
              >
                {/* Lustrous Golden-Blue Border Beam Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-[22px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="calc(100% - 1px)"
                    height="calc(100% - 1px)"
                    rx="21.5px"
                    fill="none"
                    stroke="url(#hover-border-beam)"
                    strokeWidth="1.5"
                    className="animate-border-beam filter drop-shadow-[0_0_3px_rgba(230,180,85,0.45)] drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]"
                  />
                </svg>

                {/* iOS Glass sheen reflection sweep */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[22px] z-10">
                  <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
                </div>

                <div className="relative z-20 flex flex-col justify-between h-full w-full">
                  <div>
                    {/* Top Row: Icon & Number */}
                    <div className="flex items-center justify-between">
                      <div
                        className="card-icon-container text-[#004BFF]"
                        style={{
                          filter: 'drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 0px rgba(255, 255, 255, 0.8))'
                        }}
                      >
                        {card.icon}
                      </div>
                      <span
                        className="font-sans text-[11px] font-bold text-[#0B143E]/50 tracking-[0.05em]"
                        style={{
                          textShadow: '0 -1px 1px rgba(0, 0, 0, 0.1), 0 1px 0px rgba(255, 255, 255, 0.8)'
                        }}
                      >
                        {card.num}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3
                      className="font-sans font-bold text-[17px] text-[#0B143E] mt-6 mb-2 leading-snug"
                      style={{
                        textShadow: '0 -1px 1px rgba(11, 20, 62, 0.25), 0 1px 0px rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p
                      className="font-sans text-[13px] text-[#5C5C5C] font-semibold leading-relaxed mb-6"
                      style={{
                        textShadow: '0 -0.5px 0.5px rgba(0, 0, 0, 0.15), 0 1px 0px rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom Diagonal Arrow */}
                  <div
                    className="flex items-center text-[#0B143E]"
                    style={{
                      filter: 'drop-shadow(0 1px 2px rgba(11, 20, 62, 0.2))'
                    }}
                  >
                    <span className="text-[12px] font-bold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Overlapping Separator to next page */}
      <Separator />
    </section>
  );
}
