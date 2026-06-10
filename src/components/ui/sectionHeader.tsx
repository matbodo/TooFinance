type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionHeader({ eyebrow, title, description, dark = false }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {eyebrow && <span className={`eyebrow ${dark ? "is-dark" : ""}`}>{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p className="lead">{description}</p>}
    </div>
  );
}
