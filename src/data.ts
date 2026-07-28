/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Capability, CaseStudy, TelemetryLog } from "./types";

export const CAPABILITIES: Capability[] = [
  {
    id: "infrastructure",
    title: "High-Performance Distributed Infrastructure",
    subtitle: "Consensus engines & sub-millisecond global routing",
    description: "We architect next-generation computing planes designed to eliminate architectural latency. From private low-latency databases to custom ledger consensus mechanisms, we build networks that run flawlessly under heavy transactional loads.",
    metrics: [
      { label: "P99 Latency Reduction", value: "99.8%" },
      { label: "Max Transaction Rate", value: "850k/sec" },
      { label: "High Availability", value: "99.9999%" }
    ],
    technicalDetails: [
      "Custom consensus protocols with BFT & Raft implementations",
      "Bare-metal server optimizations and custom Kernel-level network tuning",
      "Multi-region low-latency state synchronization with CRDTs",
      "Active-active database routing and distributed caching topologies"
    ]
  },
  {
    id: "sovereign-ai",
    title: "Sovereign AI & Private Deep Inference",
    subtitle: "Optimized model optimization, training pipeline, and local compute host",
    description: "Keep your intellectual property within your borders. We design private, high-throughput machine learning infrastructure, model fine-tuning engines, and optimized GPU orchestration layers that execute enterprise tasks safely and at scale.",
    metrics: [
      { label: "Inference Speedup", value: "4.2x" },
      { label: "Token-to-Cost Efficiency", value: "+340%" },
      { label: "Data Leakage Rate", value: "0.00%" }
    ],
    technicalDetails: [
      "Local LLM deployment using vLLM, TensorRT-LLM, and Ollama core clusters",
      "Custom Parameter-Efficient Fine-Tuning (PEFT, LoRA) pipeline designs",
      "Confidential GPU computing with secure enclave boundaries (H100/A100)",
      "Smart semantic retrieval with high-dimensional vector search index databases"
    ]
  },
  {
    id: "cloud-networks",
    title: "Zero-Trust Sovereign Cloud Networks",
    subtitle: "Cryptographic identity, secure multi-tenant containment, and private transit",
    description: "Complete visual clarity and cryptographic security for modern virtualized containers. Our secure-by-default multi-region cloud pipelines replace loose firewall boundaries with end-to-end mathematical verification of identity.",
    metrics: [
      { label: "Audit Readiness", value: "Instant" },
      { label: "SLA Guarantee", value: "99.995%" },
      { label: "Cryptographic Strength", value: "AES-GCM-256" }
    ],
    technicalDetails: [
      "Infrastructure-as-Code automation using customized declarative frameworks",
      "Network segment partitioning with service meshes and eBPF-based telemetry",
      "Single Sign-On (SSO) and mutual TLS (mTLS) certificate authority creation",
      "FIPS 140-2 compliance layers built into edge network routing devices"
    ]
  },
  {
    id: "product-engineering",
    title: "High-Performance Mobile Application Development",
    subtitle: "Precision user interfaces and reactive multi-platform client systems",
    description: "Craftsmanship in the browser. We develop responsive, fluidly animated, and extremely reliable client-side applications that process massive data streams smoothly. Our UIs translate technical capability into confidence.",
    metrics: [
      { label: "First Contentful Paint", value: "< 240ms" },
      { label: "Asset Size Compression", value: "72%" },
      { label: "User Sat Score", value: "99.4%" }
    ],
    technicalDetails: [
      "Optimized React client engines running custom rendering cycles",
      "Real-time data visualization utilizing D3, canvas engines, and WebGL",
      "Client-side caching and optimistic rendering for offline-first resilience",
      "Smooth motion physics built using custom bezier curve transition controllers"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "project-aether",
    title: "Project Aether",
    client: "Global Logistics Group",
    sector: "International Maritime Commerce",
    timeline: "7 Months",
    description: "Orchestrated a highly distributed, zero-trust tracking network across 180 global ports, managing millions of cargo routes with sub-millisecond consensus.",
    challenge: "Traditional central ledger databases caused latency spikes up to 4.5 seconds and suffered from single-point network failure, disrupting fast maritime port scheduling.",
    solution: "Designed a localized consensus protocol on edge containers, allowing each port to independently verify transshipments with eventual mathematical consistency across the global mesh.",
    impact: [
      { metric: "140ms", label: "Consensus Latency" },
      { metric: "0ms", label: "Down-time over 6 Months" },
      { metric: "$12M", label: "Operational Savings" }
    ],
    tag: "Distributed Systems"
  },
  {
    id: "project-chronos",
    title: "Project Chronos",
    client: "Nordic Grid Alliance",
    sector: "Renewable Energy Networks",
    timeline: "11 Months",
    description: "Implemented custom machine learning models at the local substation level, predicting power grid spikes and routing surplus energy dynamically.",
    challenge: "Centralized ML predictions took 8 seconds to process, missing instant grid overload cycles that caused localized transformer damages.",
    solution: "Engineered ultra-compact sovereign inference systems at substation edge servers, enabling sub-millisecond local reactions with private telemetry feedback loops.",
    impact: [
      { metric: "12ms", label: "Substation Reaction" },
      { metric: "99.99%", label: "Substation Efficiency" },
      { metric: "3.2x", label: "Hardware Longevity" }
    ],
    tag: "Sovereign AI"
  },
  {
    id: "project-apex",
    title: "Project Apex",
    client: "Apex Health Networks",
    sector: "Secure Digital Health Platforms",
    timeline: "5 Months",
    description: "Created a modern, high-security client application with real-time patient heart and neural telemetry visualization, running safely under strict HIPAA bounds.",
    challenge: "Slow charting and heavy rendering logic caused desktop application freezing for specialists reviewing high-density surgical telemetry data streams.",
    solution: "Built a custom, double-buffered React dashboard leveraging GPU-accelerated canvas layers, achieving a consistent, fluid 60FPS feed.",
    impact: [
      { metric: "60 FPS", label: "Under Heavy Stream Load" },
      { metric: "240ms", label: "Initial Medical Record Load" },
      { metric: "100%", label: "Zero-Trust Compliance" }
    ],
    tag: "High-Performance UI"
  }
];

export const INITIAL_TELEMETRY: TelemetryLog[] = [
  { id: "1", timestamp: "10:42:15.112", type: "system", level: "success", message: "Localhost Core initialized on cluster node 'alpha-east-1'" },
  { id: "2", timestamp: "10:42:15.240", type: "network", level: "info", message: "Establishing secure mTLS handshake with private edge segment 0xF24" },
  { id: "3", timestamp: "10:42:15.352", type: "database", level: "success", message: "Distributed database state fully synchronized across 12 region enclaves", latency: "14.2ms" },
  { id: "4", timestamp: "10:42:15.510", type: "inference", level: "info", message: "Warming private model sovereign-llama-70b inference context buffer" },
  { id: "5", timestamp: "10:42:15.890", type: "inference", level: "success", message: "Active pipeline inference: context token parsing loaded successfully", latency: "182ms" }
];
