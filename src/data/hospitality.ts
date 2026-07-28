import {
  Wifi,
  Key,
  SlidersHorizontal,
  CreditCard,
  Building2,
  Users,
  Search,
  PenTool,
  Settings2,
  ShieldCheck,
  Star,
  Lock,
  ShieldPlus,
  Building,
  Smartphone,
  BarChart3,
  Server
} from "lucide-react";

export const hospitalityHeroChips = [
  { icon: Smartphone, label: "Guest-Centric\nMobile Apps" },
  { icon: Lock, label: "PCI-DSS &\nData Security" },
  { icon: Wifi, label: "High-Density\nGuest WiFi" },
  { icon: Server, label: "Cloud PMS &\nZero Downtime" }
];

export const hospitalityServices = [
  {
    icon: Server,
    title: "Cloud PMS Integration",
    body: "Architecting cloud property management systems, reservation engines, and multi-property inventory sync.",
  },
  {
    icon: Key,
    title: "Guest Mobile & Keyless Access",
    body: "Building mobile check-in apps, digital room keys, and in-room concierge ordering platforms.",
  },
  {
    icon: SlidersHorizontal,
    title: "Smart Room IoT & Energy",
    body: "Deploying automated climate control, smart lighting, and occupancy sensors that reduce energy overhead.",
  },
  {
    icon: Wifi,
    title: "Enterprise Guest Networking",
    body: "High-density, secure Wi-Fi infrastructure engineered for uninterrupted streaming and business guest demands.",
  },
  {
    icon: CreditCard,
    title: "POS & Payment Systems",
    body: "Unified payment gateways and POS integrations for hotel dining, spas, and leisure amenities.",
  },
  {
    icon: BarChart3,
    title: "Guest Analytics & CRM",
    body: "Data intelligence platforms for guest loyalty programs, personalized offers, and revenue optimization.",
  }
];

export const hospitalityProcess = [
  { number: "01", icon: Search, title: "Property Audit", body: "Assessing existing hotel network topology, PMS infrastructure, and guest touchpoint bottlenecks." },
  { number: "02", icon: PenTool, title: "System Architecture", body: "Designing unified cloud, IoT, keyless entry, and network blueprints tailored to your property." },
  { number: "03", icon: Settings2, title: "Seamless Deployment", body: "Deploying cloud microservices, IoT gateways, and high-density access points with zero guest disruption." },
  { number: "04", icon: ShieldCheck, title: "Staff QA & Training", body: "Training hotel operations teams on intuitive management dashboards and emergency protocols." },
  { number: "05", icon: Star, title: "24/7 Managed Support", body: "Continuous network monitoring, remote troubleshooting, and proactive system upgrades." }
];

export const hospitalityChecklist = [
  "Keyless Mobile Access Integration",
  "Cloud PMS & Channel Manager Sync",
  "PCI-DSS Compliant Payment Systems",
  "Automated Room Energy Controls",
  "99.99% Guaranteed Network SLA"
];

export const hospitalityStats = [
  { number: "45%", body: "Faster Guest\nCheck-in Speed" },
  { number: "30%", body: "Reduction in Hotel\nEnergy Overhead" },
  { number: "99.99%", body: "Guest Network\nUptime SLA" },
  { number: "4.9★", body: "Average Guest\nSatisfaction Score" }
];

export const hospitalityTrust = [
  { icon: Users, label: "GUEST SATISFACTION FIRST", body: "Elevating every guest touchpoint\nfrom booking to seamless checkout." },
  { icon: Lock, label: "PCI-DSS SECURE", body: "Encrypted payment pipelines and\nrigorous guest data privacy protection." },
  { icon: Building2, label: "24/7 NETWORK RELIABILITY", body: "Proactive infrastructure monitoring\nensuring zero Wi-Fi downtime." }
];
