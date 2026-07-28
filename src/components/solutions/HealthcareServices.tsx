import React from "react";
import { motion } from "motion/react";
import { healthcareServices } from "../../data/healthcare";
import styles from "./Healthcare.module.css";

export default function HealthcareServices() {
  return (
    <section className={`${styles.section} ${styles.offer}`}>
      <div className={`${styles.container} ${styles.offerGrid}`}>
        {/* Left Column: Heading and Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.eyebrow}>Software engineered for impact. Built for scale.</div>
          <h2 className={styles.sectionTitle}>Built for Every IT Need</h2>
          <p className={styles.sectionCopy}>
            From cloud infrastructure to AI integrations, we deliver end-to-end IT solutions that balance technical performance, security standards, and business agility.
          </p>
        </motion.div>

        {/* Global Gradient Definition for the Border Beam effect */}
        <svg style={{ width: 0, height: 0, position: 'absolute', pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="services-border-beam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#93C5FD" />
              <stop offset="70%" stopColor="#003CE5" />
              <stop offset="100%" stopColor="#0B143E" />
            </linearGradient>
          </defs>
        </svg>

        {/* Right Column: Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {healthcareServices.map((service, index) => {
            const Icon = service.icon;
            const num = (index + 1).toString().padStart(2, '0');
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[22px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.025] cursor-pointer transform"
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
                {/* Lustrous Border Beam Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-[22px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <rect 
                    x="0.5" 
                    y="0.5" 
                    width="calc(100% - 1px)" 
                    height="calc(100% - 1px)" 
                    rx="21.5px" 
                    fill="none" 
                    stroke="url(#services-border-beam)" 
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
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <span 
                        className="font-sans text-[11px] font-bold text-[#0B143E]/50 tracking-[0.05em]"
                        style={{
                          textShadow: '0 -1px 1px rgba(0, 0, 0, 0.1), 0 1px 0px rgba(255, 255, 255, 0.8)'
                        }}
                      >
                        {num}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 
                      className="font-sans font-bold text-[17px] text-[#0B143E] mt-6 mb-2 leading-snug"
                      style={{
                        textShadow: '0 -1px 1px rgba(11, 20, 62, 0.25), 0 1px 0px rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Card Description */}
                    <p 
                      className="font-sans text-[13px] text-[#5C5C5C] font-semibold leading-relaxed mb-6"
                      style={{
                        textShadow: '0 -0.5px 0.5px rgba(0, 0, 0, 0.15), 0 1px 0px rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      {service.body}
                    </p>
                  </div>

                  {/* Bottom Diagonal Arrow */}
                  <div 
                    className="flex items-center text-[#0B143E] mt-2"
                    style={{
                      filter: 'drop-shadow(0 1px 2px rgba(11, 20, 62, 0.2))'
                    }}
                  >
                    <span className="font-sans text-[11.5px] font-extrabold tracking-wider uppercase group-hover:text-[#004BFF] transition-colors duration-300">
                      Explore Capabilities
                    </span>
                    <span className="ml-1.5 text-[12px] font-bold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#004BFF]">↗</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
