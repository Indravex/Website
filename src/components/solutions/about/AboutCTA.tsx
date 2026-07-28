import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import styles from "../Healthcare.module.css";

export default function AboutCTA() {
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
            Let&apos;s Build The Future Together
          </h2>

          <div className={styles.ornament}>
            <i />
          </div>

          <p className="font-sans text-[15px] text-[#5C5C5C] leading-[1.7] mt-5 mb-8 font-medium">
            Partner with our engineering team to solve your toughest software challenges and scale your enterprise technology.
          </p>

          <a href="/contact" className={styles.button}>
            Establish Handshake <ArrowRight size={15} />
          </a>
        </motion.div>

        <div className={`${styles.closingVisual} hidden lg:block`}>
          <div className="w-full h-full relative min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" 
              alt="Engineering Workspace Collaboration"
              className="absolute inset-0 w-full h-full object-cover border border-[#E2EAF8] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
