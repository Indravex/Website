import React from "react";
import { motion } from "motion/react";
import { Lock, ShieldCheck, Server } from "lucide-react";
import styles from "../Healthcare.module.css";

const contactTrust = [
  { icon: Lock, label: "ENCRYPTED COMMUNICATIONS", body: "All messages are encrypted and processed through secure enterprise lines." },
  { icon: ShieldCheck, label: "DATA PRIVACY STRICTNESS", body: "We adhere strictly to GDPR, CCPA, and global SOC2 confidentiality standards." },
  { icon: Server, label: "SECURE SANDBOX ENVIRONMENT", body: "We host client information in high-security virtual environments." }
];

export default function ContactTrust() {
  return (
    <section className={styles.stats}>
      <div className={`${styles.container} ${styles.statsGrid}`} style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {contactTrust.map((item, index) => {
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
