import React from "react";
import { motion } from "motion/react";
import { aboutTrust } from "../../../data/aboutUs";
import styles from "../Healthcare.module.css";

export default function AboutTrustStrip() {
  return (
    <section className={styles.stats}>
      <div className={`${styles.container} ${styles.statsGrid}`} style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {aboutTrust.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.stat}
            >
              <div className="card-icon-container text-[#004BFF] shrink-0 bg-white/10 border-white/20">
                <Icon size={20} strokeWidth={2} />
              </div>
              <div>
                <strong style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF" }}>{item.label}</strong>
                <span style={{ marginTop: "3px", color: "rgba(255, 255, 255, 0.8)", fontWeight: 500 }}>{item.body}</span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
