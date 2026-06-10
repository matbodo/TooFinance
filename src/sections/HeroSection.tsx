import { Button } from "../components/ui/button";
import heroImage from "../assets/financial-1.jpg";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">

          <h1>
            Soluções financeiras para clínicas, profissionais e empresas da saúde.
          </h1>

          <p className="lead">
            Crédito, seguros, pagamentos e planejamento financeiro com atendimento especializado
            para quem precisa crescer, proteger a operação e organizar o caixa.
          </p>

          <div className="hero-actions">
            <Button href="#simulador">
              Simular solução
            </Button>
            <Button href="#como-funciona" variant="outline">
              Como funciona
            </Button>
          </div>

        </div>

        <figure className="hero-media">
          <img src={heroImage} alt="Análise financeira para operação de saúde" />
          <figcaption>
            <strong>Atendimento consultivo</strong>
            Análise de perfil, solução indicada e acompanhamento até a contratação.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
