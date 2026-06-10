import { Button } from "../components/ui/button";

export function CTASection() {
  return (
    <section className="section" id="contato">
      <div className="container">
        <div className="cta-box">
          <h2>Pronto para ter um sistema financeiro que entende a saúde?</h2>
          <p>
            Fale com um especialista e descubra a melhor solução para sua operação, carreira ou
            tratamento.
          </p>

          <div className="cta-actions">
            <Button href="#simulador" variant="accent">
              Simular agora
            </Button>
            <Button href="mailto:contato@toofinance.com.br" variant="light">
              Falar com especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
