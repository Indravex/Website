import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { healthcareHeroChips } from "../../data/healthcare";
import styles from "./Healthcare.module.css";

export default function HealthcareHero() {
  const [typedTitle, setTypedTitle] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");

  useEffect(() => {
    const titleText = "IT Services";
    const subtitleText = "Systems that scale. Built for performance.";
    let titleIndex = 0;
    let subtitleIndex = 0;

    const titleInterval = setInterval(() => {
      if (titleIndex < titleText.length) {
        setTypedTitle(titleText.substring(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        const subtitleInterval = setInterval(() => {
          if (subtitleIndex < subtitleText.length) {
            setTypedSubtitle(subtitleText.substring(0, subtitleIndex + 1));
            subtitleIndex++;
          } else {
            clearInterval(subtitleInterval);
          }
        }, 55);
      }
    }, 90);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >

          <h1 
            className="font-serif text-[42px] sm:text-[52px] md:text-[62px] leading-[1.04] font-extrabold tracking-normal mb-6 text-[#000000] min-h-[140px]"
            style={{ WebkitTextStroke: '0.55px #000000' }}
          >
            {typedTitle}
            {typedTitle.length < 11 && <span className="animate-pulse text-[#004BFF]">|</span>}
            <br />
            {typedTitle.length >= 11 && (
              <span className="text-[#004BFF] inline-block font-sans font-extrabold text-[32px] sm:text-[42px] md:text-[48px] tracking-tight mt-2" style={{ WebkitTextStroke: '0.55px #004BFF' }}>
                {typedSubtitle}
                {typedSubtitle.length < 41 && <span className="animate-pulse text-[#0B143E]">|</span>}
              </span>
            )}
          </h1>

          <p className={styles.heroCopy}>
            We design and engineer enterprise IT solutions that combine high security, cloud scalability, and seamless user experiences—delivering software that drives digital transformation.
          </p>

          {/* Chips instead of buttons, styled for high-end alignment */}
          <div className="mt-8 grid grid-cols-2 gap-3.5 max-w-[440px]">
            {healthcareHeroChips.map((chip, index) => {
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

        {/* Right Column: Hero Visual Block */}
        <motion.div
          className={`${styles.heroVisual} hidden lg:block`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="w-full h-full relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
              alt="Enterprise IT & Cloud Infrastructure"
              className="absolute inset-0 w-full h-full object-cover border border-[#E2EAF8] rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
