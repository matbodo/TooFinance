import { useState } from "react";
import { SectionHeader } from "../components/ui/sectionHeader";

const faqItems = [
  {
    question: "A TOO Finance é uma instituição financeira?",
    answer:
      "A TOO Finance atua como uma plataforma consultiva de soluções financeiras para o setor de saúde. A contratação dos produtos pode envolver instituições financeiras, seguradoras, correspondentes ou parceiros autorizados, conforme a solução escolhida.",
  },
  {
    question: "Quais documentos preciso para simular crédito?",
    answer:
      "Em geral, a simulação pode começar com dados cadastrais, CPF ou CNPJ, objetivo do crédito, valor desejado e informações financeiras básicas. Conforme o produto, podem ser solicitados extratos, faturamento, comprovantes de renda, documentos dos sócios ou dados de garantias.",
  },
  {
    question: "A análise afeta meu score?",
    answer:
      "A simulação inicial não deve ser tratada como aprovação definitiva. Eventuais consultas a bureaus de crédito ou impactos no score dependem da etapa, do parceiro financeiro e das autorizações necessárias durante o processo.",
  },
  {
    question: "Quais tipos de empresas podem solicitar?",
    answer:
      "Clínicas, hospitais, consultórios, laboratórios, farmácias, distribuidores, indústrias, instituições de ensino e outros negócios ligados ao ecossistema de saúde podem buscar uma análise.",
  },
  {
    question: "Vocês atendem pessoa física e pessoa jurídica?",
    answer:
      "Sim. A TOO Finance pode orientar soluções para empresas, profissionais autônomos, profissionais PJ e pacientes, sempre de acordo com o perfil, objetivo e produto disponível.",
  },
  {
    question: "Como meus dados são protegidos?",
    answer:
      "Os dados informados devem ser usados para análise, atendimento e encaminhamento da solução solicitada. O site precisa manter política de privacidade clara e informar como dados pessoais e financeiros são tratados conforme a LGPD.",
  },
  {
    question: "A contratação é feita diretamente com a TOO ou com parceiros?",
    answer:
      "Depende da solução. Em muitos casos, a TOO Finance atua na análise consultiva e no encaminhamento, enquanto a contratação formal ocorre com instituições financeiras, seguradoras ou parceiros responsáveis pelo produto.",
  },
  {
    question: "Quais seguros estão disponíveis?",
    answer:
      "As opções podem incluir responsabilidade civil profissional, seguro de vida, acidentes pessoais, seguro patrimonial, seguros empresariais e outras coberturas conforme atividade, risco e parceiro segurador.",
  },
];

type FAQItemProps = {
  answer: string;
  question: string;
};

function FAQItem({ answer, question }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = `faq-${question.toLowerCase().replace(/\W+/g, "-")}`;

  return (
    <article className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{question}</span>
        <span className="faq-toggle" aria-hidden="true">
          +
        </span>
      </button>

      <div className="faq-answer" id={answerId}>
        <p>{answer}</p>
      </div>
    </article>
  );
}

export function FAQSection() {
  return (
    <section className="section section-soft" id="faq">
      <div className="container faq-layout">
        <SectionHeader
          title="Perguntas frequentes"
          description="Respostas objetivas para as principais dúvidas antes de iniciar uma simulação ou falar com um especialista."
        />

        <div className="faq-list">
          {faqItems.map((item) => (
            <FAQItem answer={item.answer} question={item.question} key={item.question} />
          ))}
        </div>
      </div>
    </section>
  );
}
