import type {
  Article,
  EcosystemItem,
  NavItem,
  Persona,
  Solution,
  StatItem,
  Testimonial,
} from "../types/site";

export const navItems: NavItem[] = [
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Soluções", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Contato", href: "#contato" },
];

export const heroStats: StatItem[] = [
  { value: "R$2,4bi", label: "em crédito aprovado" },
  { value: "18 mil+", label: "profissionais atendidos" },
  { value: "7 segmentos", label: "do ecossistema" },
];

export const trustItems = ["BACEN", "SUSEP", "LGPD", "ISO 27001", "+18.000 clientes ativos"];

export const ecosystemItems: EcosystemItem[] = [
  {
    title: "Hospitais e Clínicas",
    description: "Capital de giro, financiamento de equipamentos e seguros corporativos.",
    href: "#hospitais",
    icon: "HOS",
  },
  {
    title: "Profissionais de Saúde",
    description: "Previdência, seguro de vida, responsabilidade civil e home equity.",
    href: "#profissionais",
    icon: "MED",
  },
  {
    title: "Farmácias e Varejo",
    description: "Meios de pagamento, antecipação de recebíveis e capital de giro.",
    href: "#farmacias",
    icon: "FAR",
  },
  {
    title: "Indústria e Distribuição",
    description: "Crédito para expansão, estoque, giro e distribuição.",
    href: "#industria",
    icon: "IND",
  },
  {
    title: "Academia e Educação",
    description: "Financiamento estudantil e crédito institucional.",
    href: "#academia",
    icon: "EDU",
  },
  {
    title: "Pacientes",
    description: "Crédito para tratamentos, planos e proteção financeira pessoal.",
    href: "#pacientes",
    icon: "PAC",
  },
];

export const solutions: Solution[] = [
  {
    id: "capital",
    title: "Fluxo de caixa saudável para sua operação de saúde",
    shortTitle: "Capital de Giro",
    description:
      "Crédito em até 48h para clínicas, farmácias e hospitais, sem burocracia desnecessária.",
    icon: "$",
    features: [
      "Aprovação em até 48 horas úteis",
      "Até R$5 milhões sem garantia real",
      "Parcelas alinhadas ao faturamento",
      "Especialistas em fluxo do setor saúde",
    ],
  },
  {
    id: "financiamento",
    title: "Equipamentos novos sem comprometer o caixa",
    shortTitle: "Financiamentos",
    description:
      "Financiamento para aparelhos médicos, odontológicos, laboratoriais e de diagnóstico.",
    icon: "EQP",
    features: [
      "Até 120 meses de prazo",
      "Entrada a partir de 10%",
      "Equipamentos novos e usados",
      "Carência de até 6 meses",
    ],
  },
  {
    id: "seguros",
    title: "Proteja o que você construiu na saúde",
    shortTitle: "Seguros",
    description:
      "Cobertura para profissionais, clínicas e empresas: responsabilidade civil, vida, patrimonial e mais.",
    icon: "SEG",
    features: [
      "Responsabilidade Civil Médica",
      "Seguro de vida e acidentes pessoais",
      "Patrimonial para clínicas e farmácias",
      "Previdência privada e saúde suplementar",
    ],
  },
  {
    id: "homeequity",
    title: "Use seu imóvel como alavanca financeira",
    shortTitle: "Home Equity",
    description:
      "Crédito com garantia de imóvel para expansão, reorganização financeira ou novos projetos.",
    icon: "IMV",
    features: [
      "Taxas menores que crédito comum",
      "Prazos longos de pagamento",
      "Uso livre do recurso",
      "Ideal para profissionais e empresas",
    ],
  },
  {
    id: "pagamentos",
    title: "Receba melhor, antecipe melhor, venda melhor",
    shortTitle: "Pagamentos",
    description:
      "Soluções de pagamento para clínicas, farmácias, consultórios e operações digitais.",
    icon: "PAY",
    features: [
      "Maquininhas e link de pagamento",
      "Antecipação de recebíveis",
      "Taxas competitivas",
      "Integração com operação financeira",
    ],
  },
  {
    id: "planejamento",
    title: "Planejamento financeiro para quem vive da saúde",
    shortTitle: "Planejamento",
    description:
      "Estratégias para médicos, dentistas e profissionais PJ que querem organizar renda, patrimônio e futuro.",
    icon: "PLA",
    features: [
      "Previdência privada",
      "Organização patrimonial",
      "Planejamento de renda",
      "Estratégia para PJ médica",
    ],
  },
  {
    id: "patrimonio",
    title: "Segurança patrimonial sem conversa nebulosa",
    shortTitle: "Patrimônio",
    description:
      "Proteção, organização e planejamento para reduzir riscos financeiros e preservar o patrimônio.",
    icon: "PRO",
    features: [
      "Proteção de bens",
      "Gestão de riscos",
      "Sucessão patrimonial",
      "Estruturação financeira",
    ],
  },
];

