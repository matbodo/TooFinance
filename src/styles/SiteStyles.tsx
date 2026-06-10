
export function SiteStyles() {
  return (
    <style>{`
      @import url("https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap");

      :root {
        --color-primary: #1A3C2E;
        --color-secondary: #2A6049;
        --color-accent: #C9A84C;
        --color-bg: #FFFFFF;
        --color-bg-soft: #F4F8F6;
        --color-border: #E3E8E5;
        --color-text: #1A201C;
        --color-muted: #68736D;

        --font-title: "Sora", sans-serif;
        --font-body: "Inter", sans-serif;

        --radius-sm: 10px;
        --radius-md: 16px;
        --radius-lg: 28px;
        --shadow-card: 0 10px 30px rgba(26, 60, 46, 0.08);
        --container: 1180px;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: var(--font-body);
        color: var(--color-text);
        background: var(--color-bg);
        line-height: 1.6;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button,
      input,
      select {
        font: inherit;
      }

      .container {
        width: min(100% - 40px, var(--container));
        margin-inline: auto;
      }

      .section {
        padding: 96px 0;
      }

      .section-soft {
        background: var(--color-bg-soft);
      }

      .section-dark {
        background: var(--color-primary);
        color: #fff;
      }

      .section-header {
        text-align: center;
      }

      .section-header .lead {
        margin-inline: auto;
      }

      .section-grid {
        margin-top: 42px;
      }

      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 16px;
        padding: 7px 12px;
        border-radius: 999px;
        background: rgba(42, 96, 73, 0.10);
        color: var(--color-secondary);
        font-size: 0.76rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }

      .eyebrow.is-dark {
        background: rgba(255,255,255,0.10);
        color: rgba(255,255,255,0.82);
      }

      .eyebrow::before {
        content: "";
        width: 7px;
        height: 7px;
        border-radius: 999px;
        background: var(--color-accent);
      }

      h1,
      h2,
      h3,
      h4 {
        font-family: var(--font-title);
        line-height: 1.15;
        letter-spacing: -0.03em;
      }

      h1 {
        font-size: clamp(2.4rem, 6vw, 4.4rem);
        font-weight: 800;
      }

      h2 {
        font-size: clamp(1.9rem, 4vw, 3rem);
        font-weight: 800;
      }

      h3 {
        font-size: clamp(1.35rem, 2.2vw, 2rem);
        font-weight: 700;
      }

      h4 {
        font-size: 1.05rem;
        font-weight: 700;
      }

      .lead {
        max-width: 640px;
        margin-top: 16px;
        color: var(--color-muted);
        font-size: 1.08rem;
      }

      .muted {
        margin-top: 8px;
        color: var(--color-muted);
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 46px;
        padding: 12px 22px;
        border: 1px solid transparent;
        border-radius: 999px;
        font-family: var(--font-title);
        font-size: 0.93rem;
        font-weight: 700;
        cursor: pointer;
        transition: transform .18s ease, background .18s ease, border-color .18s ease;
      }

      .button:hover {
        transform: translateY(-1px);
      }

      .button-primary {
        background: var(--color-secondary);
        color: #fff;
      }

      .button-accent {
        background: var(--color-accent);
        color: var(--color-primary);
      }

      .button-light {
        background: #fff;
        color: var(--color-primary);
      }

      .button-outline {
        border-color: var(--color-secondary);
        color: var(--color-secondary);
        background: transparent;
      }

      .icon {
        display: inline-grid;
        place-items: center;
        width: 42px;
        height: 42px;
        border-radius: var(--radius-sm);
        background: rgba(42, 96, 73, 0.10);
        color: var(--color-secondary);
        font-size: .72rem;
        font-weight: 800;
        flex: 0 0 auto;
      }

      .card {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #fff;
        padding: 28px;
        box-shadow: var(--shadow-card);
      }

      .grid {
        display: grid;
        gap: 24px;
      }

      .grid-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .grid-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .grid-auto {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      .site-header {
        position: sticky;
        top: 0;
        z-index: 20;
        background: rgba(255,255,255,.94);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--color-border);
      }

      .header-inner {
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }

      .brand {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: var(--font-title);
        font-weight: 800;
        font-size: 1.25rem;
        color: var(--color-primary);
      }

      .brand-mark {
        width: 36px;
        height: 36px;
        border-radius: 11px;
        background: var(--color-secondary);
      }

      .brand span {
        color: var(--color-secondary);
      }

      .footer-brand {
        color: #fff;
      }

      .nav-links,
      .header-actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .nav-links {
        list-style: none;
        color: var(--color-muted);
        font-weight: 600;
        font-size: .92rem;
      }

      .nav-links a {
        padding: 10px 12px;
        border-radius: 10px;
      }

      .nav-links a:hover {
        background: var(--color-bg-soft);
        color: var(--color-secondary);
      }

      .menu-button {
        display: none;
        border: 0;
        background: var(--color-bg-soft);
        border-radius: 10px;
        padding: 10px 12px;
        color: var(--color-primary);
        font-weight: 800;
        cursor: pointer;
      }

      .mobile-panel {
        display: none;
        border-top: 1px solid var(--color-border);
        padding: 16px 0 22px;
      }

      .mobile-panel.is-open {
        display: block;
      }

      .mobile-panel a {
        display: block;
        padding: 12px 0;
        color: var(--color-muted);
        font-weight: 600;
      }

      .hero {
        min-height: calc(100vh - 72px);
        display: grid;
        align-items: center;
        padding: 96px 0;
        color: #fff;
        background:
          radial-gradient(circle at 85% 20%, rgba(201,168,76,.18), transparent 30%),
          linear-gradient(145deg, var(--color-primary), var(--color-secondary));
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1.1fr .9fr;
        gap: 64px;
        align-items: center;
      }

      .hero h1 em {
        color: var(--color-accent);
        font-style: normal;
      }

      .hero .lead {
        color: rgba(255,255,255,.75);
      }

      .hero-actions {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
        margin-top: 32px;
      }

      .hero-stats {
        display: flex;
        flex-wrap: wrap;
        gap: 28px;
        margin-top: 44px;
        padding-top: 28px;
        border-top: 1px solid rgba(255,255,255,.14);
      }

      .stat strong {
        display: block;
        font-family: var(--font-title);
        font-size: 1.55rem;
        color: #fff;
      }

      .stat span {
        color: rgba(255,255,255,.60);
        font-size: .88rem;
      }

      .hero-card {
        border: 1px solid rgba(255,255,255,.14);
        border-radius: var(--radius-lg);
        padding: 32px;
        background: rgba(255,255,255,.08);
      }

      .hero-card small {
        display: block;
        color: rgba(255,255,255,.58);
        text-transform: uppercase;
        letter-spacing: .08em;
        font-weight: 700;
        margin-bottom: 12px;
      }

      .hero-card strong {
        display: block;
        font-family: var(--font-title);
        font-size: 2.2rem;
        color: #fff;
        line-height: 1;
      }

      .hero-card p {
        margin-top: 10px;
        color: rgba(255,255,255,.70);
      }

      .hero-card .badge {
        display: inline-block;
        margin-top: 16px;
        padding: 5px 10px;
        border-radius: 999px;
        background: rgba(201,168,76,.18);
        color: var(--color-accent);
        font-weight: 800;
        font-size: .78rem;
      }

      .trust-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px 28px;
        padding: 20px;
        background: var(--color-primary);
        color: rgba(255,255,255,.65);
        font-weight: 700;
        font-size: .86rem;
      }

      .segment-card,
      .persona-card,
      .article-card,
      .testimonial-card {
        height: 100%;
        transition: transform .18s ease, border-color .18s ease;
      }

      .segment-card:hover,
      .persona-card:hover,
      .article-card:hover,
      .testimonial-card:hover {
        transform: translateY(-3px);
        border-color: rgba(42,96,73,.35);
      }

      .segment-card h4,
      .persona-card h4,
      .article-card h4 {
        margin-top: 16px;
      }

      .segment-card p,
      .persona-card p,
      .article-card p,
      .testimonial-card p {
        margin-top: 10px;
        color: var(--color-muted);
        font-size: .94rem;
      }

      .article-link {
        display: inline-flex;
        margin-top: 18px;
        color: var(--color-secondary);
        font-weight: 800;
      }

      .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 18px;
      }

      .tag {
        display: inline-flex;
        padding: 5px 10px;
        border-radius: 999px;
        background: rgba(42,96,73,.10);
        color: var(--color-secondary);
        font-size: .76rem;
        font-weight: 800;
      }

      .solutions-layout {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 36px;
        align-items: start;
        margin-top: 48px;
      }

      .tabs {
        position: sticky;
        top: 94px;
        display: grid;
        gap: 8px;
      }

      .tab-button {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        border: 0;
        border-radius: var(--radius-md);
        background: #fff;
        color: var(--color-text);
        padding: 14px;
        text-align: left;
        cursor: pointer;
        border: 1px solid var(--color-border);
      }

      .tab-button.is-active {
        background: var(--color-secondary);
        color: #fff;
        border-color: var(--color-secondary);
      }

      .tab-button.is-active .icon {
        background: rgba(255,255,255,.16);
        color: #fff;
      }

      .solution-card {
        padding: 42px;
        border-radius: var(--radius-lg);
        background:
          radial-gradient(circle at top right, rgba(201,168,76,.14), transparent 28%),
          linear-gradient(145deg, var(--color-primary), var(--color-secondary));
        color: #fff;
      }

      .solution-card p {
        max-width: 620px;
        color: rgba(255,255,255,.74);
        margin-top: 12px;
      }

      .feature-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        margin-top: 28px;
        list-style: none;
      }

      .feature-list li {
        padding: 14px;
        border-radius: var(--radius-sm);
        background: rgba(255,255,255,.08);
        color: rgba(255,255,255,.86);
        font-weight: 600;
        font-size: .92rem;
      }

      .simulator {
        margin-top: 20px;
      }

      .form-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 18px;
      }

      label {
        display: grid;
        gap: 8px;
        color: var(--color-muted);
        font-weight: 700;
        font-size: .78rem;
        text-transform: uppercase;
        letter-spacing: .04em;
      }

      input,
      select {
        width: 100%;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        padding: 13px 14px;
        background: var(--color-bg-soft);
        color: var(--color-text);
      }

      .result-box {
        margin-top: 18px;
        padding: 18px;
        border-radius: var(--radius-md);
        background: rgba(42,96,73,.09);
        color: var(--color-secondary);
        font-weight: 800;
      }

      .result-box strong {
        display: block;
        font-family: var(--font-title);
        font-size: 1.7rem;
        color: var(--color-primary);
      }

      .numbers-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1px;
        margin-top: 42px;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,.10);
        border-radius: var(--radius-lg);
        background: rgba(255,255,255,.10);
      }

      .number-item {
        padding: 38px 24px;
        text-align: center;
        background: var(--color-primary);
      }

      .number-item strong {
        display: block;
        font-family: var(--font-title);
        font-size: 2.35rem;
        color: #fff;
      }

      .number-item span {
        color: rgba(255,255,255,.58);
      }

      .testimonial-author {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 22px;
      }

      .avatar {
        display: grid;
        place-items: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: rgba(42,96,73,.10);
        color: var(--color-secondary);
        font-family: var(--font-title);
        font-weight: 800;
      }

      .partners {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        margin-top: 28px;
      }

      .partner {
        padding: 12px 18px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--color-border);
        background: #fff;
        color: var(--color-muted);
        font-family: var(--font-title);
        font-weight: 800;
        font-size: .88rem;
      }

      .cta-box {
        padding: 72px 40px;
        border-radius: var(--radius-lg);
        text-align: center;
        color: #fff;
        background:
          radial-gradient(circle at top right, rgba(201,168,76,.20), transparent 30%),
          linear-gradient(135deg, var(--color-primary), var(--color-secondary));
      }

      .cta-box p {
        max-width: 620px;
        margin: 16px auto 0;
        color: rgba(255,255,255,.72);
      }

      .cta-actions {
        display: flex;
        justify-content: center;
        gap: 14px;
        flex-wrap: wrap;
        margin-top: 30px;
      }

      .site-footer {
        padding: 72px 0 24px;
        background: var(--color-primary);
        color: rgba(255,255,255,.62);
      }

      .footer-grid {
        display: grid;
        grid-template-columns: 2fr repeat(3, 1fr);
        gap: 40px;
        margin-bottom: 48px;
      }

      .footer-description {
        margin-top: 16px;
        max-width: 340px;
      }

      .footer-grid h4 {
        color: #fff;
        font-size: .92rem;
        text-transform: uppercase;
        letter-spacing: .06em;
        margin-bottom: 14px;
      }

      .footer-grid ul {
        list-style: none;
        display: grid;
        gap: 8px;
      }

      .footer-grid a:hover {
        color: #fff;
      }

      .footer-bottom {
        padding-top: 22px;
        border-top: 1px solid rgba(255,255,255,.10);
        display: flex;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        font-size: .85rem;
        color: rgba(255,255,255,.42);
      }

      .whatsapp {
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 30;
        width: 54px;
        height: 54px;
        display: grid;
        place-items: center;
        border-radius: 999px;
        background: #25D366;
        color: #fff;
        font-weight: 900;
        box-shadow: 0 10px 24px rgba(0,0,0,.18);
      }

      @media (max-width: 980px) {
        .hero-grid,
        .solutions-layout,
        .footer-grid {
          grid-template-columns: 1fr;
        }

        .tabs {
          position: static;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .grid-3,
        .grid-4,
        .numbers-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .form-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 760px) {
        .nav-links,
        .header-actions {
          display: none;
        }

        .menu-button {
          display: inline-flex;
        }

        .section,
        .hero {
          padding: 64px 0;
        }

        .hero-card {
          display: none;
        }

        .feature-list,
        .tabs,
        .grid-3,
        .grid-4,
        .numbers-grid {
          grid-template-columns: 1fr;
        }

        .button {
          width: 100%;
        }

        .footer-bottom {
          flex-direction: column;
        }

        .whatsapp {
          width: 50px;
          height: 50px;
        }
      }
    `}</style>
  );
}
