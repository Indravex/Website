import {
  ShieldPlus,
  Settings,
  ClipboardCheck,
  Leaf,
  Building2,
  Bed,
  TestTube,
  Stethoscope,
  Activity,
  Accessibility,
  Search,
  PenTool,
  Settings2,
  ShieldCheck,
  Star,
  CheckCircle2,
  PlusCircle,
  Building,
  Code2,
  Cloud,
  Cpu,
  Lock,
  Layers,
  Layout
} from "lucide-react";

export const healthcareHeroChips = [
  { icon: Cpu, label: "Enterprise-Grade\nArchitecture" },
  { icon: Lock, label: "High-Security &\nCompliance" },
  { icon: Cloud, label: "Cloud & DevOps\nEfficiency" },
  { icon: Layers, label: "Scalable &\nFuture-Proof" }
];

export const healthcareServices = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "Architecting robust cloud environments, CI/CD pipelines, and automated infrastructure that guarantee maximum uptime and speed.",
  },
  {
    icon: Code2,
    title: "Custom Software\nDevelopment",
    body: "Building tailored web, mobile, and enterprise applications that streamline operational workflows and drive digital growth.",
  },
  {
    icon: Cpu,
    title: "AI & Machine\nLearning",
    body: "Deploying predictive models, automated intelligent workflows, and RAG pipelines for data-driven enterprise decision making.",
  },
  {
    icon: Lock,
    title: "IT Staffing Solutions &\nGovernance",
    body: "High-performance security frameworks built to protect critical data, ensure regulatory compliance, and mitigate cyber threats.",
  },
  {
    icon: Layers,
    title: "API & System\nIntegration",
    body: "Connecting legacy platforms and modern microservices with robust, resilient, and low-latency API architectures.",
  },
  {
    icon: Layout,
    title: "UI/UX & Digital\nExperience",
    body: "Designing intuitive digital products and customer portals that enhance user engagement, accessibility, and conversion.",
  }
];

export const healthcareProcess = [
  { number: "01", icon: Search, title: "Audit & Roadmap", body: "Analyzing your system infrastructure, tech stack, and security posture to chart the optimal technical roadmap." },
  { number: "02", icon: PenTool, title: "Architecture Design", body: "Designing resilient system blueprints, database schemas, and scalable UI/UX prototypes." },
  { number: "03", icon: Settings2, title: "Agile Development", body: "Writing clean, modular code with automated testing, continuous integration, and rapid sprint reviews." },
  { number: "04", icon: ShieldCheck, title: "Deployment & QA", body: "Seamless cloud deployment with stress testing, load balancing, and zero-downtime release protocols." },
  { number: "05", icon: Star, title: "24/7 Operations", body: "Proactive system monitoring, performance tuning, security patches, and long-term tech evolution." }
];

export const healthcareChecklist = [
  "AI-Driven Code Optimization",
  "Automated CI/CD Deployment",
  "Strict SOC2 & ISO Compliance",
  "Resilient Cloud Infrastructure",
  "99.99% Guaranteed SLA Uptime"
];

export const healthcareStats = [
  { number: "35%", body: "Faster Time\nto Market" },
  { number: "40%", body: "Reduced Infrastructure\nOperational Costs" },
  { number: "100%", body: "Code Quality &\nTest Coverage" },
  { number: "99.99%", body: "System Reliability\n& Uptime SLA" }
];

export const healthcareTrust = [
  { icon: Lock, label: "COMPLIANT BY DESIGN", body: "Adhering to global SOC2, ISO,\nand enterprise security standards." },
  { icon: ShieldPlus, label: "ZERO-TRUST SECURITY", body: "Proactive threat monitoring, data\nencryption, and access controls." },
  { icon: Building, label: "SCALABLE & FUTURE-READY", body: "High-concurrency cloud architectures\nbuilt to grow with your business." }
];
