import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Shield, Activity, Clock3, Sparkles } from "lucide-react";
import { healthcareChecklist, healthcareStats } from "../../data/healthcare";
import styles from "./Healthcare.module.css";

export default function HealthcareAI() {
  const statIcons = [Clock3, Activity, Shield, Sparkles];

  return (
    <section className={`${styles.section} ${styles.thoughtful}`}>
      <div className={`${styles.container} ${styles.thoughtfulGrid}`}>
        
        {/* Left Column: Visual Panel (Masked Panel & Image) */}
        <div className={`${styles.visualPanel} !min-h-0 h-full`}>
          <div className={`${styles.maroonPanel} !static !inset-0 !mask-none !p-8 sm:!p-12 !rounded-[24px] min-h-[350px] w-full flex items-center shadow-lg border border-[rgba(255,255,255,0.05)]`}>
            <div className={`${styles.panelText} !static !max-w-none w-full`}>
              <h2>Built on Intelligence</h2>
              <p>Our proprietary engineering framework ensures rapid prototyping, zero-downtime cloud deployments, and optimal code quality—reducing time to market and operational risk.</p>
              
              <ul className={styles.checklistList}>
                {healthcareChecklist.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={styles.checklistItem}
                  >
                    <CheckCircle2 size={15} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Approach Grid (Stats Grid) */}
        <div className={styles.approach}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.eyebrow}>Performance Metrics</div>
            <h2 className={styles.sectionTitle}>Engineered for Excellence</h2>
            
            <div className={styles.ornament}>
              <i />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {healthcareStats.map((stat, index) => {
              const Icon = statIcons[index] || Shield;
              return (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-5 rounded-[18px] border border-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: 'rgba(240, 244, 250, 0.55)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div className="card-icon-container text-[#004BFF] shrink-0 mt-0.5">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-serif text-[26px] font-bold text-[#0B143E] leading-none mb-1">{stat.number}</h3>
                    <p className="font-sans text-[12.5px] text-[#5C5C5C] font-semibold leading-snug">{stat.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
