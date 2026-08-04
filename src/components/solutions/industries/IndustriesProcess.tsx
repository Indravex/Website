import React from "react";
import { motion } from "motion/react";
import { WORKFLOW_PROCESS_STEPS } from "../../../data/industries";
import styles from "../Healthcare.module.css";

export default function IndustriesProcess() {
  return (
    <section className={`${styles.section} ${styles.journey}`} id="engineering-process">
      <div className={styles.container}>
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className={styles.eyebrow}>Execution Framework</div>
          <h2 className="font-serif text-[32px] sm:text-[42px] font-extrabold text-[#0B143E] mt-3 uppercase tracking-tight">
            Our 8-Stage Delivery Cycle
          </h2>
          <div className={`${styles.ornament} ${styles.centerOrnament}`}>
            <i />
          </div>
          <p className="font-sans text-[15px] text-[#4D4D4D] leading-relaxed font-medium mt-4">
            A battle-tested software engineering process designed to take enterprise products from initial napkin sketch to scaled deployment.
          </p>
        </div>

        {/* 8-Stage Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {WORKFLOW_PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="bg-white border border-[#E2EAF8] rounded-[20px] p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#004BFF]/40 hover:shadow-lg transition-all duration-300"
              >
                {/* Stage Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-[11px] font-extrabold text-[#004BFF] tracking-[0.2em] uppercase bg-[#004BFF]/8 px-3 py-1 rounded-full">
                      {step.phase}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[#0B143E] text-white flex items-center justify-center shrink-0 group-hover:bg-[#004BFF] transition-colors">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-serif text-[18px] font-bold text-[#0B143E] leading-snug">
                      {step.name}
                    </h3>
                  </div>

                  <p className="font-sans text-[13px] text-[#5C5C5C] leading-relaxed font-medium mt-2">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator Arrow */}
                {idx < WORKFLOW_PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute right-2 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 text-[#004BFF]/30 group-hover:text-[#004BFF] transition-colors">
                    <span className="text-lg font-bold">→</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
