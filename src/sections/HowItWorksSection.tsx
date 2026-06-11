import { ClipboardList, Lightbulb, MessageCircle } from "lucide-react";

const steps = [
  {
    description: "Conversa inicial para entender seu perfil, necessidade e objetivo financeiro.",
    icon: ClipboardList,
    number: "1",
    title: "Diagnóstico",
  },
  {
    description: "Organizamos caminhos possíveis em crédito, seguros, pagamentos ou planejamento.",
    icon: Lightbulb,
    number: "2",
    title: "Curadoria",
  },
  {
    description: "Apresentamos alternativas claras, documentos necessários e próximos passos.",
    icon: MessageCircle,
    number: "3",
    title: "Proposta",
  },
];

export function HowItWorksSection() {
  return (
    <section className="process-section" id="como-funciona">
      <div className="container">
        <div className="process-header">
          <h2>Como funciona?</h2>
          <p>
            Da primeira análise à contratação, a TOO Finance organiza cada etapa para você decidir
            com mais clareza e menos burocracia.
          </p>
        </div>

        <div className="process-grid" aria-label="Etapas de atendimento">
          {steps.map(({ description, icon: Icon, number, title }) => (
            <article className="process-card" key={number}>
              <span className="process-icon" aria-hidden="true">
                <Icon size={42} strokeWidth={1.9} />
              </span>
              <h3>
                {number}. {title}
              </h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
