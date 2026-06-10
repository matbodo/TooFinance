import { useState } from "react";
import { navItems } from "../../data/ecosystem";
import { Button } from "../ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#" aria-label="TOO Finance - início">
          <span className="brand-mark" aria-hidden="true" />
          TOO <span>Finance</span>
        </a>

        <nav aria-label="Navegação principal">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Button href="#login" variant="outline">
            Acessar conta
          </Button>
          <Button href="#simulador">Simular agora</Button>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          Menu
        </button>
      </div>

      <div className={`mobile-panel ${isMenuOpen ? "is-open" : ""}`} id="mobile-menu">
        <div className="container">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
