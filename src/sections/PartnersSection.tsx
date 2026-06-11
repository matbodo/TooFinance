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
  const repeatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="partners-section" aria-label="Parceiros financeiros">
      <div className="partners-marquee" aria-label="Lista de parceiros">
        <div className="partners-track">
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
