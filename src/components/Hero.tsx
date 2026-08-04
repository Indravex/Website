import Separator from "./Separator";

export default function Hero() {
  return (
    <section
      className="relative z-20 min-h-[90vh] flex flex-col justify-center pt-28 lg:pt-32 pb-24 lg:pb-20 px-6 md:px-12 w-full"
      id="hero-section"
    >

      {/* Main Grid Layout */}
      <div className="max-w-[1320px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">

        {/* Left Side Content Column */}
        <div className="w-full lg:col-span-7 flex flex-col items-start text-left lg:-translate-y-8">

          {/* Eyebrow - Clean and uppercase */}
          <span className="font-sans text-[11px] sm:text-[12px] font-bold text-[#004BFF] tracking-[0.22em] uppercase block mb-4 mt-2 relative z-10">
            Engineering Digital Intelligence
          </span>

          {/* Headline - 2 Lines format */}
          <h1
            className="font-serif text-[32px] sm:text-[46px] md:text-[56px] leading-[1.1] sm:leading-[1.05] font-extrabold tracking-normal mb-5 text-[#000000]"
            style={{ WebkitTextStroke: '0.55px #000000' }}
          >
            We build digital products <br className="hidden sm:inline" />
            that drive <span className="text-[#004BFF] inline-block" style={{ WebkitTextStroke: '0.55px #004BFF' }}>real impact.</span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#4D4D4D] leading-[1.6] font-medium max-w-[480px] mb-6">
            From idea to scale — we design, develop, automate and optimize digital solutions that help businesses grow, innovate and lead.
          </p>

          {/* Buttons CTA Container */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {/* Primary Button: Dark Navy */}
            <a
              href="#capabilities"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("capabilities");
                if (target) {
                  const lenis = (window as any).lenis;
                  if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.2 });
                  else target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-5.5 py-3 bg-[#0B143E] hover:bg-[#004BFF] text-white font-sans text-[14px] font-semibold rounded-[8px] transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_4px_12px_rgba(11,20,62,0.08)]"
            >
              Explore Our Services
              <span className="text-[15px] leading-none ml-0.5">↗</span>
            </a>

            {/* Secondary Button: White with Dark Border */}
            <a
              href="/portfolio"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, "", "/portfolio");
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5.5 py-3 bg-white border border-[#0B143E] hover:bg-[#F0F4FF] text-[#0B143E] font-sans text-[14px] font-semibold rounded-[8px] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              View Our Work
              <span className="text-[15px] leading-none ml-0.5">↗</span>
            </a>
          </div>

          {/* Trusted Companies Section */}
          <div className="flex flex-col items-start gap-2.5 w-full max-w-[480px]">
            <span className="font-sans text-[11px] font-extrabold text-[#5C5C5C] tracking-[0.2em] uppercase">
              Trusted by Innovative Companies
            </span>
            {/* Fade overlay mask on left/right sides */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
              <div className="animate-marquee flex items-center gap-12 py-1 select-none">
                {/* Set 1 */}
                <div className="flex items-center gap-12 shrink-0">
                  {/* Microsoft */}
                  <div className="flex items-center gap-2 text-[#0B143E]/70 hover:text-[#0B143E]/95 transition-colors duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 23 23" fill="currentColor">
                      <rect x="0" y="0" width="10.5" height="10.5" />
                      <rect x="12" y="0" width="10.5" height="10.5" />
                      <rect x="0" y="12" width="10.5" height="10.5" />
                      <rect x="12" y="12" width="10.5" height="10.5" />
                    </svg>
                    <span className="font-sans font-bold text-[14.5px] tracking-tight">Microsoft</span>
                  </div>
                  {/* Google */}
                  <span className="font-sans font-black text-[16.5px] tracking-tighter text-[#0B143E]/70 hover:text-[#0B143E]/95 transition-colors duration-300">
                    Google
                  </span>
                  {/* Amazon */}
                  <div className="flex flex-col items-center justify-center text-[#0B143E]/70 hover:text-[#0B143E]/95 transition-colors duration-300">
                    <span className="font-sans font-black text-[14.5px] leading-none">amazon</span>
                    <svg className="w-10 h-1.5 -mt-0.5" viewBox="0 0 40 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 2.5C10 5.5 30 5.5 39 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* Stripe */}
                  <span className="font-sans font-black text-[17px] tracking-tight text-[#0B143E]/70 hover:text-[#0B143E]/95 transition-colors duration-300">
                    stripe
                  </span>
                  {/* Adobe */}
                  <div className="flex items-center gap-1.5 text-[#0B143E]/70 hover:text-[#0B143E]/95 transition-colors duration-300">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.9 2H22v18.7h-4.3l-2.7-5.3H9.3L6.6 20.7H2V2h8.1l3.8 0Z" />
                    </svg>
                    <span className="font-sans font-extrabold text-[13.5px] tracking-tight">Adobe</span>
                  </div>
                </div>

                {/* Set 2 (for seamless loop) */}
                <div className="flex items-center gap-12 shrink-0" aria-hidden="true">
                  {/* Microsoft */}
                  <div className="flex items-center gap-2 text-[#0B143E]/70 hover:text-[#0B143E]/95 transition-colors duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 23 23" fill="currentColor">
                      <rect x="0" y="0" width="10.5" height="10.5" />
                      <rect x="12" y="0" width="10.5" height="10.5" />
                      <rect x="0" y="12" width="10.5" height="10.5" />
                      <rect x="12" y="12" width="10.5" height="10.5" />
                    </svg>
                    <span className="font-sans font-bold text-[14.5px] tracking-tight">Microsoft</span>
                  </div>
                  {/* Google */}
                  <span className="font-sans font-black text-[16.5px] tracking-tighter text-[#0B143E]/70 hover:text-[#0B143E]/95 transition-colors duration-300">
                    Google
                  </span>
                  {/* Amazon */}
                  <div className="flex flex-col items-center justify-center text-[#0B143E]/70 hover:text-[#0B143E]/95 transition-colors duration-300">
                    <span className="font-sans font-black text-[14.5px] leading-none">amazon</span>
                    <svg className="w-10 h-1.5 -mt-0.5" viewBox="0 0 40 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 2.5C10 5.5 30 5.5 39 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* Stripe */}
                  <span className="font-sans font-black text-[17px] tracking-tight text-[#0B143E]/70 hover:text-[#0B143E]/95 transition-colors duration-300">
                    stripe
                  </span>
                  {/* Adobe */}
                  <div className="flex items-center gap-1.5 text-[#0B143E]/70 hover:text-[#0B143E]/95 transition-colors duration-300">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.9 2H22v18.7h-4.3l-2.7-5.3H9.3L6.6 20.7H2V2h8.1l3.8 0Z" />
                    </svg>
                    <span className="font-sans font-extrabold text-[13.5px] tracking-tight">Adobe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side Column: Floating Mockup Composition */}
        <div className="hidden lg:flex lg:col-span-5 relative h-[480px] md:h-[540px] w-full items-center justify-center select-none mt-12 lg:mt-0 lg:-translate-y-6">
          <div className="relative w-full h-full max-w-[500px]">
            {/* Small 3D Grooved Dot Grid behind base image */}
            <div className="absolute bottom-[20%] right-[-32%] w-[90px] h-[90px] opacity-35 pointer-events-none z-[5] select-none">
              <div
                className="absolute inset-0 translate-x-[1px] translate-y-[1px]"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,1) 1.8px, transparent 1.8px)",
                  backgroundSize: "10px 10px",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(#001D80 1.5px, transparent 1.5px)",
                  backgroundSize: "10px 10px",
                }}
              />
            </div>

            {/* 1. Base Pedestal (podium) */}
            <div className="absolute bottom-[-3%] left-[47%] -translate-x-1/2 w-[120%] sm:w-[790px] z-10">
              <img
                src="https://res.cloudinary.com/dcryxjtb3/image/upload/v1785053836/bottom_base-Photoroom_bq4dej.png"
                alt="Indravex Enterprise Engineering Platform Base"
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
              />
            </div>

            {/* 2. Floating Laptop */}
            <div
              className="absolute top-[9%] left-[45%] -translate-x-1/2 w-[110%] sm:w-[620px] z-20 animate-float-mockup"
              style={{ animationDelay: '0.4s' }}
            >
              <img
                src="https://res.cloudinary.com/dcryxjtb3/image/upload/v1785053248/laptop_d6fgxz.png"
                alt="Indravex Custom Web & AI Dashboard Platform"
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_25px_50px_rgba(11,20,62,0.14)]"
              />
            </div>

            {/* Small 3D Grooved Dot Grid behind Card 1 */}
            <div className="absolute top-[3%] left-[-8%] w-[90px] h-[90px] opacity-35 pointer-events-none z-[10] select-none">
              <div
                className="absolute inset-0 translate-x-[1px] translate-y-[1px]"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,1) 1.8px, transparent 1.8px)",
                  backgroundSize: "10px 10px",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(#001D80 1.5px, transparent 1.5px)",
                  backgroundSize: "10px 10px",
                }}
              />
            </div>

            {/* 3. Card 1: AI & Automation */}
            <div
              className="absolute top-[-3%] left-[15%] w-[58%] sm:w-[280px] z-15 animate-float-mockup-slow"
              style={{ animationDelay: '1.2s' }}
            >
              <img
                src="https://res.cloudinary.com/dcryxjtb3/image/upload/v1785053720/t1-Photoroom_otzy1t.png"
                alt="AI and Enterprise Process Automation Solutions"
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_15px_30px_rgba(11,20,62,0.06)]"
              />
            </div>

            {/* 4. Card 2: Web Development */}
            <div
              className="absolute top-[24%] left-[-28%] w-[58%] sm:w-[290px] z-30 animate-float-mockup"
              style={{ animationDelay: '0.8s' }}
            >
              <img
                src="https://res.cloudinary.com/dcryxjtb3/image/upload/v1785053707/t2-Photoroom_j5fo2y.png"
                alt="Full Stack Web Development & Cloud Architecture Services"
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_15px_30px_rgba(11,20,62,0.06)]"
              />
            </div>

            {/* 5. Card 3: Custom Development */}
            <div
              className="absolute bottom-[12%] right-[-6%] w-[62%] sm:w-[310px] z-30 animate-float-mockup-slow"
              style={{ animationDelay: '1.6s' }}
            >
              <img
                src="https://res.cloudinary.com/dcryxjtb3/image/upload/v1785053701/t3-Photoroom_s8qsed.png"
                alt="Custom Software Development & IT Engineering"
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_15px_30px_rgba(11,20,62,0.06)]"
              />
            </div>

          </div>
        </div>

        {/* Stats Bar Card - Full-Width Handcrafted Editorial Style */}
        <div
          className="lg:col-span-12 mt-2 lg:-mt-10 w-full max-w-[1140px] mx-auto py-6 px-4 sm:px-12 rounded-[16px] grid grid-cols-2 md:grid-cols-4 gap-x-2 sm:gap-x-6 gap-y-6 md:gap-y-0 relative z-30 transform lg:-translate-y-10 bg-white border border-[#E2EAF8]"
          style={{
            boxShadow: '0 8px 30px rgba(11, 20, 62, 0.04), 0 0 20px rgba(0, 75, 255, 0.05), inset 0 0 8px rgba(0, 75, 255, 0.015)'
          }}
        >
          {[
            {
              icon: (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              ),
              number: "10+",
              label: "Projects Delivered"
            },
            {
              icon: (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ),
              number: "100+",
              label: "Happy Clients"
            },
            {
              icon: (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V14a2 2 0 012-2h.055M11 20.055V18a2 2 0 00-2-2h-.5a2 2 0 01-2-2v-1.5a2.5 2.5 0 00-2.5-2.5H4" />
                </svg>
              ),
              number: "4+",
              label: "Industries Served"
            },
            {
              icon: (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
              number: "98%",
              label: "Client Retention"
            }
          ].map((stat, idx) => {
            // Precise borders logic:
            // Desktop (md): index > 0 gets border-l and pl
            // Mobile (grid-cols-2): 
            // - idx 1: border-l pl-4 sm:pl-8
            // - idx 2: border-t pt-4 md:border-t-0 md:border-l md:pl-8
            // - idx 3: border-l border-t pl-4 pt-4 md:border-t-0 md:pl-8
            let borderClasses = "flex items-center gap-2 sm:gap-3.5 justify-center ";
            if (idx === 1) {
              borderClasses += "border-l border-[#E2EAF8] pl-3 sm:pl-8 md:pl-12";
            } else if (idx === 2) {
              borderClasses += "border-t border-[#E2EAF8] pt-4 md:pt-0 md:border-t-0 md:border-l md:pl-8 lg:pl-12";
            } else if (idx === 3) {
              borderClasses += "border-l border-t border-[#E2EAF8] pl-3 pt-4 sm:pl-8 md:pt-0 md:border-t-0 md:pl-8 lg:pl-12";
            }

            return (
              <div key={idx} className={borderClasses}>
                {/* Icon Block - Flat solid dark navy rounded block */}
                <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-[6px] flex items-center justify-center text-white bg-[#0B143E] shrink-0">
                  {stat.icon}
                </div>
                {/* Text Block */}
                <div className="flex flex-col">
                  <span className="font-sans text-[16px] sm:text-[20px] font-extrabold text-[#0B143E] leading-none tracking-tight">
                    {stat.number}
                  </span>
                  <span className="font-sans text-[8px] sm:text-[10px] text-[#787878] font-bold uppercase tracking-wider mt-1 leading-none">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Overlapping Separator to next page */}
      <Separator bottom="-40px" bgColor="#FFFFFF" />
    </section>
  );
}
