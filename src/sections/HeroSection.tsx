import { Button } from "../components/ui/button";
import { heroStats } from "../data/ecosystem";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow is-dark">Fintech para saúde</span>

          <h1>
            O sistema financeiro feito para <em>quem cuida</em> da saúde
          </h1>

          <p className="lead">
            Da clínica ao hospital, do médico à farmácia: soluções financeiras que entendem
            seu mercado, seu fluxo e seu propósito.
          </p>

          <div className="hero-actions">
            <Button href="#simulador" variant="accent">
              Simular solução
            </Button>
            <Button href="#ecossistema" variant="light">
              Conhecer o ecossistema
            </Button>
          </div>

          <div className="hero-stats" aria-label="Indicadores">
            {heroStats.map((item) => (
              <div className="stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-card" aria-label="Exemplo de crédito aprovado">
          <small>Capital de giro aprovado</small>
          <strong>R$ 420.000</strong>
          <p>Clínica Multiperfil - SP</p>
          <span className="badge">Aprovado em 48h</span>
        </aside>
      </div>
    </section>
  );
}
