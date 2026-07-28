import {
  HelpCircle,
  Cpu,
  Lock,
  Layers,
  Search,
  PenTool,
  Settings2,
  ShieldCheck,
  Star,
  Building,
  Users
} from "lucide-react";

export const faqHeroChips = [
  { icon: HelpCircle, label: "Immediate Technical\nClarification" },
  { icon: Cpu, label: "Advanced AI &\nSystems Architecture" },
  { icon: Lock, label: "Secure Data &\nCompliance Focus" },
  { icon: Layers, label: "Scalable Sprints &\nDelivery Protocol" }
];

export const faqQuestions = [
  {
    num: "01",
    icon: Cpu,
    question: "What technologies does Indravex support?",
    answer: "We specialize in modern, high-performance tech stacks. This includes React/Next.js for web apps, React Native/Flutter for mobile apps, Node.js/Go/Python for backend microservices, and AWS/GCP for cloud architecture."
  },
  {
    num: "02",
    icon: Layers,
    question: "How does the custom AI integration work?",
    answer: "We conduct a feasibility study, design custom LLM/RAG pipelines, deploy agents in a secure sandbox, and integrate them directly with your database, CRM, or ticketing systems via secure APIs."
  },
  {
    num: "03",
    icon: Search,
    question: "Can you audit or scale existing cloud architectures?",
    answer: "Yes. We perform detailed system infrastructure, database, and CI/CD pipeline audits to identify cost bottlenecks, latency bottlenecks, and security vulnerabilities, followed by remediation."
  },
  {
    num: "04",
    icon: Settings2,
    question: "What is the standard contract project lifecycle?",
    answer: "Our lifecycle runs in standard agile sprints: technical discovery, architecture design, development with automated QA, deployment, and ongoing post-release 24/7 SLA operations."
  },
  {
    num: "05",
    icon: Lock,
    question: "How do you handle enterprise data security and compliance?",
    answer: "We follow strict security protocols including end-to-end encryption, multi-factor access control, static code audits, and SOC2/ISO compliance readiness."
  },
  {
    num: "06",
    icon: Users,
    question: "Do you work with startups, or only enterprise clients?",
    answer: "We work with both! We help early-stage startups build robust MVPs from scratch, and we help established enterprise clients scale, automate, and modernize legacy infrastructure."
  }
];

export const faqProcess = [
  { number: "01", icon: Search, title: "Inquiry", body: "Send us your technical requirements or system pain points via our secure contact portal." },
  { number: "02", icon: PenTool, title: "Discovery", body: "We host an interactive architecture call to align on tech stack, timelines, and deliverables." },
  { number: "03", icon: Settings2, title: "Scope Proposal", body: "We submit a detailed blueprint document, timeline estimation, and pricing options." },
  { number: "04", icon: ShieldCheck, title: "Kickoff", body: "Establish project Slack channel, Jira boards, and start the initial development sprint." },
  { number: "05", icon: Star, title: "Maintenance", body: "Deliver code, transition systems, and begin ongoing technical optimization and SLA support." }
];

export const faqChecklist = [
  "Comprehensive API Documentation",
  "High-Performance System Blueprints",
  "SOC2 & GDPR Compliance Audits",
  "Dedicated Project Manager Assignment",
  "99.99% Guaranteed SLA Operations"
];

export const faqStats = [
  { number: "24h", body: "Maximum Response\nTurnaround Time" },
  { number: "100%", body: "Code Ownership\n&\nIP Transfer" },
  { number: "99.99%", body: "Guaranteed System\nUptime Support" },
  { number: "0", body: "Lock-In Contracts\n&\nHidden Fees" }
];

export const faqTrust = [
  { icon: Lock, label: "PCI-DSS & SOC2 SECURE", body: "Enterprise security compliance and\nconfidential client data handling." },
  { icon: ShieldCheck, label: "TOTAL CODE OWNERSHIP", body: "100% intellectual property transfer\nupon milestone completion." },
  { icon: Building, label: "DEVIATION-FREE SLA", body: "Rigorous performance guarantees\nand automated uptime monitoring." }
];
