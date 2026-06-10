import { useMemo, useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { IconToken } from "../components/ui/iconToken";
import { SectionHeader } from "../components/ui/sectionHeader";
import { solutions } from "../data/ecosystem";

const profileOptions = [
  { value: "clinica", label: "Clínica ou hospital" },
  { value: "profissional", label: "Profissional da saúde" },
  { value: "farmacia", label: "Farmácia ou varejo" },
  { value: "industria", label: "Indústria ou distribuição" },
  { value: "educacao", label: "Educação em saúde" },
  { value: "paciente", label: "Paciente" },
];

const termOptions = [12, 24, 36, 48, 60];

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export function SolutionsSection() {
  const [activeSolutionId, setActiveSolutionId] = useState(solutions[0].id);
  const [amount, setAmount] = useState(100000);
  const [term, setTerm] = useState(36);
  const [profile, setProfile] = useState(profileOptions[0].value);
  const [monthlyRevenue, setMonthlyRevenue] = useState(80000);
  const [location, setLocation] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const activeSolution = useMemo(() => {
    return solutions.find((solution) => solution.id === activeSolutionId) ?? solutions[0];
  }, [activeSolutionId]);

  const selectedProfile = useMemo(() => {
    return profileOptions.find((option) => option.value === profile)?.label ?? profileOptions[0].label;
  }, [profile]);

  const estimatedInstallment = useMemo(() => {
    const monthlyRate = activeSolutionId === "homeequity" ? 0.018 : 0.032;
    const factor = monthlyRate / (1 - (1 + monthlyRate) ** -term);

    return amount * factor;
  }, [activeSolutionId, amount, term]);

  const formattedAmount = useMemo(() => formatCurrency(amount), [amount]);
  const formattedRevenue = useMemo(() => formatCurrency(monthlyRevenue), [monthlyRevenue]);
  const formattedInstallment = useMemo(
    () => formatCurrency(estimatedInstallment),
    [estimatedInstallment],
  );

  return (
    <section className="section" id="produtos">
      <div className="container">
        <SectionHeader
          title="Tudo que o ecossistema de saúde precisa"
          description="Linhas de produtos desenhadas para quem vive o mercado de saúde todos os dias."
        />

        <div className="solutions-layout">
          <div className="tabs" role="tablist" aria-label="Soluções">
            {solutions.map((solution) => {
              const isActive = solution.id === activeSolutionId;

              return (
                <button
                  className={`tab-button ${isActive ? "is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  key={solution.id}
                  onClick={() => setActiveSolutionId(solution.id)}
                >
                  <IconToken label={solution.icon} />
                  <strong>{solution.shortTitle}</strong>
                </button>
              );
            })}
          </div>

          <div>
            <article className="solution-card">
              <h3>{activeSolution.title}</h3>
              <p>{activeSolution.description}</p>

              <dl className="solution-details">
                <div>
                  <dt>Para quem é</dt>
                  <dd>{activeSolution.audience}</dd>
                </div>

                <div>
                  <dt>Quando usar</dt>
                  <dd>{activeSolution.whenToUse}</dd>
                </div>

                <div>
                  <dt>Prazo médio</dt>
                  <dd>{activeSolution.averageTerm}</dd>
                </div>
              </dl>

              <div className="solution-columns">
                <div>
                  <h4>Benefícios</h4>
                  <ul className="feature-list">
                    {activeSolution.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Documentos normalmente necessários</h4>
                  <ul className="document-list">
                    {activeSolution.documents.map((document) => (
                      <li key={document}>{document}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="solution-actions">
                <Button href="#simulador" variant="accent">
                  {activeSolution.cta}
                </Button>
              </div>
            </article>

            <Card className="simulator" id="simulador">
              <div className="simulator-header">
                <div>
                  <h3>Pré-análise orientativa</h3>
                  <p className="muted">
                    Informe os dados principais para gerar um resumo inicial. As condições finais
                    dependem de análise, parceiro, documentação e perfil.
                  </p>
                </div>
              </div>

              <div className="simulator-layout">
                <div className="form-grid simulator-form">
                  <label>
                    Solução desejada
                    <select
                      value={activeSolutionId}
                      onChange={(event) => setActiveSolutionId(event.target.value)}
                    >
                      {solutions.map((solution) => (
                        <option value={solution.id} key={solution.id}>
                          {solution.shortTitle}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Perfil
                    <select value={profile} onChange={(event) => setProfile(event.target.value)}>
                      {profileOptions.map((option) => (
                        <option value={option.value} key={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Valor desejado
                    <input
                      type="number"
                      min={5000}
                      step={5000}
                      value={amount}
                      onChange={(event) => setAmount(Number(event.target.value))}
                    />
                  </label>

                  <label>
                    Prazo desejado
                    <select value={term} onChange={(event) => setTerm(Number(event.target.value))}>
                      {termOptions.map((option) => (
                        <option value={option} key={option}>
                          {option} meses
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Faturamento ou renda mensal
                    <input
                      type="number"
                      min={0}
                      step={5000}
                      value={monthlyRevenue}
                      onChange={(event) => setMonthlyRevenue(Number(event.target.value))}
                    />
                  </label>

                  <label>
                    Cidade e UF
                    <input
                      type="text"
                      placeholder="Ex.: São Paulo, SP"
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                    />
                  </label>

                  <label>
                    Nome para contato
                    <input
                      type="text"
                      placeholder="Seu nome"
                      value={contactName}
                      onChange={(event) => setContactName(event.target.value)}
                    />
                  </label>

                  <label>
                    WhatsApp
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={contactPhone}
                      onChange={(event) => setContactPhone(event.target.value)}
                    />
                  </label>
                </div>

                <aside className="simulation-summary" aria-label="Resumo da simulação">
                  <span className="summary-label">Resumo inicial</span>
                  <strong>{formattedInstallment}/mês</strong>
                  <p>
                    Estimativa orientativa para {activeSolution.shortTitle.toLowerCase()} em{" "}
                    {term} meses.
                  </p>

                  <dl>
                    <div>
                      <dt>Perfil</dt>
                      <dd>{selectedProfile}</dd>
                    </div>
                    <div>
                      <dt>Valor desejado</dt>
                      <dd>{formattedAmount}</dd>
                    </div>
                    <div>
                      <dt>Faturamento/renda</dt>
                      <dd>{formattedRevenue}</dd>
                    </div>
                    <div>
                      <dt>Localização</dt>
                      <dd>{location || "A informar"}</dd>
                    </div>
                  </dl>

                  <a className="button button-primary" href="#contato">
                    Solicitar análise
                  </a>
                  <small>
                    {contactName || contactPhone
                      ? "Dados de contato preenchidos para encaminhamento comercial."
                      : "Preencha seus dados para facilitar o próximo contato."}
                  </small>
                </aside>
              </div>
            </Card>
          </div>
        </div>

        <div className="cta-strip">
          <div>
            <h3>Não sabe qual solução escolher?</h3>
            <p>
              Fale com um consultor para comparar crédito, seguros, pagamentos e planejamento de
              acordo com seu perfil.
            </p>
          </div>
          <Button href="#contato">Falar com um consultor</Button>
        </div>
      </div>
    </section>
  );
}
