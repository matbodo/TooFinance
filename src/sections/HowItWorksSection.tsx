import { Button } from "../components/ui/button";

const steps = [
  {
    title: "Você informa seu perfil e necessidade",
    description: "Preencha uma simulação rápida e conte qual solução financeira procura.",
  },
  {
    title: "Nossa equipe analisa as alternativas",
    description: "Avaliamos opções compatíveis com seu perfil, objetivo, valor e momento.",
  },
  {
    title: "Apresentamos opções de crédito, seguro ou planejamento",
    description: "Você recebe caminhos possíveis, próximos passos e documentos necessários.",
  },
  {
    title: "Você escolhe e recebe acompanhamento",
    description: "A TOO Finance acompanha o processo até a contratação com o parceiro indicado.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section section-soft how-it-works" id="como-funciona">
      <div className="container">
        <div className="how-header">
          <span className="eyebrow">Como funciona</span>
          <h2>Como a TOO Finance funciona em quatro passos simples</h2>
        </div>

        <div className="steps-timeline" aria-label="Etapas de atendimento">
          {steps.map((step, index) => (
            <article className="timeline-step" key={step.title}>
              <span className="timeline-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="cta-strip">
          <div>
            <h3>Quer entender qual caminho faz mais sentido?</h3>
            <p>Compartilhe seu perfil e receba uma análise inicial das alternativas disponíveis.</p>
          </div>
          <Button href="#simulador">Solicitar análise</Button>
        </div>
      </div>
    </section>
  );
}
