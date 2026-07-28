import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import styles from "../Healthcare.module.css";

export default function HospitalityCTA() {
  return (
    <section className={`${styles.section} ${styles.closing}`}>
      <div className={`${styles.container} ${styles.closingGrid}`}>
        {/* Left Column: Text and Button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.closingCopy}
        >
          <div className={styles.eyebrow}>Let&apos;s Connect</div>
          
          <h2 className={styles.sectionTitle}>
            Elevate Your Guest Experience
          </h2>

          <div className={styles.ornament}>
            <i />
          </div>

          <p className="font-sans text-[15px] text-[#5C5C5C] leading-[1.7] mt-5 mb-8 font-medium">
            Partner with us to deploy modern hospitality tech infrastructure that delights guests, elevates reviews, and optimizes property operations.
          </p>

          <a href="/contact" className={styles.button}>
            Transform Your Property <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Right Column: Visual Mockup */}
        <div className={styles.closingVisual}>
          <div className="w-full h-full relative min-h-[300px] bg-gradient-to-br from-[#EEF2F6] to-[#FAF9F6] flex items-center justify-center border border-[#E2EAF8] rounded-lg">
            <span className="text-[#004BFF] font-serif italic text-lg opacity-45">Luxury Hotel Tech Suite Mockup</span>
          </div>
          <div className={styles.goldEdge} />
        </div>
      </div>
    </section>
  );
}
