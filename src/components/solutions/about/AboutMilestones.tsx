import React from "react";
import { motion } from "motion/react";
import { aboutMilestones } from "../../../data/aboutUs";
import styles from "../Healthcare.module.css";

export default function AboutMilestones() {
  return (
    <section className={`${styles.section} ${styles.journey}`}>
      <div className={styles.container}>
        <div className={styles.centerHeading}>
          <div className={styles.eyebrow}>Company Evolution</div>
        </div>
        
        <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#0B143E] text-center mt-4 uppercase">
          Our Journey & Growth
        </h2>

        <p className="font-sans text-[14px] text-[#5C5C5C] leading-[1.6] max-w-[580px] mx-auto text-center mt-3 font-medium">
          From early foundations to enterprise delivery, our commitment to technical precision and engineering integrity remains unchanged.
        </p>

        <div className={`${styles.timeline} lg:!grid-cols-5`}>
          {aboutMilestones.map((step, index) => {
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
                <div 
                  className={styles.stepIcon}
                  style={{
                    border: '1.5px solid rgba(0, 75, 255, 0.25)',
                    boxShadow: '0 10px 24px rgba(11, 20, 62, 0.12), inset 0 2px 3px #FFFFFF, inset 0 -3px 6px rgba(11, 20, 62, 0.06), 0 0 15px rgba(0, 75, 255, 0.08)',
                    background: 'radial-gradient(circle at 30% 30%, #FFFFFF 30%, #EBF3FC 75%, #C9DDF5 100%)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 75, 255, 0.2), inset 0 2px 3px #FFFFFF, inset 0 -3px 8px rgba(0, 75, 255, 0.1), 0 0 20px rgba(0, 75, 255, 0.15)';
                    e.currentTarget.style.borderColor = '#004BFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(11, 20, 62, 0.12), inset 0 2px 3px #FFFFFF, inset 0 -3px 6px rgba(11, 20, 62, 0.06), 0 0 15px rgba(0, 75, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(0, 75, 255, 0.25)';
                  }}
                >
                  <Icon size={24} strokeWidth={2.5} className="text-[#004BFF]" />
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
