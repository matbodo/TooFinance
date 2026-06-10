import { SectionHeader } from "../components/ui/sectionHeader";
import type { StatItem } from "../types/site";

export function NumbersSection() {
  const numbers: StatItem[] = [
    { value: "R$2,4bi", label: "em crédito aprovado" },
    { value: "18 mil+", label: "clientes ativos" },
    { value: "48h", label: "aprovação média" },
    { value: "7", label: "segmentos atendidos" },
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <SectionHeader title="A saúde financeira em números" dark />

        <div className="numbers-grid">
          {numbers.map((item) => (
            <div className="number-item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
