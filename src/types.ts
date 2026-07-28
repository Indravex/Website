/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Capability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  technicalDetails: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  sector: string;
  timeline: string;
  description: string;
  challenge: string;
  solution: string;
  impact: { metric: string; label: string }[];
  tag: string;
}

export interface EngagementMetric {
  id: string;
  name: string;
  minVal: number;
  maxVal: number;
  step: number;
  unit: string;
}

export interface TelemetryLog {
  id: string;
  timestamp: string;
  type: "system" | "network" | "inference" | "database";
  level: "info" | "warning" | "success";
  message: string;
  latency?: string;
}

export interface ServiceProposal {
  infrastructureLevel: number; // 1 to 5
  aiReadiness: "none" | "foundational" | "advanced" | "autonomous";
  consultingHours: number; // 20 to 200
}
