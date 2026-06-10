import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import azosLogo from "../assets/azos.png";
import bradescoLogo from "../assets/bradesco.png";
import embraconLogo from "../assets/embracon.png";
import mapfreLogo from "../assets/mapfre.png";
import portoSeguroLogo from "../assets/porto-seguro.png";
import rodobensLogo from "../assets/rodobens.png";
import tokioMarineLogo from "../assets/tokio-marine.png";
import yelumLogo from "../assets/yelum.png";

const partnerLogos = [
  { name: "Azos", src: azosLogo },
  { name: "Bradesco", src: bradescoLogo },
  { name: "Embracon", src: embraconLogo },
  { name: "Mapfre", src: mapfreLogo },
  { name: "Porto Seguro", src: portoSeguroLogo },
  { name: "Rodobens", src: rodobensLogo },
  { name: "Tokio Marine", src: tokioMarineLogo },
  { name: "Yelum", src: yelumLogo },
];

export function PartnersSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const repeatedLogos = [...partnerLogos, ...partnerLogos];

  useEffect(() => {
    if (!trackRef.current) {
      return;
    }

    const animation = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 42,
      ease: "none",
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="partners-section" aria-labelledby="partners-title">
      <div className="container partners-header">
        <h2 id="partners-title">Um ecossistema conectado a grandes marcas financeiras</h2>
        <p>
          Relacionamento com bancos, seguradoras e empresas de soluções financeiras para ampliar as
          alternativas disponíveis ao setor de saúde.
        </p>
      </div>

      <div className="partners-marquee" aria-label="Lista de parceiros">
        <div className="partners-track" ref={trackRef}>
          {repeatedLogos.map((partner, index) => (
            <div className="partner-logo-card" key={`${partner.name}-${index}`}>
              <img src={partner.src} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
