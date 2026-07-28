import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqQuestions } from "../../../data/faqs";
import styles from "../Healthcare.module.css";

export default function FAQAccordion() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <section className={`${styles.section} ${styles.offer}`}>
      <div className={styles.container}>
        {/* Centered Heading and Intro */}
        <div className="text-center max-w-[750px] mx-auto mb-12 flex flex-col items-center">
          <div className={styles.eyebrow}>Frequently Asked Questions</div>
          <h2 className="font-serif text-[34px] sm:text-[42px] md:text-[46px] leading-[1.12] font-semibold tracking-tight text-[#0B143E] uppercase mt-4 mb-4 text-center">
            Technical & Collaboration FAQ
          </h2>
          <p className="font-sans text-[14.5px] sm:text-[16.5px] text-[#4D4D4D] leading-[1.65] font-medium text-center max-w-[620px]">
            Read detailed answers on how we handle security, custom AI implementations, cloud optimization audits, and sprint delivery.
          </p>
        </div>

        {/* Global Gradient Definition for Border Beam */}
        <svg style={{ width: 0, height: 0, position: 'absolute', pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="faq-border-beam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#93C5FD" />
              <stop offset="70%" stopColor="#003CE5" />
              <stop offset="100%" stopColor="#0B143E" />
            </linearGradient>
          </defs>
        </svg>

        {/* Centered Accordion Stack Column */}
        <div className="flex flex-col gap-4 max-w-[800px] mx-auto w-full">
          {faqQuestions.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = activeIdx === index;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => toggleFAQ(index)}
                className="group relative flex flex-col p-6 rounded-[22px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 cursor-pointer transform"
                style={{
                  backgroundColor: isOpen ? 'rgba(240, 244, 250, 0.65)' : 'rgba(240, 244, 250, 0.5)',
                  border: isOpen ? '1px solid rgba(0, 75, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.65)',
                  boxShadow: isOpen ? '0 16px 40px rgba(11, 20, 62, 0.1), inset 0 1.5px 2px rgba(255, 255, 255, 0.8)' : '0 8px 32px rgba(11, 20, 62, 0.06), inset 0 1.5px 2px rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(32px)',
                  WebkitBackdropFilter: 'blur(32px)',
                }}
              >
                {/* Border Beam Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-[22px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <rect 
                    x="0.5" 
                    y="0.5" 
                    width="calc(100% - 1px)" 
                    height="calc(100% - 1px)" 
                    rx="21.5px" 
                    fill="none" 
                    stroke="url(#faq-border-beam)" 
                    strokeWidth="1.5"
                    className="animate-border-beam filter drop-shadow-[0_0_3px_rgba(230,180,85,0.45)] drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]"
                  />
                </svg>

                <div className="relative z-20 flex flex-col w-full">
                  {/* Question Row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div 
                        className="card-icon-container text-[#004BFF] shrink-0"
                        style={{
                          filter: 'drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 0px rgba(255, 255, 255, 0.8))'
                        }}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <h3 
                        className="font-sans font-bold text-[16px] text-[#0B143E] leading-snug"
                        style={{
                          textShadow: '0 -0.5px 0.5px rgba(11, 20, 62, 0.15), 0 1px 0px rgba(255, 255, 255, 0.9)'
                        }}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <span className="text-[#0B143E] font-bold text-[18px] transition-transform duration-300 transform" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                      ＋
                    </span>
                  </div>

                  {/* Expandable Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-[#E2EAF8] mt-4">
                          <p 
                            className="font-sans text-[13.5px] text-[#5C5C5C] font-semibold leading-relaxed"
                            style={{
                              textShadow: '0 -0.5px 0.5px rgba(0, 0, 0, 0.15), 0 1px 0px rgba(255, 255, 255, 0.8)'
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
