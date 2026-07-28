import React from "react";
import { motion } from "motion/react";
import { hospitalityHeroChips } from "../../../data/hospitality";
import styles from "../Healthcare.module.css";

export default function HospitalityHero() {
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
            <b>Hospitality</b>
          </div>

          <h1 
            className="font-serif text-[42px] sm:text-[52px] md:text-[62px] leading-[1.04] font-extrabold tracking-normal mb-6 text-[#000000]"
            style={{ WebkitTextStroke: '0.55px #000000' }}
          >
            Hospitality <br />
            <span className="text-[#004BFF] inline-block font-sans font-extrabold text-[32px] sm:text-[42px] md:text-[48px] tracking-tight mt-2" style={{ WebkitTextStroke: '0.55px #004BFF' }}>
              Connected Guest Experiences.
            </span>
          </h1>

          <p className={styles.heroCopy}>
            We design and engineer enterprise hospitality technologies that integrate keyless mobile access, cloud PMS, smart IoT, and high-density guest networking into a single unified ecosystem.
          </p>

          {/* Chips styled with 3D glass cards */}
          <div className="mt-8 grid grid-cols-2 gap-3.5 max-w-[440px]">
            {hospitalityHeroChips.map((chip, index) => {
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
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EEF2F6] to-[#FAF9F6] flex items-center justify-center border border-[#E2EAF8] rounded-lg">
              <span className="text-[#004BFF] font-serif italic text-lg opacity-45">Smart Resort & Hotel Tech Mockup</span>
            </div>
            <div className={styles.heroLines} />
            <div className={styles.annotation}>
              Comfort. Connectivity. Innovation.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
