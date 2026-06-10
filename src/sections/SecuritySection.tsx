import { FileLock2, Landmark, ShieldCheck } from "lucide-react";
import { SectionHeader } from "../components/ui/sectionHeader";

const securityItems = [
  {
    title: "Dados tratados com responsabilidade",
    description: "Coleta orientada à análise e ao atendimento, com comunicação clara sobre o uso das informações.",
    icon: FileLock2,
  },
  {
    title: "Parceiros financeiros e seguradores",
    description: "Estrutura pensada para operar com instituições e parceiros compatíveis com cada produto.",
    icon: Landmark,
  },
  {
    title: "Transparência comercial",
    description: "Produtos, prazos, condições e próximos passos apresentados antes da contratação.",
    icon: ShieldCheck,
  },
];

export function SecuritySection() {
  return (
    <section className="section" id="seguranca">
      <div className="container security-layout">
        <SectionHeader
          title="Confiança antes da contratação"
          description="Soluções financeiras exigem clareza. Por isso, o site precisa comunicar privacidade, parceiros e processo de forma objetiva."
        />

        <div className="security-list">
          {securityItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className="security-item" key={item.title}>
                <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
