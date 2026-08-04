import { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import InteractiveConsole from "./components/InteractiveConsole";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Engagement from "./components/Engagement";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import HealthcareHero from "./components/solutions/HealthcareHero";
import HealthcareServices from "./components/solutions/HealthcareServices";
import HealthcareProcess from "./components/solutions/HealthcareProcess";
import HealthcareAI from "./components/solutions/HealthcareAI";
import HealthcareCTA from "./components/solutions/HealthcareCTA";
import healthcareStyles from "./components/solutions/Healthcare.module.css";

import AboutHero from "./components/solutions/about/AboutHero";
import AboutPillars from "./components/solutions/about/AboutPillars";
import AboutMilestones from "./components/solutions/about/AboutMilestones";
import AboutPhilosophy from "./components/solutions/about/AboutPhilosophy";
import AboutCTA from "./components/solutions/about/AboutCTA";

import HospitalityHero from "./components/solutions/hospitality/HospitalityHero";
import HospitalityServices from "./components/solutions/hospitality/HospitalityServices";
import HospitalityProcess from "./components/solutions/hospitality/HospitalityProcess";
import HospitalityAI from "./components/solutions/hospitality/HospitalityAI";
import HospitalityCTA from "./components/solutions/hospitality/HospitalityCTA";

import FAQHero from "./components/solutions/faqs/FAQHero";
import FAQAccordion from "./components/solutions/faqs/FAQAccordion";
import FAQProcess from "./components/solutions/faqs/FAQProcess";
import FAQAI from "./components/solutions/faqs/FAQAI";
import FAQCTA from "./components/solutions/faqs/FAQCTA";

import ContactHero from "./components/solutions/contact/ContactHero";
import ContactFormBlock from "./components/solutions/contact/ContactFormBlock";
import ContactTrust from "./components/solutions/contact/ContactTrust";

import IndustriesHero from "./components/solutions/industries/IndustriesHero";
import IndustriesGrid from "./components/solutions/industries/IndustriesGrid";
import IndustriesProcess from "./components/solutions/industries/IndustriesProcess";
import IndustriesCTA from "./components/solutions/industries/IndustriesCTA";

import PortfolioHero from "./components/solutions/portfolio/PortfolioHero";
import PortfolioGrid from "./components/solutions/portfolio/PortfolioGrid";
import PortfolioSummaryCTA from "./components/solutions/portfolio/PortfolioSummaryCTA";

import SEOHead from "./components/SEOHead";
import { SEO_CONFIGS } from "./data/seoConfig";

import { Cpu, Cloud, Code, Settings, TrendingUp, Shield, BedDouble, Building2, ConciergeBell, Users, Search, PencilRuler, Sparkles, Clock3, ShieldCheck, Eye, Star, PhoneCall, ArrowRight } from "lucide-react";

const SERVICES_LIST = [
  {
    num: "01",
    title: "AI & Automation",
    desc: "Intelligent workflows that optimize operations, eliminate manual bottlenecks, and accelerate business growth.",
    subServices: ["Custom AI Agents", "LLMs & RAG Integration", "Process Automation (RPA)", "Cognitive Search"],
    icon: Cpu
  },
  {
    num: "02",
    title: "Web Development",
    desc: "Scalable, secure, and future-ready cloud architectures engineered for high-availability performance.",
    subServices: ["AWS & Azure Setup", "Cloud Migration", "Kubernetes & DevOps", "Cost Optimization"],
    icon: Cloud
  },
  {
    num: "03",
    title: "Custom Development",
    desc: "Robust, tailor-made digital products crafted to solve real-world complex business challenges.",
    subServices: ["React & Next.js Apps", "API Development", "Database Architecture", "Microservices"],
    icon: Code
  },
  {
    num: "04",
    title: "Mobile Application Development",
    desc: "High-performance software and systems engineered for massive scale, speed, and absolute reliability.",
    subServices: ["Systems Design", "Embedded & IoT", "Legacy Modernization", "Hardware Prototyping"],
    icon: Settings
  },
  {
    num: "05",
    title: "Digital Marketing",
    desc: "Data-driven growth strategies designed to scale brand visibility and deliver high-intent leads.",
    subServices: ["SEO & SEM", "Content Strategy", "Performance Campaigns", "Analytics Tracking"],
    icon: TrendingUp
  },
  {
    num: "06",
    title: "IT Staffing Solutions",
    desc: "Enterprise-grade security protocols, threat detection, and mitigation to protect your digital assets.",
    subServices: ["Penetration Testing", "Security Auditing", "IAM Implementations", "Incident Response"],
    icon: Shield
  }
];

const PROCESS_STEPS = [
  {
    phase: "Phase 01",
    name: "Discovery & Blueprint",
    desc: "We analyze your system requirements, map workflow bottlenecks, and establish a clear execution scope."
  },
  {
    phase: "Phase 02",
    name: "UX Design & Architecture",
    desc: "We build intuitive interface mockups, user flow blueprints, and initial system schemas."
  },
  {
    phase: "Phase 03",
    name: "Agile Build Loops",
    desc: "Our engineering sprints ship secure, high-contrast, scalable code with continuous integration checks."
  },
  {
    phase: "Phase 04",
    name: "Deploy & Optimize",
    desc: "We launch to cloud platforms and set up monitoring logs, security firewalls, and SLA maintenance."
  }
];

function ServicesPage() {
  return (
    <div className={healthcareStyles.page}>
      <HealthcareHero />
      <HealthcareServices />
      <HealthcareProcess />
      <HealthcareAI />
      <HealthcareCTA />
    </div>
  );
}

function AboutUsPage() {
  return (
    <div className={healthcareStyles.page}>
      <AboutHero />
      <AboutPillars />
      <AboutMilestones />
      <AboutPhilosophy />
      <AboutCTA />
    </div>
  );
}

function HospitalityPage() {
  return (
    <div className={healthcareStyles.page}>
      <HospitalityHero />
      <HospitalityServices />
      <HospitalityProcess />
      <HospitalityAI />
      <HospitalityCTA />
    </div>
  );
}

function FAQPage() {
  return (
    <div className={healthcareStyles.page}>
      <FAQHero />
      <FAQAccordion />
    </div>
  );
}

function ContactUsPage() {
  return (
    <div className={healthcareStyles.page}>
      <ContactHero />
      <ContactFormBlock />
      <ContactTrust />
    </div>
  );
}

function IndustriesPage() {
  return (
    <div className={healthcareStyles.page}>
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesProcess />
      <IndustriesCTA />
    </div>
  );
}

function PortfolioPage() {
  return (
    <div className={healthcareStyles.page}>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioSummaryCTA />
    </div>
  );
}

function Subpage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0B143E] flex flex-col items-center justify-center p-6 relative">
      {/* Ambient glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent-blue/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center gap-6 max-w-lg">
        <h1 className="font-serif text-[42px] md:text-[56px] font-semibold tracking-tight text-[#0B143E] leading-[1.1]">
          {title}
        </h1>
        <p className="font-sans text-[#4D4D4D] text-sm max-w-sm leading-relaxed font-semibold">
          Welcome to the {title.toLowerCase()} workspace. Active secure handshake established.
        </p>
        <a
          href="/"
          className="mt-4 px-6 py-3 rounded-full border border-black/10 hover:border-black/30 text-black/80 hover:text-black font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer hover:bg-black/5"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  // Normalize path for matching (ignores trailing slashes and casing)
  const getNormalizedPath = (path: string) => {
    let clean = path.trim().toLowerCase();
    if (clean.endsWith("/") && clean.length > 1) {
      clean = clean.slice(0, -1);
    }
    return clean;
  };

  const normalizedPath = getNormalizedPath(currentPath);

  // Map paths to descriptive page titles
  const getPageTitle = (path: string) => {
    const norm = getNormalizedPath(path);
    switch (norm) {
      case "/services":
      case "/service": return "Services";
      case "/industries":
      case "/industries-we-serve": return "Industries We Serve";
      case "/portfolio":
      case "/our-work": return "Explore Our Portfolio";
      case "/about-us":
      case "/about": return "About Us";
      case "/hospitality": return "Hospitality";
      case "/faqs":
      case "/faq": return "FAQs";
      case "/contact":
      case "/contact-us": return "Contact Us";
      default: return "";
    }
  };

  const isServices = normalizedPath === "/services" || normalizedPath === "/service";
  const isIndustries = normalizedPath === "/industries" || normalizedPath === "/industries-we-serve";
  const isPortfolio = normalizedPath === "/portfolio" || normalizedPath === "/our-work";
  const isAbout = normalizedPath === "/about-us" || normalizedPath === "/about";
  const isHospitality = normalizedPath === "/hospitality";
  const isFaqs = normalizedPath === "/faqs" || normalizedPath === "/faq";
  const isContact = normalizedPath === "/contact" || normalizedPath === "/contact-us";

  const isSubpage = getPageTitle(normalizedPath) !== "";
  const activeSeoConfig = SEO_CONFIGS[normalizedPath] ||
    (isServices ? SEO_CONFIGS["/services"] : undefined) ||
    (isIndustries ? SEO_CONFIGS["/industries"] : undefined) ||
    (isPortfolio ? SEO_CONFIGS["/portfolio"] : undefined) ||
    (isAbout ? (SEO_CONFIGS["/about-us"] || SEO_CONFIGS["/about"]) : undefined) ||
    (isFaqs ? SEO_CONFIGS["/faqs"] : undefined) ||
    (isContact ? SEO_CONFIGS["/contact"] : undefined) ||
    SEO_CONFIGS["/"];

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-accent-blue selection:text-white" id="localhost-app-root">
      <SEOHead {...activeSeoConfig} />

      {/* Floating Header Navigation */}
      <Navbar />

      {/* Main Page Blocks */}
      <main className="relative z-10" id="localhost-app-main">
        {isServices ? (
          <ServicesPage />
        ) : isIndustries ? (
          <IndustriesPage />
        ) : isPortfolio ? (
          <PortfolioPage />
        ) : isAbout ? (
          <AboutUsPage />
        ) : isHospitality ? (
          <HospitalityPage />
        ) : isFaqs ? (
          <FAQPage />
        ) : isContact ? (
          <ContactUsPage />
        ) : isSubpage ? (
          <Subpage title={getPageTitle(normalizedPath)} />
        ) : (
          <>
            {/* 1. Hero Block */}
            <Hero />

            {/* 2. Capabilities Tab Section */}
            <Capabilities />

            {/* 3. Real-time Systems Telemetry & Simulation Enclave */}
            <InteractiveConsole />

            {/* 3.5 About Us Section */}
            <AboutUs />

            {/* 4. Editorial Case Studies & Peak Simulator */}
            <Projects />

            {/* 5. Custom Scope Engagement Calculator */}
            <Engagement />

            {/* 6. Secure Contact Form Block */}
            <ContactForm />
          </>
        )}
      </main>

      {/* Footer Block */}
      <Footer />
    </div>
  );
}