export const personas: Persona[] = [
  {
    segment: "Clínicas e Hospitais",
    name: "Dra. Fernanda Costa",
    description:
      "Diretora de clínica multiespecialidade com 80 funcionários. Precisa de capital para OPME e expansão.",
    tags: ["Capital de Giro", "Financiamento", "Seguro"],
  },
  {
    segment: "Profissional de Saúde",
    name: "Dr. Rafael Mendes",
    description:
      "Cirurgião ortopedista com alto rendimento que busca construir riqueza e proteger patrimônio.",
    tags: ["Previdência", "Home Equity", "RC Médica"],
  },
  {
    segment: "Varejo e Distribuição",
    name: "Marcos Oliveira",
    description:
      "Dono de rede com 3 farmácias. Precisa de melhores taxas e antecipação para financiar estoque.",
    tags: ["Pagamentos", "Capital de Giro", "Antecipação"],
  },
  {
    segment: "Paciente",
    name: "Ana Paula Lima",
    description:
      "Precisa de tratamento odontológico de alto custo com parcelas compatíveis com sua renda.",
    tags: ["Crédito Saúde", "Seguro Saúde", "Planejamento"],
  },
];

export const testimonials: Testimonial[] = [
  {
    text: "Conseguimos capital de giro em 36 horas para cobrir materiais cirúrgicos. Nenhum banco teria entendido nossa necessidade tão rápido.",
    author: "Dra. Fernanda Costa",
    role: "Diretora Médica",
    initials: "FC",
  },
  {
    text: "A assessoria de previdência foi um divisor de águas. Finalmente alguém que entende que sou PJ médica.",
    author: "Dr. Rafael Mendes",
    role: "Cirurgião Ortopedista",
    initials: "RM",
  },
  {
    text: "Taxa menor, antecipação no dia seguinte e apoio para financiar reforma. Parceiro de verdade.",
    author: "Marcos Oliveira",
    role: "Rede de Farmácias",
    initials: "MO",
  },
];

export const articles: Article[] = [
  {
    category: "Gestão Financeira",
    title: "Como estruturar capital de giro para sua clínica em 2025",
    description: "Fluxo de caixa no setor saúde e como não perder paciente por falta de caixa.",
    href: "#",
  },
  {
    category: "Seguros",
    title: "RC Médica: o que cobre e por que todo profissional precisa",
    description: "Coberturas, riscos sem seguro e como escolher a apólice certa.",
    href: "#",
  },
  {
    category: "Planejamento",
    title: "PJ médica: como pagar menos imposto e construir patrimônio",
    description: "Estratégias fiscais para médicos PJ que querem maximizar o que sobra.",
    href: "#",
  },
];

export const partners = ["TASY", "MV Sistemas", "Philips Tasy", "CFM", "TOTVS Saúde", "ANS", "Pagar.me"];
