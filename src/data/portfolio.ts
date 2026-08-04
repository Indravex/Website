import {
  ShoppingBag,
  Landmark,
  Stethoscope,
  Utensils,
  Users,
  GraduationCap,
  Truck,
  Ticket,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  Layers
} from "lucide-react";

export const PORTFOLIO_HERO_TEXT = {
  title: "Explore Our Portfolio",
  subtitle: "View Our Work",
  description: "We have successfully designed and developed software solutions across multiple industries, helping businesses streamline operations, improve customer experiences, and accelerate digital transformation."
};

export const PORTFOLIO_SUMMARY_TEXT = "From startups to enterprises, we deliver secure, scalable, and user-centric software solutions tailored to meet unique business needs across diverse industries.";

export const PORTFOLIO_HERO_CHIPS = [
  { label: "8 Vertical Domains", icon: Layers },
  { label: "Enterprise Security", icon: ShieldCheck },
  { label: "Global Deployments", icon: Globe },
  { label: "High Availability", icon: Zap }
];

export const PORTFOLIO_CATEGORIES = [
  {
    id: "ecommerce-retail",
    number: "01",
    title: "E-commerce & Retail",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1556742049-0a670fc8078a?auto=format&fit=crop&q=80&w=800",
    solutions: [
      "E-commerce Order & Payment Management Systems",
      "Online Shopping Platforms",
      "Payment Gateway Integration"
    ],
    techTags: ["Headless Commerce", "Stripe / Razorpay", "Inventory Sync", "React / Next.js"]
  },
  {
    id: "bfsi",
    number: "02",
    title: "Banking & Financial Services (BFSI)",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    solutions: [
      "Online Banking Systems",
      "Fund Transfer Solutions",
      "Digital Payment Platforms",
      "Financial Transaction Management"
    ],
    techTags: ["Fintech APIs", "Fraud Detection", "KYC Automation", "Encrypted Ledgers"]
  },
  {
    id: "healthcare",
    number: "03",
    title: "Healthcare",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    solutions: [
      "Hospital Management Systems (HMS)",
      "Patient Management Systems",
      "Clinic & Healthcare Administration Solutions"
    ],
    techTags: ["HIPAA Compliance", "Telehealth Video", "EHR / EMR", "Doctor Portals"]
  },
  {
    id: "food-hospitality",
    number: "04",
    title: "Food & Hospitality",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    solutions: [
      "Food Delivery Platforms",
      "Restaurant Order Management Systems",
      "Hotel Booking & Reservation Systems"
    ],
    techTags: ["Real-time Tracking", "KDS Connectivity", "Cloud PMS", "POS Integration"]
  },
  {
    id: "human-resources",
    number: "05",
    title: "Human Resources (HR)",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    solutions: [
      "Employee Leave Management",
      "Payroll Management Systems",
      "HRMS Solutions"
    ],
    techTags: ["Payroll Automation", "ATS & Hiring", "Leave Workflows", "Employee Self-Service"]
  },
  {
    id: "education-elearning",
    number: "06",
    title: "Education & E-Learning",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    solutions: [
      "Learning Management Systems (LMS)",
      "Online Training Platforms",
      "Student & Course Management"
    ],
    techTags: ["Live Classrooms", "Course Builder", "Student Dashboards", "Progress Analytics"]
  },
  {
    id: "transportation-mobility",
    number: "07",
    title: "Transportation & Mobility",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    solutions: [
      "Ride Booking Applications",
      "Cab Management Systems",
      "Fleet Management Solutions"
    ],
    techTags: ["Live GPS Telematics", "Driver Apps", "Dispatch Engine", "Route Optimization"]
  },
  {
    id: "events-entertainment",
    number: "08",
    title: "Events & Entertainment",
    icon: Ticket,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    solutions: [
      "Event Ticket Booking Platforms",
      "Event Registration & Management Systems"
    ],
    techTags: ["QR Code Scanners", "Seating Map Engine", "Access Control", "Attendee Apps"]
  }
];
