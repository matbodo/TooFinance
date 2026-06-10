import { useMemo, useState } from "react";
import { Card } from "../components/ui/card";
import { IconToken } from "../components/ui/iconToken";
import { SectionHeader } from "../components/ui/sectionHeader";
import { solutions } from "../data/ecosystem";

export function SolutionsSection() {
  const [activeSolutionId, setActiveSolutionId] = useState(solutions[0].id);
  const [amount, setAmount] = useState(100000);

  const activeSolution = useMemo(() => {
    return solutions.find((solution) => solution.id === activeSolutionId) ?? solutions[0];
  }, [activeSolutionId]);

  const estimatedInstallment = useMemo(() => {
    return amount * 0.0485;
  }, [amount]);

  const formattedInstallment = useMemo(() => {
    return estimatedInstallment.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    });
  }, [estimatedInstallment]);

  return (
    <section className="section section-soft" id="produtos">
      <div className="container">
        <SectionHeader
          eyebrow="Soluções financeiras"
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
              <span className="eyebrow is-dark">{activeSolution.shortTitle}</span>
              <h3>{activeSolution.title}</h3>
              <p>{activeSolution.description}</p>

              <ul className="feature-list">
                {activeSolution.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>

            <Card className="simulator" id="simulador">
              <h3>Simulador rápido</h3>
              <p className="muted">
                Estimativa simples para visual da landing page. Depois você conecta isso em uma
                API ou regra real.
              </p>

              <div className="form-grid">
                <label>
                  Valor desejado
                  <input
                    type="number"
                    min={10000}
                    step={10000}
                    value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                  />
                </label>

                <label>
                  Prazo
                  <select defaultValue="36">
                    <option value="24">24 meses</option>
                    <option value="36">36 meses</option>
                    <option value="48">48 meses</option>
                  </select>
                </label>

                <label>
                  Perfil
                  <select defaultValue="clinica">
                    <option value="clinica">Clínica</option>
                    <option value="profissional">Profissional</option>
                    <option value="farmacia">Farmácia</option>
                    <option value="hospital">Hospital</option>
                  </select>
                </label>
              </div>

              <div className="result-box">
                Parcela estimada
                <strong>{formattedInstallment}/mês</strong>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
