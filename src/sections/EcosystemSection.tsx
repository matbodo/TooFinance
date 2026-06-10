import { IconToken } from "../components/ui/iconToken";
import { SectionHeader } from "../components/ui/sectionHeader";
import { ecosystemItems } from "../data/ecosystem";

export function EcosystemSection() {
  return (
    <section className="section" id="para-quem">
      <div className="container">
        <SectionHeader
          eyebrow="Ecossistema completo"
          title="Feito para todos que fazem a saúde acontecer"
          description="Da indústria farmacêutica ao paciente, passando por clínicas, hospitais e profissionais."
        />

        <div className="grid segment-grid section-grid">
          {ecosystemItems.map((item) => (
            <a className="card segment-card" href="#simulador" key={item.title}>
              <div className="segment-heading">
                <IconToken label={item.icon} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>

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

              <span className="card-cta">{item.cta}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
