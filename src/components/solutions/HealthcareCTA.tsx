import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import styles from "./Healthcare.module.css";

export default function HealthcareCTA() {
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
            Let&apos;s Build Better <br className="hidden sm:inline" /> IT Environments
          </h2>

          <div className={styles.ornament}>
            <i />
          </div>

          <p className="font-sans text-[15px] text-[#5C5C5C] leading-[1.65] mt-4 mb-6 font-medium max-w-[480px]">
            Partner with us to create digital products and cloud architectures that elevate your business and outpace the competition.
          </p>

          <a href="/contact" className={styles.button}>
            Let&apos;s Connect <ArrowRight size={15} />
          </a>
        </motion.div>

        <div className={`${styles.closingVisual} hidden lg:block`}>
          <div className="w-full h-full relative min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800" 
              alt="Enterprise IT & UI Design Architecture"
              className="absolute inset-0 w-full h-full object-cover border border-[#E2EAF8] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
