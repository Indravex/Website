import React from "react";
import { motion } from "motion/react";
import { PORTFOLIO_HERO_TEXT, PORTFOLIO_HERO_CHIPS } from "../../../data/portfolio";
import styles from "../Healthcare.module.css";

export default function PortfolioHero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className={styles.breadcrumb}>
            <span>Work</span>
            <span className={styles.crumbArrow}>›</span>
            <b>Portfolio</b>
          </div>

          <h1 
            className="font-serif text-[38px] sm:text-[50px] md:text-[58px] leading-[1.05] font-extrabold tracking-normal mb-6 text-[#000000]"
            style={{ WebkitTextStroke: '0.55px #000000' }}
          >
            {PORTFOLIO_HERO_TEXT.title} <br />
            <span className="text-[#004BFF] inline-block font-sans font-extrabold text-[28px] sm:text-[38px] md:text-[44px] tracking-tight mt-2" style={{ WebkitTextStroke: '0.55px #004BFF' }}>
              {PORTFOLIO_HERO_TEXT.subtitle}
            </span>
          </h1>

          <p className={styles.heroCopy}>
            {PORTFOLIO_HERO_TEXT.description}
          </p>

          {/* Chips styled with 3D glass cards */}
          <div className="mt-8 grid grid-cols-2 gap-3.5 max-w-[460px]">
            {PORTFOLIO_HERO_CHIPS.map((chip, index) => {
              const Icon = chip.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3.5 rounded-[16px] border border-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: 'rgba(240, 244, 250, 0.55)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div className="card-icon-container text-[#004BFF] shrink-0">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <span className="font-sans font-bold text-[12px] text-[#0B143E] leading-tight">
                    {chip.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Visual Mockup */}
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="w-full h-full relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
              alt="Indravex Portfolio Software Systems Showcase"
              className="absolute inset-0 w-full h-full object-cover border border-[#E2EAF8] rounded-lg"
            />
            <div className={styles.heroLines} />
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-[#0B143E]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-sans text-xs font-semibold shadow-md">
              <span>Proven Impact. Scalable Software.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
