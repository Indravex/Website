import React from "react";
import { motion } from "motion/react";
import { INDUSTRIES_HERO_CHIPS } from "../../../data/industries";
import styles from "../Healthcare.module.css";

export default function IndustriesHero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className={styles.breadcrumb}>
            <span>Solutions</span>
            <span className={styles.crumbArrow}>›</span>
            <b>Industries</b>
          </div>

          <h1 
            className="font-serif text-[40px] sm:text-[52px] md:text-[60px] leading-[1.05] font-extrabold tracking-normal mb-6 text-[#000000]"
            style={{ WebkitTextStroke: '0.55px #000000' }}
          >
            Industries We Serve <br />
            <span className="text-[#004BFF] inline-block font-sans font-extrabold text-[28px] sm:text-[38px] md:text-[44px] tracking-tight mt-2" style={{ WebkitTextStroke: '0.55px #004BFF' }}>
              Tailored Engineering Verticals.
            </span>
          </h1>

          <p className={styles.heroCopy}>
            From financial ledgers to smart hospital workflows and logistics algorithms, we design, build, and scale mission-critical software systems across 9 key industry sectors.
          </p>

          {/* Chips styled with 3D glass cards */}
          <div className="mt-8 grid grid-cols-2 gap-3.5 max-w-[460px]">
            {INDUSTRIES_HERO_CHIPS.map((chip, index) => {
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
              alt="Indravex Multi-Industry Software Architecture"
              className="absolute inset-0 w-full h-full object-cover border border-[#E2EAF8] rounded-lg"
            />
            <div className={styles.heroLines} />
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-[#0B143E]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-sans text-xs font-semibold shadow-md">
              <span>Domain Depth. Scalable Software.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
