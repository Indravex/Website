import React from "react";
import { motion } from "motion/react";
import { faqProcess } from "../../../data/faqs";
import styles from "../Healthcare.module.css";

export default function FAQProcess() {
  return (
    <section className={`${styles.section} ${styles.journey}`}>
      <div className={styles.container}>
        <div className={styles.centerHeading}>
          <div className={styles.eyebrow}>Engagement Process</div>
        </div>
        
        <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#0B143E] text-center mt-4 uppercase">
          From Blueprint to Delivery
        </h2>

        <p className="font-sans text-[14px] text-[#5C5C5C] leading-[1.6] max-w-[580px] mx-auto text-center mt-3 font-medium">
          A transparent, step-by-step engagement workflow that guarantees seamless onboarding, architectural clarity, and precise milestones.
        </p>

        <div className={styles.timeline}>
          {faqProcess.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.journeyStep}
              >
                <div className={styles.stepIcon}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                
                <div className={styles.stepNumber}>
                  {step.number}
                </div>
                
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
