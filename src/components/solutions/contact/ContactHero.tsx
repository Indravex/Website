import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import styles from "../Healthcare.module.css";

const contactHeroChips = [
  { icon: Mail, label: "Response Within\n24 Hours" },
  { icon: Phone, label: "Direct Technical\nConsultation" },
  { icon: MapPin, label: "Pune HQ &\nGlobal Offices" },
  { icon: Globe, label: "Worldwide\nClient Support" }
];

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} py-16 md:py-24 flex flex-col items-center text-center max-w-[800px]`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center w-full"
        >

          <h1 
            className="font-serif text-[42px] sm:text-[52px] md:text-[62px] leading-[1.04] font-extrabold tracking-normal mb-6 text-[#000000] text-center"
            style={{ WebkitTextStroke: '0.55px #000000' }}
          >
            Contact Us <br />
            <span className="text-[#004BFF] inline-block font-sans font-extrabold text-[32px] sm:text-[42px] md:text-[48px] tracking-tight mt-2 text-center" style={{ WebkitTextStroke: '0.55px #004BFF' }}>
              Initiate Secure Handshake.
            </span>
          </h1>

          <p className={`${styles.heroCopy} mx-auto text-center`}>
            Whether you want to audit your existing systems, design a next-gen cloud architecture, or augment your engineering teams, our technical directors are ready to consult.
          </p>

          {/* Chips styled with 3D glass cards */}
          <div className="mt-8 grid grid-cols-2 gap-3.5 max-w-[440px] mx-auto w-full">
            {contactHeroChips.map((chip, index) => {
              const Icon = chip.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3.5 rounded-[16px] border border-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left"
                  style={{
                    backgroundColor: 'rgba(240, 244, 250, 0.55)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div className="card-icon-container text-[#004BFF] shrink-0">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <span className="font-sans font-bold text-[12px] text-[#0B143E] leading-tight">
                    {chip.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
