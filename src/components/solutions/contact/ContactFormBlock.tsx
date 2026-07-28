import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Building, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";
import styles from "../Healthcare.module.css";
import { submitToWeb3Forms } from "../../../lib/web3forms";

export default function ContactFormBlock() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const res = await submitToWeb3Forms({
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      message: formState.message,
      subject: `New Contact Request from ${formState.name}`,
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
    } else {
      setErrorMsg(res.message || "Failed to send message. Please try again.");
    }
  };

  const officeLocations = [
    { name: "Pune HQ", address: "Pimple Gurav, Pune, MH, India", phone: "+91-7666506689" },
    { name: "San Francisco", address: "Financial District, SF, CA, USA" },
    { name: "London", address: "Canary Wharf, London, UK" },
    { name: "Singapore", address: "Marina Bay Sands, Singapore" }
  ];

  return (
    <section className={`${styles.section} ${styles.offer}`} style={{ borderBottom: "1px solid var(--line)" }}>
      <div className={`${styles.container} grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12`}>

        {/* Left Column: Premium 3D Glassmorphic Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 group relative p-8 sm:p-10 rounded-[28px] border border-white/70 shadow-lg"
          style={{
            backgroundColor: 'rgba(240, 244, 250, 0.45)',
            backdropFilter: 'blur(32px) saturate(140%)',
          }}
        >
          {/* Sheen reflection sweep */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[28px] z-10">
            <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-all duration-[1000ms] ease-out group-hover:left-[150%]" />
          </div>

          <div className="relative z-20">
            <h3 className="font-serif text-[28px] font-bold text-[#0B143E] mb-2">Request Secure Consultation</h3>
            <p className="font-sans text-[13.5px] text-[#5C5C5C] font-semibold mb-8">Establish a secure workspace channel with our delivery leads.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="card-icon-container text-[#004BFF] mb-4">
                  <ShieldCheck size={36} strokeWidth={2} />
                </div>
                <h4 className="font-serif text-[22px] font-bold text-[#0B143E] mb-2">Handshake Established</h4>
                <p className="font-sans text-[13px] text-[#5C5C5C] font-semibold max-w-[280px]">Your message has been encrypted and sent. A Technical Director will contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div>
                  <label className="block font-sans text-[11px] font-extrabold uppercase text-[#0B143E] tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-[8px] border border-[#E2EAF8] bg-white/80 focus:border-[#004BFF] focus:bg-white text-sm font-sans font-semibold text-[#0B143E] outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[11px] font-extrabold uppercase text-[#0B143E] tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full h-11 px-4 rounded-[8px] border border-[#E2EAF8] bg-white/80 focus:border-[#004BFF] focus:bg-white text-sm font-sans font-semibold text-[#0B143E] outline-none transition-all duration-300"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[11px] font-extrabold uppercase text-[#0B143E] tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full h-11 px-4 rounded-[8px] border border-[#E2EAF8] bg-white/80 focus:border-[#004BFF] focus:bg-white text-sm font-sans font-semibold text-[#0B143E] outline-none transition-all duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[11px] font-extrabold uppercase text-[#0B143E] tracking-wider mb-2">Message / Project Brief</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full p-4 rounded-[8px] border border-[#E2EAF8] bg-white/80 focus:border-[#004BFF] focus:bg-white text-sm font-sans font-semibold text-[#0B143E] outline-none transition-all duration-300 resize-none"
                    placeholder="Describe your technical requirements..."
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-600 text-xs font-semibold">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-[8px] bg-[#0B143E] text-white hover:bg-[#004BFF] disabled:opacity-70 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Send Encrypted Inquiry <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Right Column: Office Location Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="mb-4">
            <span className={styles.eyebrow}>Global Reach</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: "28px" }}>Our Offices</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {officeLocations.map((office, index) => (
              <div
                key={index}
                className="flex flex-col justify-between p-5 rounded-[18px] border border-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: 'rgba(240, 244, 250, 0.55)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div>
                  <div className="card-icon-container text-[#004BFF] shrink-0 mb-3.5">
                    <Building size={16} strokeWidth={2} />
                  </div>
                  <h4 className="font-serif text-[17px] font-bold text-[#0B143E] mb-1.5">{office.name}</h4>
                  <p className="font-sans text-[12.5px] text-[#5C5C5C] font-semibold leading-relaxed mb-4">{office.address}</p>
                </div>
                <span className="font-sans text-[11px] font-extrabold text-[#004BFF]">{office.phone}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
