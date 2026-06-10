
type NavItem = {
  label: string;
  href: string;
};

type StatItem = {
  value: string;
  label: string;
};

type EcosystemItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

type Solution = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  features: string[];
};

type Persona = {
  segment: string;
  name: string;
  description: string;
  tags: string[];
};

type Testimonial = {
  text: string;
  author: string;
  role: string;
  initials: string;
};

type Article = {
  category: string;
  title: string;
  description: string;
  href: string;
};
