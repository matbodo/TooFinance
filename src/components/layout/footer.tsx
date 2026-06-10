import type { NavItem } from "../../types/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="brand footer-brand" href="#">
              <span className="brand-mark" aria-hidden="true" />
              TOO <span>Finance</span>
            </a>

            <p className="footer-description">
              Soluções financeiras para quem move o ecossistema da saúde.
            </p>
          </div>

          <FooterColumn
            title="Soluções"
            links={[
              { label: "Capital de Giro", href: "#produtos" },
              { label: "Financiamentos", href: "#produtos" },
              { label: "Seguros", href: "#produtos" },
              { label: "Home Equity", href: "#produtos" },
            ]}
          />

          <FooterColumn
            title="Empresa"
            links={[
              { label: "Sobre", href: "#sobre" },
              { label: "Conteúdo", href: "#conteudo" },
              { label: "Contato", href: "#contato" },
            ]}
          />

          <FooterColumn
            title="Contato"
            links={[
              { label: "contato@toofinance.com.br", href: "mailto:contato@toofinance.com.br" },
              { label: "(11) 0000-0000", href: "tel:+551100000000" },
            ]}
          />
        </div>

        <div className="footer-bottom">
          <p>© 2026 TOO Finance. Todos os direitos reservados.</p>
          <p>Política de Privacidade · Termos de Uso</p>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: NavItem[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
