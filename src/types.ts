export interface Program {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  duration: string;
  commitment: string;
  format: string;
  description: string;
  highlights: string[];
  idealFor: string;
  spotsLeft: number;
  featured?: boolean;
}

export interface Transformation {
  id: string;
  name: string;
  role: string;
  age: number;
  goal: string;
  timeframe: string;
  metrics: {
    weightDelta: string;
    bodyFatDelta: string;
    strengthDelta: string;
  };
  quote: string;
  beforeImg: string;
  afterImg: string;
  category: 'fat-loss' | 'muscle-gain' | 'athletic-recomp';
}

export interface PricingPlan {
  id: string;
  name: string;
  tier: string;
  price: string;
  period: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
  featured: boolean;
  idealFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  review: string;
  highlight: string;
  program: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'coaching' | 'nutrition' | 'logistics' | 'results';
}

export interface ConsultationForm {
  name: string;
  email: string;
  phone: string;
  primaryGoal: string;
  experienceLevel: string;
  weeklyAvailability: string;
  preferredFormat: 'in-person' | 'online' | 'hybrid';
  targetTimeframe: string;
  notes: string;
}
