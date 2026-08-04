import React from "react";
import { motion } from "motion/react";
import { INDUSTRIES_LIST } from "../../../data/industries";
import styles from "../Healthcare.module.css";
import { ArrowUpRight } from "lucide-react";

export default function IndustriesGrid() {
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
    <section className={`${styles.section} ${styles.offer}`} id="industries-grid">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className={styles.eyebrow}>Domain Expertise</div>
          <h2 className="font-serif text-[32px] sm:text-[42px] font-extrabold text-[#0B143E] mt-3 uppercase tracking-tight">
            Comprehensive Industry Solutions
          </h2>
          <div className={`${styles.ornament} ${styles.centerOrnament}`}>
            <i />
          </div>
          <p className="font-sans text-[15px] text-[#4D4D4D] leading-relaxed font-medium mt-4">
            We combine deep sector knowledge with modern full-stack engineering to build custom digital ecosystems.
          </p>
        </div>

        {/* 9 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INDUSTRIES_LIST.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[24px] p-7 flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(246, 242, 232, 0.78)';
                  e.currentTarget.style.border = '1px solid rgba(0, 75, 255, 0.5)';
                  e.currentTarget.style.boxShadow = '0 24px 48px rgba(11, 20, 62, 0.14), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.95), 0 0 20px rgba(0, 75, 255, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(246, 242, 232, 0.58)';
                  e.currentTarget.style.border = '1px solid rgba(180, 200, 230, 0.65)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(11, 20, 62, 0.08), inset 0 0 12px rgba(0, 0, 0, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), inset 0 -1.5px 2.5px rgba(0, 0, 0, 0.03)';
                }}
              >
                {/* Sheen sweep effect */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[24px] z-10">
                  <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
                </div>

                <div className="relative z-20">
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-sans font-extrabold text-[12px] tracking-[0.2em] text-[#004BFF] uppercase">
                      {item.number}
                    </span>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110"
                      style={iconCircleStyle}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-[22px] font-bold text-[#0B143E] group-hover:text-[#004BFF] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[13.5px] text-[#4D4D4D] leading-relaxed font-medium mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Sub-capabilities Tags */}
                <div className="relative z-20 pt-4 border-t border-[#0B143E]/10">
                  <div className="flex flex-wrap gap-2">
                    {item.capabilities.map((cap, capIdx) => (
                      <span
                        key={capIdx}
                        className="font-sans text-[11px] font-semibold text-[#0B143E]/80 bg-white/70 border border-[#0B143E]/10 px-2.5 py-1 rounded-md"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-end gap-1 mt-5 text-[#004BFF] font-sans font-bold text-[12px] group-hover:translate-x-1 transition-transform">
                    <span>Explore Solutions</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
