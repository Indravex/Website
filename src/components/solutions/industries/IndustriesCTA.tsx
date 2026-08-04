import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import styles from "../Healthcare.module.css";

export default function IndustriesCTA() {
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
          
          <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', lineHeight: 1.15 }}>
            Accelerate Your <br className="hidden sm:inline" /> Industry Vertical
          </h2>

          <div className={styles.ornament}>
            <i />
          </div>

          <p className="font-sans text-[15px] text-[#5C5C5C] leading-[1.65] mt-4 mb-6 font-medium max-w-[480px]">
            Partner with our domain architects and senior engineers to build software solutions customized for your exact market vertical.
          </p>

          <a href="/contact" className={styles.button}>
            Initiate Consultation <ArrowRight size={15} />
          </a>
        </motion.div>

        <div className={`${styles.closingVisual} hidden lg:block`}>
          <div className="w-full h-full relative min-h-[320px]">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Engineering Team Consultation"
              className="absolute inset-0 w-full h-full object-cover border border-[#E2EAF8] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
