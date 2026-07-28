import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ChevronDown, ChevronUp, Headphones, Mail, Phone, MapPin, Globe, Send, ArrowUpRight, Loader2, ShieldCheck } from "lucide-react";
import Separator from "./Separator";
import { submitToWeb3Forms } from "../lib/web3forms";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const [consultState, setConsultState] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [isConsultSubmitting, setIsConsultSubmitting] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [consultError, setConsultError] = useState("");

  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsConsultSubmitting(true);
    setConsultError("");

    const res = await submitToWeb3Forms({
      name: consultState.name,
      email: consultState.email,
      phone: consultState.phone,
      company: consultState.company,
      service: consultState.service,
      message: consultState.message,
      subject: `New Consultation Request from ${consultState.name}`,
    });

    setIsConsultSubmitting(false);
    if (res.success) {
      setConsultSubmitted(true);
    } else {
      setConsultError(res.message || "Failed to send. Please try again.");
    }
  };

  const faqItems = [
    {
      question: "What technologies does Indravex support?",
      answer: "We work with modern technologies including React, Next.js, Node.js, Python, FastAPI, MongoDB, AWS, Firebase, Docker and more to build scalable, secure and future-ready digital solutions."
    },
    {
      question: "How does AI integration work?",
      answer: "We design and deploy custom AI solutions, including LLM integration, agentic workflows, and predictive analytics, tailor-made to fit seamlessly into your existing software architecture."
    },
    {
      question: "Can you audit cloud architectures?",
      answer: "Yes, our certified cloud architect team audits existing infrastructure on AWS, Azure, or GCP to identify bottlenecks, optimize security protocols, and reduce overall hosting costs."
    },
    {
      question: "What is your project lifecycle?",
      answer: "Our lifecycle spans discovery, design, development, quality assurance, deployment, and ongoing post-launch maintenance, all executed using agile methodologies and clear communication milestones."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Absolutely. We offer dedicated SLA support packages, performance monitoring, routine security patches, and iterative feature development to ensure your software remains stable and competitive."
    }
  ];

  return (
    <section
      className="relative z-[20] py-24 md:py-32 px-6 md:px-12 bg-transparent"
      id="projects"
    >
      {/* Background Dots Deco - Left Top */}
      <div className="absolute top-12 left-12 w-28 h-24 opacity-30 pointer-events-none hidden md:block select-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#001D80 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="max-w-[1320px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: FAQ Section */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Header Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-sans text-[11px] sm:text-[12px] font-bold text-[#003CE5] tracking-[0.22em] uppercase block relative z-10"
                  style={{
                    textShadow: '0 0 8px #FFFFFF, 0 0 4px #FFFFFF, 0 1px 1px rgba(255, 255, 255, 0.9), 0 -0.5px 0.5px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  FAQ
                </span>
                <span className="w-8 h-[2px] bg-[#003CE5] rounded-full shadow-[0_0_6px_rgba(0,60,229,0.8)]" />
              </div>

              <h2
                className="font-serif text-[38px] sm:text-[48px] md:text-[54px] leading-[1.1] font-semibold tracking-tight mb-5"
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
                  Questions?
                </span>
                <br />
                <span
                  className="font-sans font-extrabold bg-gradient-to-br from-[#003CE5] to-[#001D80] bg-clip-text text-transparent tracking-tight inline-block relative mt-1"
                  style={{
                    textShadow: '0 1.5px 3px rgba(0, 29, 128, 0.25), 0 3px 8px rgba(0, 29, 128, 0.12)',
                  }}
                >
                  We've got answers.
                </span>
              </h2>

              <p
                className="font-sans text-[14.5px] sm:text-[16px] text-[#1C1D24] leading-[1.65] font-normal max-w-[440px]"
                style={{
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.12)',
                }}
              >
                Find quick answers to the most common questions about working with Indravex Technologies.
              </p>
            </div>

            {/* FAQ Accordion List */}
            <div className="flex flex-col gap-4">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="w-full rounded-[12px] transition-all duration-300 overflow-hidden"
                    style={{
                      backgroundColor: '#FAF9F6',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: isOpen
                        ? '0 12px 28px rgba(217, 194, 150, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.9), inset 0 0 0 3px rgba(0, 0, 0, 0.03), inset 0 0 0 4px rgba(217, 194, 150, 0.18)'
                        : '0 4px 12px rgba(0, 0, 0, 0.02), inset 0 0 0 1px rgba(255, 255, 255, 0.9), inset 0 0 0 3px rgba(0, 0, 0, 0.03), inset 0 0 0 4px rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none group/btn cursor-pointer"
                    >
                      <div className="flex items-center gap-4 flex-1 pr-3">
                        {/* Plus/Minus Icon */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0 transition-all duration-300 bg-gradient-to-br from-[#0B143E] to-[#01061C]`}
                          style={{
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.22), inset 0 1px 2px rgba(255, 255, 255, 0.35), inset 0 -1.5px 3px rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5 stroke-[3.5]" />
                          ) : (
                            <Plus className="w-3.5 h-3.5 stroke-[3.5]" />
                          )}
                        </div>

                        <span className="font-sans text-[14px] sm:text-[14.5px] font-bold text-[#0B143E] leading-[1.35] transition-colors duration-300 group-hover/btn:text-[#004BFF]">
                          {item.question}
                        </span>
                      </div>

                      {/* Right Chevron */}
                      <div className="text-[#0B143E] opacity-50 group-hover/btn:opacity-100 transition-opacity duration-300 shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    {/* Expandable Panel */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div
                            className="px-5 pb-5 pl-16 border-t border-[#F2EFE9]"
                            style={{
                              background: 'linear-gradient(180deg, rgba(247, 242, 232, 0.5) 0%, rgba(247, 242, 232, 0) 100%)'
                            }}
                          >
                            <p className="font-sans text-[12.5px] sm:text-[13px] text-[#4D4D4D] leading-[1.55] font-semibold pt-3">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Need Assistance Bottom Card */}
            <div
              className="w-full rounded-[20px] bg-white border border-[#F0F4FF] p-5 flex flex-col sm:flex-row items-center justify-between gap-5 transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 -3px 8px rgba(0, 0, 0, 0.04), inset 0 2px 4px rgba(255, 255, 255, 0.95)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03), inset 0 -3px 8px rgba(0, 0, 0, 0.04), inset 0 2px 4px rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 -3px 8px rgba(0, 0, 0, 0.04), inset 0 2px 4px rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="flex items-center gap-4">
                {/* Headphones Circle */}
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B143E] to-[#01061C] flex items-center justify-center text-white shrink-0"
                  style={{
                    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.22), inset 0 1.5px 3px rgba(255, 255, 255, 0.4), inset 0 -3px 6px rgba(0, 0, 0, 0.65)",
                  }}
                >
                  <Headphones className="w-5.5 h-5.5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-sans text-[14.5px] sm:text-[15px] font-bold text-[#0B143E]">
                    Need immediate assistance?
                  </h4>
                  <p className="font-sans text-[12px] text-[#4D4D4D] font-semibold mt-0.5">
                    Our team is available 24/7 to help you succeed.
                  </p>
                </div>
              </div>

              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("contact-form");
                  if (target) {
                    const lenis = (window as any).lenis;
                    if (lenis) {
                      lenis.scrollTo(target, { offset: -80, duration: 1.2 });
                    } else {
                      target.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                  }
                }}
                className="font-sans text-[12.5px] font-bold text-[#004BFF] tracking-wider hover:text-[#0B143E] transition-colors duration-300 flex items-center gap-1 uppercase whitespace-nowrap group/chat"
              >
                Chat with us
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/chat:translate-x-0.5 group-hover/chat:-translate-y-0.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form Box */}
          <div
            id="contact-form"
            className="lg:col-span-7 p-6 sm:p-10 relative overflow-hidden transition-all duration-500 rounded-[12px]"
            style={{
              background: `
                radial-gradient(circle at 50% 0%, rgba(96, 165, 250, 0.08) 0%, transparent 70%),
                radial-gradient(circle at 30% 20%, rgba(30, 58, 138, 0.15) 0%, transparent 60%),
                radial-gradient(circle at 70% 80%, rgba(30, 58, 138, 0.12) 0%, transparent 60%),
                #03071B
              `,
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25), 0 0 25px rgba(0, 75, 255, 0.08), inset 0 0 0 1px rgba(96, 165, 250, 0.12), inset 0 0 0 3px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Top-Right Dotted Decors in right-angled triangle */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-25 pointer-events-none hidden sm:block select-none">
              <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Row 1: y=8 */}
                <circle cx="8" cy="8" r="1.5" fill="white" />
                <circle cx="24" cy="8" r="1.5" fill="white" />
                <circle cx="40" cy="8" r="1.5" fill="white" />
                <circle cx="56" cy="8" r="1.5" fill="white" />
                <circle cx="72" cy="8" r="1.5" fill="white" />
                <circle cx="88" cy="8" r="1.5" fill="white" />
                <circle cx="104" cy="8" r="1.5" fill="white" />
                <circle cx="120" cy="8" r="1.5" fill="white" />

                {/* Row 2: y=24 */}
                <circle cx="24" cy="24" r="1.5" fill="white" />
                <circle cx="40" cy="24" r="1.5" fill="white" />
                <circle cx="56" cy="24" r="1.5" fill="white" />
                <circle cx="72" cy="24" r="1.5" fill="white" />
                <circle cx="88" cy="24" r="1.5" fill="white" />
                <circle cx="104" cy="24" r="1.5" fill="white" />
                <circle cx="120" cy="24" r="1.5" fill="white" />

                {/* Row 3: y=40 */}
                <circle cx="40" cy="40" r="1.5" fill="white" />
                <circle cx="56" cy="40" r="1.5" fill="white" />
                <circle cx="72" cy="40" r="1.5" fill="white" />
                <circle cx="88" cy="40" r="1.5" fill="white" />
                <circle cx="104" cy="40" r="1.5" fill="white" />
                <circle cx="120" cy="40" r="1.5" fill="white" />

                {/* Row 4: y=56 */}
                <circle cx="56" cy="56" r="1.5" fill="white" />
                <circle cx="72" cy="56" r="1.5" fill="white" />
                <circle cx="88" cy="56" r="1.5" fill="white" />
                <circle cx="104" cy="56" r="1.5" fill="white" />
                <circle cx="120" cy="56" r="1.5" fill="white" />

                {/* Row 5: y=72 */}
                <circle cx="72" cy="72" r="1.5" fill="white" />
                <circle cx="88" cy="72" r="1.5" fill="white" />
                <circle cx="104" cy="72" r="1.5" fill="white" />
                <circle cx="120" cy="72" r="1.5" fill="white" />

                {/* Row 6: y=88 */}
                <circle cx="88" cy="88" r="1.5" fill="white" />
                <circle cx="104" cy="88" r="1.5" fill="white" />
                <circle cx="120" cy="88" r="1.5" fill="white" />

                {/* Row 7: y=104 */}
                <circle cx="104" cy="104" r="1.5" fill="white" />
                <circle cx="120" cy="104" r="1.5" fill="white" />

                {/* Row 8: y=120 */}
                <circle cx="120" cy="120" r="1.5" fill="white" />
              </svg>
            </div>

            {/* Tag/Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-sans text-[11px] sm:text-[12px] font-bold text-[#60A5FA] tracking-[0.22em] uppercase block"
                >
                  Let's Build Together
                </span>
                <span className="w-8 h-[1px] bg-[#004BFF]" />
              </div>

              <h3
                className="font-serif text-[28px] sm:text-[36px] md:text-[42px] leading-[1.1] font-semibold text-white tracking-tight mb-4"
              >
                Ready to build something{" "}
                <span
                  className="text-[#60A5FA] italic font-serif font-normal block sm:inline"
                >
                  impactful together?
                </span>
              </h3>

              <p
                className="font-sans text-[13px] sm:text-[13.5px] text-white/70 leading-[1.5] max-w-[520px] font-normal"
              >
                Tell us about your goals and let's create intelligent, scalable and secure digital solutions together.
              </p>
            </div>

            {/* Side-by-side: Contact details on Left, Fields on Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch relative">

              {/* Vertical Dashed Separation line */}
              <div className="hidden md:block absolute top-0 bottom-0 left-[41.5%] w-px border-l border-white/10 pointer-events-none" />

              {/* Left Column: Contact Details (40% width) */}
              <div className="md:col-span-5 flex flex-col gap-6 justify-between pr-2 relative z-10">

                {/* Email Item */}
                <div className="flex items-start gap-3.5 group/info">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/info:bg-white/10 transition-colors duration-300">
                    <Mail className="w-4.5 h-4.5 text-[#60A5FA]" />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-sans text-[9px] font-bold text-[#60A5FA] tracking-wider uppercase mb-0.5"
                    >
                      Email
                    </span>
                    <a
                      href="mailto:indravextechnologies@gmail.com"
                      className="font-sans text-[12px] sm:text-[12.5px] text-white font-semibold hover:text-[#60A5FA] transition-colors break-all leading-snug"
                    >
                      indravextechnologies@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-3.5 group/info">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/info:bg-white/10 transition-colors duration-300">
                    <Phone className="w-4.5 h-4.5 text-[#60A5FA]" />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-sans text-[9px] font-bold text-[#60A5FA] tracking-wider uppercase mb-0.5"
                    >
                      Phone
                    </span>
                    <a
                      href="tel:+91-7666506689"
                      className="font-sans text-[12.5px] text-white font-semibold hover:text-[#60A5FA] transition-colors leading-snug"
                    >
                      +91-7666506689
                    </a>
                  </div>
                </div>

                {/* Headquarters Item */}
                <div className="flex items-start gap-3.5 group/info">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/info:bg-white/10 transition-colors duration-300">
                    <MapPin className="w-4.5 h-4.5 text-[#60A5FA]" />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-sans text-[9px] font-bold text-[#60A5FA] tracking-wider uppercase mb-0.5"
                    >
                      Headquarters
                    </span>
                    <span
                      className="font-sans text-[12px] text-white font-semibold leading-normal"
                    >
                      Pimple Gurav,<br />Pune, Maharashtra, India
                    </span>
                  </div>
                </div>

                {/* We Serve Item */}
                <div className="flex items-start gap-3.5 group/info">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/info:bg-white/10 transition-colors duration-300">
                    <Globe className="w-4.5 h-4.5 text-[#60A5FA]" />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-sans text-[9px] font-bold text-[#60A5FA] tracking-wider uppercase mb-0.5"
                    >
                      We Serve
                    </span>
                    <span
                      className="font-sans text-[12px] text-white/90 font-semibold leading-relaxed"
                    >
                      India <span className="text-[#60A5FA] mx-1">•</span> San Francisco<br />
                      London <span className="text-[#60A5FA] mx-1">•</span> Singapore
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: Form Inputs (60% width) */}
              {consultSubmitted ? (
                <div className="md:col-span-7 flex flex-col items-center justify-center p-8 bg-[#020612]/80 border border-[#60A5FA]/30 rounded-xl text-center">
                  <ShieldCheck className="w-12 h-12 text-[#60A5FA] mb-4" />
                  <h4 className="font-serif text-2xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="font-sans text-sm text-white/70">Your message has been submitted. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleConsultSubmit}
                  className="md:col-span-7 flex flex-col gap-4 pl-0 md:pl-4 relative z-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={consultState.name}
                      onChange={(e) => setConsultState({ ...consultState, name: e.target.value })}
                      className="w-full bg-[#020612] border border-black/50 focus:border-[#60A5FA] focus:outline-none text-white rounded-none px-4 py-3.5 font-sans text-[13px] placeholder-white/30 transition-all duration-300"
                      style={{
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.07)'
                      }}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={consultState.email}
                      onChange={(e) => setConsultState({ ...consultState, email: e.target.value })}
                      className="w-full bg-[#020612] border border-black/50 focus:border-[#60A5FA] focus:outline-none text-white rounded-none px-4 py-3.5 font-sans text-[13px] placeholder-white/30 transition-all duration-300"
                      style={{
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.07)'
                      }}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={consultState.phone}
                      onChange={(e) => setConsultState({ ...consultState, phone: e.target.value })}
                      className="w-full bg-[#020612] border border-black/50 focus:border-[#60A5FA] focus:outline-none text-white rounded-none px-4 py-3.5 font-sans text-[13px] placeholder-white/30 transition-all duration-300"
                      style={{
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.07)'
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={consultState.company}
                      onChange={(e) => setConsultState({ ...consultState, company: e.target.value })}
                      className="w-full bg-[#020612] border border-black/50 focus:border-[#60A5FA] focus:outline-none text-white rounded-none px-4 py-3.5 font-sans text-[13px] placeholder-white/30 transition-all duration-300"
                      style={{
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.07)'
                      }}
                    />
                  </div>

                  <div className="relative">
                    <select
                      className="w-full bg-[#020612] border border-black/50 focus:border-[#60A5FA] focus:outline-none text-white/70 rounded-none px-4 py-3.5 font-sans text-[13px] appearance-none cursor-pointer transition-all duration-300"
                      style={{
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.07)'
                      }}
                      value={consultState.service}
                      onChange={(e) => setConsultState({ ...consultState, service: e.target.value })}
                      required
                    >
                      <option value="" disabled className="text-white/40 bg-[#020612]">Select Service</option>
                      <option value="web-dev" className="text-white bg-[#020612]">Web Development</option>
                      <option value="mobile-app" className="text-white bg-[#020612]">Mobile App Development</option>
                      <option value="custom-software" className="text-white bg-[#020612]">Custom Software Development</option>
                      <option value="ai-automation" className="text-white bg-[#020612]">AI & Automation Solutions</option>
                      <option value="digital-marketing" className="text-white bg-[#020612]">Digital Marketing</option>
                      <option value="it-staffing" className="text-white bg-[#020612]">IT Staffing Solutions</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={consultState.message}
                    onChange={(e) => setConsultState({ ...consultState, message: e.target.value })}
                    className="w-full bg-[#020612] border border-black/50 focus:border-[#60A5FA] focus:outline-none text-white rounded-none px-4 py-3.5 font-sans text-[13px] placeholder-white/30 resize-none transition-all duration-300"
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.07)'
                    }}
                    required
                  />

                  {consultError && (
                    <p className="text-red-400 text-xs font-semibold">{consultError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isConsultSubmitting}
                    className="group relative w-full py-4 text-white font-sans text-[13px] font-bold tracking-[0.2em] uppercase rounded-[8px] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden cursor-pointer disabled:opacity-60"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 50%, rgba(0,75,255,0.2) 50.1%, #001254 100%)',
                      backgroundColor: '#001C80',
                      border: '1.5px solid rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 8px 24px rgba(0, 20, 100, 0.3), inset 0 1.5px 2px rgba(255, 255, 255, 0.45), inset 0 -2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {isConsultSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-20 transition-colors duration-300">
                          Send Message
                        </span>
                        <div className="relative z-20 w-4 h-4 flex items-center justify-center overflow-hidden">
                          <Send className="w-3.5 h-3.5 transition-all duration-300 transform group-hover:translate-x-5 group-hover:-translate-y-5" />
                          <Send className="w-3.5 h-3.5 absolute transition-all duration-300 transform -translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 text-[#004BFF]" />
                        </div>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </div>

      {/* Overlapping Separator to next page */}
      <Separator />
    </section>
  );
}
