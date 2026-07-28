import { useState, useEffect } from "react";
import { Box, Shield, Database } from "lucide-react";
import Separator from "./Separator";

export default function InteractiveConsole() {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const section = document.getElementById("interactive-console");
    if (!section) return;

    let intervalId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset to first logo when entering viewport (refresh or scroll in)
          setActiveIndex(0);
          
          if (intervalId) clearInterval(intervalId);
          
          // Start sequential loop (4s per logo for a calm, premium pacing)
          intervalId = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 4);
          }, 4000);
        } else {
          // Reset when user scrolls away
          setActiveIndex(-1);
          if (intervalId) clearInterval(intervalId);
        }
      },
      { threshold: 0.15 } // triggers when 15% of the section is visible
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const LAYERS = [
    {
      title: "APPLICATION LAYER",
      descLine1: "Intelligent applications",
      descLine2: "and user interfaces.",
      positionClass: "md:left-[-25%] lg:left-[-14%] md:top-[16%] -translate-y-1/2 md:w-[60%] lg:w-[51%]",
      icon: (
        <svg 
          className="w-5 h-5 text-[#003CE5] filter drop-shadow-[0_1px_2px_rgba(0,60,229,0.2)]" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2.2"
        >
          <rect x="4" y="4" width="16" height="4" rx="1" />
          <rect x="4" y="10" width="16" height="4" rx="1" />
          <rect x="4" y="16" width="16" height="4" rx="1" />
          <circle cx="8" cy="6" r="0.75" fill="currentColor" />
          <circle cx="8" cy="12" r="0.75" fill="currentColor" />
          <circle cx="8" cy="18" r="0.75" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "PLATFORM LAYER",
      descLine1: "Compute, storage and",
      descLine2: "data orchestration.",
      positionClass: "md:left-[-25%] lg:left-[-14%] md:top-[38%] -translate-y-1/2 md:w-[47%] lg:w-[40%]",
      icon: <Box className="w-5 h-5 text-[#003CE5] filter drop-shadow-[0_1px_2px_rgba(0,60,229,0.2)]" strokeWidth={2.2} />
    },
    {
      title: "SECURITY LAYER",
      descLine1: "Zero-trust architecture",
      descLine2: "and encrypted systems.",
      positionClass: "md:left-[-25%] lg:left-[-14%] md:top-[60%] -translate-y-1/2 md:w-[35%] lg:w-[28%]",
      icon: <Shield className="w-5 h-5 text-[#003CE5] filter drop-shadow-[0_1px_2px_rgba(0,60,229,0.2)]" strokeWidth={2.2} />
    },
    {
      title: "INFRASTRUCTURE LAYER",
      descLine1: "High-availability data",
      descLine2: "centers and network.",
      positionClass: "md:left-[-25%] lg:left-[-14%] md:top-[81%] -translate-y-1/2 md:w-[28%] lg:w-[22%]",
      icon: <Database className="w-5 h-5 text-[#003CE5] filter drop-shadow-[0_1px_2px_rgba(0,60,229,0.2)]" strokeWidth={2.2} />
    }
  ];

  return (
    <section 
      className="relative z-[30] pt-32 pb-32 px-6 md:px-12 bg-transparent flex items-center min-h-[95vh]"
      id="interactive-console"
    >
      {/* SVG Definitions for Golden Circulation Gradient */}
      <svg style={{ width: 0, height: 0, position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="golden-circulation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#93C5FD" />
            <stop offset="50%" stopColor="#003CE5" />
            <stop offset="75%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1320px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side Content Column */}
        <div className="lg:col-span-4 flex flex-col items-start text-left lg:-translate-y-8">
          
          {/* Eyebrow - matches Hero style */}
          <div 
            className={`flex items-center gap-4 mb-6 mt-6 transition-all duration-[900ms] delay-[100ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
              activeIndex !== -1 ? 'opacity-100 translate-x-0 rotate-0 scale-100' : 'opacity-0 -translate-x-12 -rotate-[3deg] scale-95'
            }`}
          >
            <span 
              className="font-sans text-[11px] sm:text-[12px] font-bold text-[#004BFF] tracking-[0.22em] uppercase block"
              style={{
                textShadow: '0 1px 1px rgba(255, 255, 255, 0.9), 0 -0.5px 0.5px rgba(0, 0, 0, 0.1)'
              }}
            >
              OUR INFRASTRUCTURE
            </span>
            <div className="h-[1.5px] w-12 bg-[#004BFF]/30" />
          </div>
 
          {/* Headline - matches Hero's ink-grade gradient & 3D text shadow */}
          <h2 
            className={`font-serif text-[38px] sm:text-[49px] md:text-[56px] leading-[1.1] font-semibold tracking-tight mb-8 transition-all duration-[900ms] delay-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
              activeIndex !== -1 ? 'opacity-100 translate-x-0 rotate-0 scale-100' : 'opacity-0 -translate-x-12 -rotate-[3deg] scale-95'
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
              Purpose-built <br />
              systems for <br />
              <span className="italic font-serif font-normal">uncompromised</span> <br />
              performance.
            </span>
          </h2>
 
          {/* Divider line */}
          <div 
            className={`w-10 h-[2.5px] bg-[#004BFF] mb-10 shadow-[0_1px_3px_rgba(0,75,255,0.2)] transition-all duration-[900ms] delay-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
              activeIndex !== -1 ? 'opacity-100 translate-x-0 scale-x-100' : 'opacity-0 -translate-x-12 scale-x-0'
            }`}
          />
 
          {/* Subtext - matches Hero style */}
          <p 
            className={`font-sans text-[14.5px] sm:text-[16.5px] text-[#1C1D24] leading-[1.65] font-normal max-w-[360px] transition-all duration-[900ms] delay-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
              activeIndex !== -1 ? 'opacity-100 translate-x-0 rotate-0 scale-100' : 'opacity-0 -translate-x-12 -rotate-[3deg] scale-95'
            }`}
            style={{
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.12)',
            }}
          >
            Sovereign. Scalable. Secure. <br />
            Every layer of our infrastructure is designed, <br />
            engineered and operated with precision <br />
            to ensure resilience, compliance and control.
          </p>

        </div>

        {/* Right Column: Unified Layer Stack Image & Desktop Description Cards */}
        <div className="lg:col-span-8 relative flex flex-col md:flex-row items-center justify-end select-none w-full mt-12 lg:mt-0 px-4 md:px-0">
          
          {/* Main Relative Container for Image and Absolute Cards */}
          <div className="hidden lg:block relative w-full max-w-[500px] sm:max-w-[550px] lg:max-w-[620px] xl:max-w-[680px] mr-[-10px] md:mr-[-30px] lg:mr-[-50px] xl:mr-[-70px]">
            {/* Ambient background glow behind the image */}
            <div className="absolute w-[95%] h-[95%] rounded-full bg-accent-blue/15 blur-[120px] pointer-events-none -z-10" />
            
            {/* The Stack Image */}
            <img 
              src="https://res.cloudinary.com/dcryxjtb3/image/upload/v1785061829/ChatGPT_Image_Jul_26_2026_03_58_13_PM-Photoroom_hsli4q.png"
              alt="Infrastructure Layer Stack"
              className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_30px_60px_rgba(11,20,62,0.18)] filter drop-shadow-[0_4px_16px_rgba(0,75,255,0.08)]"
            />

            {/* Desktop View: Absolute Positioned Cards layered perfectly in front of each corresponding layer */}
            {LAYERS.map((layer, index) => (
              <div 
                key={index}
                className={`hidden md:flex absolute items-center group/layer z-20 ${layer.positionClass}`}
              >
                {/* Rounded square icon card with premium beveled lifted look & conditional active styles */}
                <div 
                  className={`w-11 h-11 sm:w-13 sm:h-13 rounded-[15px] flex items-center justify-center bg-white border shrink-0 transition-all duration-300 relative ${
                    activeIndex === index 
                      ? "scale-110 -translate-y-0.5 border-[#3B82F6] shadow-[0_8px_20px_rgba(59,130,246,0.2),inset_0_2px_4px_rgba(255,255,255,0.95)]" 
                      : "border-white/90 shadow-[0_6px_16px_rgba(11,20,62,0.06),0_12px_28px_rgba(11,20,62,0.04),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(0,75,255,0.03)]"
                  }`}
                  style={{
                    background: activeIndex === index 
                      ? 'linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 246, 255, 0.9) 100%)',
                  }}
                >
                  {layer.icon}

                  {/* Whiteish Golden Border Beam Circulation Overlay - Smooth & Slow */}
                  <div 
                    className={`absolute inset-0 w-full h-full pointer-events-none rounded-[15px] z-30 transition-opacity duration-500 ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <svg className="absolute inset-0 w-full h-full rounded-[15px]">
                      <rect 
                        x="0.75" 
                        y="0.75" 
                        width="calc(100% - 1.5px)" 
                        height="calc(100% - 1.5px)" 
                        rx="14.25px" 
                        fill="none" 
                        stroke="url(#golden-circulation-gradient)" 
                        strokeWidth="2"
                        className="animate-border-beam filter drop-shadow-[0_0_3px_rgba(59,130,246,0.85)] drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
                        style={{ animationDuration: '5.5s' }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Layer Labels & Descriptions */}
                <div className="ml-3 shrink-0 flex flex-col text-left">
                  <span 
                    className={`font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.12em] mb-0.5 uppercase transition-colors duration-300 ${
                      activeIndex === index ? "text-[#003CE5]" : "text-[#0B143E]"
                    }`}
                    style={{
                      textShadow: '0 1px 1px rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    {layer.title}
                  </span>
                  <span 
                    className="font-sans text-[11px] sm:text-[12.5px] text-[#1C1D24] font-bold leading-snug"
                    style={{
                      textShadow: '0 0.5px 1px rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    {layer.descLine1} <br />
                    {layer.descLine2}
                  </span>
                </div>

                {/* Dashed pointing line spanning dynamically to the image */}
                <div className="flex-grow h-[1.5px] border-t border-dashed border-[#003CE5]/35 ml-3 mr-0 relative min-w-[10px]">
                  <div 
                    className={`absolute -right-1 -top-[3.5px] w-[8px] h-[8px] rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? "bg-[#003CE5] scale-125 shadow-[0_0_12px_rgba(0,60,229,1)]" 
                        : "bg-[#003CE5]/60 shadow-[0_0_6px_rgba(0,60,229,0.5)]"
                    }`} 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View: Regular static layout stacked below the image */}
          <div className="flex md:hidden flex-col gap-5 w-full mt-10">
            {LAYERS.map((layer, index) => (
              <div 
                key={index} 
                className={`flex items-center w-full p-4 rounded-2xl border transition-all duration-300 ${
                  activeIndex === index 
                    ? "border-[#3B82F6] shadow-[0_8px_20px_rgba(59,130,246,0.15)]" 
                    : "border-white/90 shadow-[0_6px_16px_rgba(11,20,62,0.04),0_12px_28px_rgba(11,20,62,0.03),inset_0_2px_4px_rgba(255,255,255,0.9)]"
                }`}
                style={{
                  background: activeIndex === index 
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 245, 255, 0.95) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 245, 255, 0.6) 100%)',
                }}
              >
                {/* Rounded square icon card */}
                <div 
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center bg-white border border-white shadow-[0_2px_6px_rgba(11,20,62,0.02)] shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 245, 255, 0.9) 100%)',
                  }}
                >
                  {layer.icon}
                </div>

                {/* Layer Labels & Descriptions */}
                <div className="ml-4 flex flex-col text-left">
                  <span className={`font-sans text-[10px] font-bold tracking-wider mb-0.5 transition-colors ${
                    activeIndex === index ? "text-[#003CE5]" : "text-[#0B143E]"
                  }`}>
                    {layer.title}
                  </span>
                  <span className="font-sans text-[11.5px] text-[#1C1D24] font-bold leading-snug">
                    {layer.descLine1} {layer.descLine2}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Overlapping Separator to next page */}
      <Separator bottom="-90px" />
    </section>
  );
}
