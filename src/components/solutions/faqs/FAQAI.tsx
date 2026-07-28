import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Shield, Activity, Clock3, Sparkles } from "lucide-react";
import { faqChecklist, faqStats } from "../../../data/faqs";
import styles from "../Healthcare.module.css";

export default function FAQAI() {
  const statIcons = [Clock3, Activity, Shield, Sparkles];

  return (
    <section className={`${styles.section} ${styles.thoughtful}`}>
      <div className={`${styles.container} ${styles.thoughtfulGrid}`}>
        
        {/* Left Column: Dark Panel */}
        <div className={styles.visualPanel}>
          <div className={styles.maroonPanel}>
            <div className={styles.panelText}>
              <h2>System Governance</h2>
              <p>We deliver comprehensive documentation, rigorous API integration blueprints, and clean modular code with every contract handover.</p>
              
              <ul className={styles.checklistList}>
                {faqChecklist.map((item, index) => (
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
          
          <div className={styles.thoughtfulImage}>
            <div className="w-full h-full relative min-h-[380px] bg-gradient-to-br from-[#EEF2F6] to-[#FAF9F6] flex items-center justify-center border border-[#E2EAF8]">
              <span className="text-[#004BFF] font-serif italic text-lg opacity-45">Technical SLA Overview</span>
            </div>
          </div>
          
          <div className={styles.compassBadge}>
            <Activity size={24} strokeWidth={1.5} />
          </div>
        </div>

        {/* Right Column: Stat Cards */}
        <div className={styles.approach}>
          <div className={styles.eyebrow}>Support Metrics</div>
          <h2 className={styles.sectionTitle}>Guaranteed Technical Response</h2>
          
          <div className={styles.ornament}>
            <i />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {faqStats.map((stat, index) => {
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
