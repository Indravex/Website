import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, Lock } from "lucide-react";
import { PORTFOLIO_SUMMARY_TEXT } from "../../../data/portfolio";
import styles from "../Healthcare.module.css";

export default function PortfolioSummaryCTA() {
  return (
    <section className={`${styles.section} ${styles.closing}`}>
      <div className={styles.container}>
        {/* Full-width Glass Card Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[28px] p-8 sm:p-12 text-center relative overflow-hidden bg-[#0B143E] text-white shadow-2xl border border-white/10"
        >
          {/* Ambient Glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#004BFF]/20 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#C5A880] font-sans text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#004BFF]" />
              <span>Enterprise Software Excellence</span>
            </div>

            <h2 className="font-serif text-[28px] sm:text-[38px] md:text-[44px] font-bold leading-tight text-white">
              Tailored Engineering Solutions For Any Scale
            </h2>

            <p className="font-sans text-[15px] sm:text-[16.5px] text-white/85 leading-relaxed font-medium">
              {PORTFOLIO_SUMMARY_TEXT}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#004BFF] hover:bg-[#004BFF]/90 text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                <span>Initiate Technical Handshake</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
