import React from "react";
import { motion } from "motion/react";
import { aboutHeroChips } from "../../../data/aboutUs";
import styles from "../Healthcare.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >

          <h1 
            className="font-serif text-[42px] sm:text-[52px] md:text-[62px] leading-[1.04] font-extrabold tracking-normal mb-6 text-[#000000]"
            style={{ WebkitTextStroke: '0.55px #000000' }}
          >
            About Us <br />
            <span className="text-[#004BFF] inline-block font-sans font-extrabold text-[32px] sm:text-[42px] md:text-[48px] tracking-tight mt-2" style={{ WebkitTextStroke: '0.55px #004BFF' }}>
              Engineering Digital Intelligence.
            </span>
          </h1>

          <p className={styles.heroCopy}>
            We are a team of senior software architects, designers, and systems engineers dedicated to crafting high-performance, secure, and scalable digital products for ambitious enterprises worldwide.
          </p>

          {/* Chips styled with 3D glass cards */}
          <div className="mt-8 grid grid-cols-2 gap-3.5 max-w-[440px]">
            {aboutHeroChips.map((chip, index) => {
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
          className={`${styles.heroVisual} hidden lg:block`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="w-full h-full relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Enterprise Engineering Team & Tech Company"
              className="absolute inset-0 w-full h-full object-cover border border-[#E2EAF8] rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
