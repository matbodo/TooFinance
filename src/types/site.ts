
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
  icon: string;
};

export type Solution = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  features: string[];
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
