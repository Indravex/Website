import {
  ShoppingBag,
  Landmark,
  Stethoscope,
  Utensils,
  Building2,
  Users,
  GraduationCap,
  Truck,
  Ticket,
  Lightbulb,
  Search,
  ClipboardList,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  RefreshCw
} from "lucide-react";

export const INDUSTRIES_HERO_CHIPS = [
  { label: "Enterprise Scale", icon: Building2 },
  { label: "Custom Architecture", icon: Code2 },
  { label: "9 Domain Vertical", icon: ShoppingBag },
  { label: "End-to-End Build", icon: Rocket }
];

export const INDUSTRIES_LIST = [
  {
    id: "ecommerce-retail",
    number: "01",
    title: "E-commerce & Retail",
    desc: "Scalable digital storefronts, custom checkout engines, inventory synchronization, and omnichannel shopping platforms.",
    icon: ShoppingBag,
    capabilities: ["Headless Commerce", "Payment Gateways", "Inventory Analytics", "Personalization AI"]
  },
  {
    id: "bfsi",
    number: "02",
    title: "Banking & Financial Services (BFSI)",
    desc: "Secure fintech portals, automated risk assessment, fraud detection, and compliant ledger integrations.",
    icon: Landmark,
    capabilities: ["Core Banking APIs", "KYC / AML Automation", "Fraud Detection", "Wealth Management"]
  },
  {
    id: "healthcare-hospitals",
    number: "03",
    title: "Healthcare & Hospitals",
    desc: "HIPAA-compliant patient portals, Electronic Health Records (EHR), telemedicine platforms, and smart clinic workflows.",
    icon: Stethoscope,
    capabilities: ["EHR / EMR Integration", "Telehealth Video", "Medical Billing", "Patient Dashboards"]
  },
  {
    id: "food-restaurants",
    number: "04",
    title: "Food & Restaurant Services",
    desc: "Online ordering software, POS integrations, kitchen execution displays, and dynamic delivery tracking systems.",
    icon: Utensils,
    capabilities: ["Online Ordering", "Kitchen Display Systems", "POS Connectivity", "Loyalty Programs"]
  },
  {
    id: "hospitality-hotels",
    number: "05",
    title: "Hospitality & Hotels",
    desc: "Property management solutions, keyless mobile check-ins, guest engagement portals, and smart resort tech.",
    icon: Building2,
    capabilities: ["Cloud PMS Suite", "Keyless Mobile Entry", "Guest Concierge", "Revenue Management"]
  },
  {
    id: "hr-payroll",
    number: "06",
    title: "Human Resources & Payroll",
    desc: "Automated payroll processing engines, performance tracking dashboards, ATS portals, and employee self-service.",
    icon: Users,
    capabilities: ["Payroll Automation", "ATS & Onboarding", "Performance Analytics", "Compliance Tracking"]
  },
  {
    id: "education-elearning",
    number: "07",
    title: "Education & E-Learning",
    desc: "Interactive Learning Management Systems (LMS), virtual classroom environments, and student progress engines.",
    icon: GraduationCap,
    capabilities: ["Custom LMS Build", "Virtual Classrooms", "Student Portals", "Gamified Assessment"]
  },
  {
    id: "transportation-mobility",
    number: "08",
    title: "Transportation & Mobility",
    desc: "Fleet tracking telematics, logistics routing algorithms, ride-hailing apps, and automated dispatch operations.",
    icon: Truck,
    capabilities: ["Real-time GPS Tracking", "Route Optimization", "Fleet Telematics", "Driver Mobility Apps"]
  },
  {
    id: "events-entertainment",
    number: "09",
    title: "Events & Entertainment",
    desc: "Ticketing & access control systems, live event streaming platforms, interactive seating maps, and attendee apps.",
    icon: Ticket,
    capabilities: ["QR Ticket Scanners", "Live Streaming", "Seat Reservation Engine", "Event Analytics"]
  }
];

export const WORKFLOW_PROCESS_STEPS = [
  {
    phase: "Stage 01",
    name: "Idea & Vision",
    desc: "Defining core product objectives, feasibility research, and initial value proposition mapping.",
    icon: Lightbulb
  },
  {
    phase: "Stage 02",
    name: "Discovery & Audit",
    desc: "Analyzing workflow bottlenecks, mapping technical architecture, and scoping technical requirements.",
    icon: Search
  },
  {
    phase: "Stage 03",
    name: "Strategic Planning",
    desc: "Formulating sprint roadmaps, tech stack selection, resource allocation, and milestone scheduling.",
    icon: ClipboardList
  },
  {
    phase: "Stage 04",
    name: "UX Design & Blueprint",
    desc: "Crafting intuitive user interfaces, high-fidelity mockups, design systems, and API schemas.",
    icon: Palette
  },
  {
    phase: "Stage 05",
    name: "Agile Development",
    desc: "High-contrast software engineering with continuous integration checks, microservices, and clean code.",
    icon: Code2
  },
  {
    phase: "Stage 06",
    name: "QA & Penetration Testing",
    desc: "Rigorous unit testing, security vulnerability audits, automated regression, and load testing.",
    icon: TestTube2
  },
  {
    phase: "Stage 07",
    name: "Cloud Launch",
    desc: "Zero-downtime production deployment, DNS configuration, CDN caching, and telemetry monitoring.",
    icon: Rocket
  },
  {
    phase: "Stage 08",
    name: "Continuous Support",
    desc: "24/7 SLA infrastructure monitoring, performance optimization, and ongoing feature enhancement.",
    icon: RefreshCw
  }
];
