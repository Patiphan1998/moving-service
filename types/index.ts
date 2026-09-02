import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  vehicle: string;
  priceFrom: string;
  suitableFor: string;
  highlighted?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  lineId: string;
  lineUrl: string;
  email: string;
  address: string;
  hours: string;
}
