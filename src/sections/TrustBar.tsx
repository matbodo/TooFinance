import {
  BadgeCheck,
  Landmark,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const trustItems = [
  {
    icon: Landmark,
    label: "BACEN",
  },
  {
    icon: BadgeCheck,
    label: "SUSEP",
  },
  {
    icon: LockKeyhole,
    label: "LGPD",
  },
  {
    icon: ShieldCheck,
    label: "ISO 27001",
  }
];

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Credenciais e segurança">
      <div className="container trust-list">
        {trustItems.map(({ icon: Icon, label }) => (
          <span className="trust-item" key={label}>
            <Icon size={16} strokeWidth={2.2} aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
