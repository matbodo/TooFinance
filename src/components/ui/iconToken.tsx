import {
  Banknote,
  Building2,
  CreditCard,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  LineChart,
  ShieldCheck,
  Stethoscope,
  Store,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "../../types/site";

const iconMap: Record<IconName, LucideIcon> = {
  banknote: Banknote,
  building: Building2,
  "credit-card": CreditCard,
  factory: Factory,
  graduation: GraduationCap,
  "heart-pulse": HeartPulse,
  home: Home,
  landmark: Landmark,
  "line-chart": LineChart,
  shield: ShieldCheck,
  stethoscope: Stethoscope,
  store: Store,
};

type IconTokenProps = {
  label: IconName;
};

export function IconToken({ label }: IconTokenProps) {
  const Icon = iconMap[label];

  return (
    <span className="icon" aria-hidden="true">
      <Icon size={21} strokeWidth={1.9} />
    </span>
  );
}
