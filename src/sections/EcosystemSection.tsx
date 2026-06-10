import { useState } from "react";
import { IconToken } from "../components/ui/iconToken";
import { SectionHeader } from "../components/ui/sectionHeader";
import { ecosystemItems } from "../data/ecosystem";

export function EcosystemSection() {
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  function toggleCard(title: string) {
    setExpandedCards((current) =>
      current.includes(title) ? current.filter((item) => item !== title) : [...current, title],
    );
  }

  return (
    <section className="section" id="para-quem">
      <div className="container">
        <SectionHeader
          title="Feito para todos que fazem a saúde acontecer"
          description="Da indústria farmacêutica ao paciente, passando por clínicas, hospitais e profissionais."
        />

        <div className="grid segment-grid section-grid">
          {ecosystemItems.map((item) => {
            const isExpanded = expandedCards.includes(item.title);

            return (
              <article
                className={`card segment-card ${isExpanded ? "is-expanded" : ""}`}
                key={item.title}
              >
                <div className="segment-heading">
                  <IconToken label={item.icon} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>

                <div className="segment-card-actions">
                  <a className="card-cta" href="#simulador">
                    {item.cta}
                  </a>

                  <button
                    className="segment-toggle"
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => toggleCard(item.title)}
                  >
                    {isExpanded ? "Ocultar detalhes" : "Ver detalhes"}
                  </button>
                </div>

                <div className="segment-expand">
                  <dl className="segment-details">
                    <div>
                      <dt>Problema principal</dt>
                      <dd>{item.problem}</dd>
                    </div>

                    <div>
                      <dt>Soluções indicadas</dt>
                      <dd>
                        <span className="solution-tags">
                          {item.indicatedSolutions.map((solution) => (
                            <span className="tag" key={solution}>
                              {solution}
                            </span>
                          ))}
                        </span>
                      </dd>
                    </div>

                    <div>
                      <dt>Benefício direto</dt>
                      <dd>{item.benefit}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
