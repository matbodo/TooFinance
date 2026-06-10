
export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type EcosystemItem = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  problem: string;
  indicatedSolutions: string[];
  benefit: string;
  cta: string;
};

export type Solution = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: IconName;
  features: string[];
  audience: string;
  whenToUse: string;
  benefits: string[];
  documents: string[];
  averageTerm: string;
  cta: string;
};

export type Persona = {
  segment: string;
  name: string;
  description: string;
  tags: string[];
};

export type Testimonial = {
  text: string;
  author: string;
  role: string;
  initials: string;
};

export type Article = {
  category: string;
  title: string;
  description: string;
  href: string;
};

export type IconName =
  | "banknote"
  | "building"
  | "credit-card"
  | "factory"
  | "graduation"
  | "heart-pulse"
  | "home"
  | "landmark"
  | "line-chart"
  | "shield"
  | "stethoscope"
  | "store";
