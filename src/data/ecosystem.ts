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
  { label: "Soluções", href: "#produtos" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Segurança", href: "#seguranca" },
  { label: "FAQ", href: "#faq" },
  { label: "Conteúdos", href: "#conteudo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const heroStats: StatItem[] = [
  { value: "R$2,4bi", label: "em crédito aprovado" },
  { value: "18 mil+", label: "profissionais atendidos" },
  { value: "7 segmentos", label: "do ecossistema" },
];

export const trustItems = ["BACEN", "SUSEP", "LGPD", "ISO 27001"];

export const ecosystemItems: EcosystemItem[] = [
  {
    title: "Hospitais e Clínicas",
    description: "Capital de giro, financiamento de equipamentos e seguros corporativos.",
    href: "#hospitais",
    icon: "building",
    problem: "Pressão de caixa, compra de OPME, folha, expansão e aquisição de equipamentos.",
    indicatedSolutions: ["Capital de Giro", "Financiamentos", "Seguros Empresariais"],
    benefit: "Mais previsibilidade para manter a operação ativa e crescer sem comprometer o caixa.",
    cta: "Ver soluções para clínicas",
  },
  {
    title: "Profissionais de Saúde",
    description: "Previdência, seguro de vida, responsabilidade civil e home equity.",
    href: "#profissionais",
    icon: "stethoscope",
    problem: "Renda variável, exposição profissional e necessidade de organizar patrimônio.",
    indicatedSolutions: ["Planejamento", "RC Profissional", "Home Equity"],
    benefit: "Proteção financeira e estratégia para carreira, renda e patrimônio pessoal.",
    cta: "Planejar minha carreira",
  },
  {
    title: "Farmácias e Varejo",
    description: "Meios de pagamento, antecipação de recebíveis e capital de giro.",
    href: "#farmacias",
    icon: "store",
    problem: "Estoque caro, margens pressionadas e necessidade de giro rápido.",
    indicatedSolutions: ["Pagamentos", "Antecipação", "Capital de Giro"],
    benefit: "Melhor fluxo de recebimento e fôlego para comprar, vender e expandir.",
    cta: "Melhorar meu fluxo",
  },
  {
    title: "Indústria e Distribuição",
    description: "Crédito para expansão, estoque, giro e distribuição.",
    href: "#industria",
    icon: "factory",
    problem: "Ciclos longos de produção, estoque e distribuição exigem capital estruturado.",
    indicatedSolutions: ["Crédito PJ", "Capital de Giro", "Seguros Corporativos"],
    benefit: "Recursos alinhados ao ciclo operacional e aos planos de expansão.",
    cta: "Analisar operação",
  },
  {
    title: "Academia e Educação",
    description: "Financiamento estudantil e crédito institucional.",
    href: "#academia",
    icon: "graduation",
    problem: "Alunos e instituições precisam de acesso a crédito para formação e estrutura.",
    indicatedSolutions: ["Crédito Educacional", "Crédito Institucional", "Pagamentos"],
    benefit: "Facilita acesso à formação e apoia instituições em crescimento.",
    cta: "Conhecer alternativas",
  },
  {
    title: "Pacientes",
    description: "Crédito para tratamentos, planos e proteção financeira pessoal.",
    href: "#pacientes",
    icon: "heart-pulse",
    problem: "Tratamentos importantes podem ter custo alto e pagamento imediato.",
    indicatedSolutions: ["Crédito Saúde", "Parcelamento", "Seguro Saúde"],
    benefit: "Mais alternativas para realizar tratamentos com parcelas compatíveis.",
    cta: "Simular tratamento",
  },
];

export const solutions: Solution[] = [
  {
    id: "capital",
    title: "Capital para manter a operação saudável",
    shortTitle: "Capital de Giro",
    description:
      "Crédito para cobrir caixa, folha, fornecedores, expansão e necessidades operacionais do setor de saúde.",
    icon: "banknote",
    audience: "Clínicas, hospitais, farmácias, distribuidores e empresas do ecossistema de saúde.",
    whenToUse: "Quando há pressão no fluxo de caixa, compra de insumos, folha, estoque ou plano de expansão.",
    features: [
      "Análise orientada ao perfil da operação",
      "Parcelas alinhadas ao faturamento",
      "Alternativas com ou sem garantia, conforme perfil",
      "Apoio consultivo na escolha da linha",
    ],
    benefits: [
      "Preserva caixa",
      "Apoia crescimento",
      "Reduz dependência de emergência financeira",
    ],
    documents: ["CNPJ", "Extratos bancários", "Faturamento", "Documentos dos sócios"],
    averageTerm: "Análise inicial em 24 a 72 horas úteis",
    cta: "Simular capital de giro",
  },
  {
    id: "equipamentos",
    title: "Financiamento para modernizar estrutura e atendimento",
    shortTitle: "Equipamentos",
    description:
      "Financiamento para equipamentos médicos, odontológicos, laboratoriais, diagnósticos e tecnologia clínica.",
    icon: "landmark",
    audience: "Clínicas, consultórios, laboratórios, hospitais e profissionais com operação própria.",
    whenToUse: "Quando a aquisição do equipamento melhora receita, capacidade, eficiência ou qualidade do atendimento.",
    features: [
      "Equipamentos novos ou usados, conforme parceiro",
      "Prazos ajustados ao fluxo da operação",
      "Possibilidade de carência conforme análise",
      "Apoio na comparação de alternativas",
    ],
    benefits: [
      "Moderniza a estrutura",
      "Evita desembolso integral imediato",
      "Apoia crescimento com previsibilidade",
    ],
    documents: ["Orçamento do equipamento", "CNPJ ou CPF", "Comprovantes financeiros", "Documentos cadastrais"],
    averageTerm: "Análise inicial em 2 a 5 dias úteis",
    cta: "Financiar equipamento",
  },
  {
    id: "antecipacao",
    title: "Antecipe recebíveis e ganhe fôlego no caixa",
    shortTitle: "Antecipação",
    description:
      "Solução para antecipar vendas, recebíveis ou fluxos futuros e transformar previsões de recebimento em liquidez.",
    icon: "banknote",
    audience: "Farmácias, clínicas, consultórios e empresas com vendas parceladas ou recebimentos recorrentes.",
    whenToUse: "Quando o dinheiro a receber existe, mas o caixa precisa chegar antes para estoque, folha ou fornecedores.",
    features: [
      "Liquidez para necessidades de curto prazo",
      "Alternativas conforme recebíveis disponíveis",
      "Apoio na análise de custo efetivo",
      "Processo conectado ao perfil de faturamento",
    ],
    benefits: [
      "Acelera entrada de caixa",
      "Ajuda a honrar compromissos",
      "Reduz atrasos operacionais",
    ],
    documents: ["Extratos de recebíveis", "Faturamento", "Dados bancários", "Documentos cadastrais"],
    averageTerm: "Análise inicial em 24 a 48 horas úteis",
    cta: "Antecipar recebíveis",
  },
  {
    id: "homeequity",
    title: "Crédito com garantia para projetos maiores",
    shortTitle: "Home Equity",
    description:
      "Crédito com garantia de imóvel para reorganização financeira, expansão, investimento ou projetos de longo prazo.",
    icon: "home",
    audience: "Profissionais, empresários e empresas com imóvel disponível para garantia.",
    whenToUse: "Quando o projeto exige valor maior, prazo longo ou custo menor que linhas comuns de crédito.",
    features: [
      "Prazos mais longos",
      "Uso livre do recurso",
      "Alternativa para reorganização de dívidas",
      "Taxas potencialmente mais competitivas",
    ],
    benefits: [
      "Melhora o custo financeiro",
      "Permite projetos maiores",
      "Organiza compromissos em prazo longo",
    ],
    documents: ["Matrícula do imóvel", "Documentos pessoais ou societários", "Comprovantes de renda", "Dados do imóvel"],
    averageTerm: "Pré-análise em 3 a 7 dias úteis",
    cta: "Avaliar home equity",
  },
  {
    id: "seguros",
    title: "Proteção para carreira, operação e patrimônio",
    shortTitle: "Seguros",
    description:
      "Seguros profissionais e empresariais para reduzir riscos na atuação em saúde.",
    icon: "shield",
    audience: "Médicos, dentistas, clínicas, hospitais, farmácias e empresas da cadeia de saúde.",
    whenToUse: "Quando há exposição profissional, patrimônio físico, equipe, equipamentos ou responsabilidade técnica.",
    features: [
      "Responsabilidade Civil Profissional",
      "Seguro de vida e acidentes pessoais",
      "Seguro patrimonial para clínicas e empresas",
      "Coberturas conforme risco e atividade",
    ],
    benefits: [
      "Reduz exposição financeira",
      "Protege carreira e operação",
      "Dá mais previsibilidade em eventos críticos",
    ],
    documents: ["CPF ou CNPJ", "Atividade exercida", "Dados patrimoniais", "Histórico de cobertura, se houver"],
    averageTerm: "Cotação inicial em 1 a 3 dias úteis",
    cta: "Cotação de seguros",
  },
  {
    id: "pagamentos",
    title: "Receba melhor e organize seus pagamentos",
    shortTitle: "Pagamentos",
    description:
      "Soluções de pagamento para clínicas, farmácias, consultórios e operações digitais.",
    icon: "credit-card",
    audience: "Clínicas, consultórios, farmácias, laboratórios e negócios de saúde com atendimento recorrente.",
    whenToUse: "Quando a operação precisa vender parcelado, receber com mais controle ou reduzir fricção no pagamento.",
    features: [
      "Maquininhas e link de pagamento",
      "Parcelamento e gestão de recebimentos",
      "Taxas competitivas",
      "Possibilidade de integração com operação financeira",
    ],
    benefits: [
      "Melhora experiência do cliente",
      "Organiza recebimentos",
      "Apoia vendas e recorrência",
    ],
    documents: ["CNPJ", "Dados bancários", "Faturamento médio", "Documentos cadastrais"],
    averageTerm: "Implantação conforme solução e parceiro",
    cta: "Conhecer pagamentos",
  },
  {
    id: "planejamento",
    title: "Planejamento financeiro para profissionais da saúde",
    shortTitle: "Planejamento",
    description:
      "Estratégia para médicos, dentistas e profissionais PJ que querem organizar renda, patrimônio, proteção e futuro.",
    icon: "line-chart",
    audience: "Profissionais da saúde, sócios de clínicas e prestadores PJ.",
    whenToUse: "Quando a renda cresce, mas ainda falta estrutura para impostos, reservas, proteção e patrimônio.",
    features: [
      "Previdência privada",
      "Organização financeira e patrimonial",
      "Planejamento de renda",
      "Estratégia financeira para PJ da saúde",
    ],
    benefits: [
      "Dá clareza sobre renda e futuro",
      "Apoia decisões patrimoniais",
      "Reduz improviso financeiro",
    ],
    documents: ["Perfil financeiro", "Renda média", "Objetivos", "Estrutura PJ, se houver"],
    averageTerm: "Diagnóstico inicial conforme agenda consultiva",
    cta: "Planejar finanças",
  },
  {
    id: "credito-pacientes",
    title: "Crédito para facilitar acesso a tratamentos",
    shortTitle: "Crédito Paciente",
    description:
      "Alternativas para pacientes que precisam parcelar tratamentos, procedimentos ou cuidados de saúde.",
    icon: "heart-pulse",
    audience: "Pacientes e clínicas que desejam oferecer alternativas de pagamento para tratamentos.",
    whenToUse: "Quando o tratamento tem custo relevante e o pagamento à vista dificulta a decisão.",
    features: [
      "Parcelamento de tratamentos",
      "Análise de crédito conforme perfil",
      "Apoio para clínicas ampliarem conversão",
      "Fluxo simples para o paciente",
    ],
    benefits: [
      "Amplia acesso ao cuidado",
      "Ajuda a clínica a converter orçamentos",
      "Reduz barreira de pagamento imediato",
    ],
    documents: ["CPF", "Comprovante de renda", "Documento do tratamento", "Dados de contato"],
    averageTerm: "Análise inicial conforme parceiro financeiro",
    cta: "Simular crédito saúde",
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
