import { Button } from "../components/ui/button";
import equipmentImageOne from "../assets/equipament-1.jpg";
import equipmentImageTwo from "../assets/equipament-2.jpg";
import equipmentImageThree from "../assets/equipament-3.jpg";
import heroImage from "../assets/financial-1.jpg";
import medicalImage from "../assets/medical-1.jpg";

const heroImages = [
  heroImage,
  medicalImage,
  equipmentImageOne,
  equipmentImageTwo,
  equipmentImageThree,
  heroImage,
];

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>Finanças para quem move a saúde.</h1>

          <p className="lead">
            Crédito, seguros, pagamentos e planejamento para clínicas, profissionais e empresas
            que precisam crescer, proteger a operação e organizar o caixa.
          </p>

          <div className="hero-actions">
            <Button href="#simulador">Simular solução</Button>
            <Button href="#como-funciona" variant="outline">
              Como funciona
            </Button>
          </div>
        </div>

        <figure className="hero-media" aria-label="Setor de saúde, atendimento e equipamentos">
          <div className="hero-media-track" aria-hidden="true">
            {heroImages.map((image, index) => (
              <img src={image} alt="" key={`${image}-${index}`} />
            ))}
          </div>

          <figcaption>
            <strong>Atendimento consultivo</strong>
            Análise de perfil, solução indicada e acompanhamento até a contratação.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
