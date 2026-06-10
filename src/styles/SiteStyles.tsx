
export function SiteStyles() {
  return (
    <style>{`
      @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap");

      :root {
        --color-primary: #1F4D35;
        --color-secondary: #2C6A49;
        --color-accent: #C7A65A;
        --color-bg: #FFFFFF;
        --color-bg-soft: #F5F7F3;
        --color-border: #DDE4D8;
        --color-text: #1A2118;
        --color-muted: #6D7768;

        --font-title: "IBM Plex Sans", sans-serif;
        --font-body: "Source Sans 3", sans-serif;

        --radius-sm: 6px;
        --radius-md: 8px;
        --radius-lg: 12px;
        --shadow-card: none;
        --shadow-soft: 0 4px 14px rgba(31, 77, 53, 0.06);
        --shadow-hover: 0 14px 30px rgba(31, 77, 53, 0.18);
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
        background: rgba(44, 106, 73, 0.10);
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
        letter-spacing: -0.015em;
      }

      h1 {
        font-size: clamp(2.35rem, 4.8vw, 3.65rem);
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
        border-radius: var(--radius-sm);
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
        background: var(--color-primary);
        color: #fff;
      }

      .button-primary:hover {
        background: var(--color-secondary);
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
        background: rgba(44, 106, 73, 0.10);
        color: var(--color-secondary);
        font-size: .72rem;
        font-weight: 800;
        flex: 0 0 auto;
      }

      .icon svg {
        width: 21px;
        height: 21px;
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
        box-shadow: 0 6px 18px rgba(31, 77, 53, 0.05);
      }

      .header-inner {
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        overflow: hidden;
      }

      .header-logo {
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        width: 156px;
        max-width: 34vw;
        height: 44px;
        overflow: hidden;
      }

      .header-logo img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: left center;
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
        border-radius: var(--radius-sm);
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
        min-width: 0;
      }

      .nav-links {
        list-style: none;
        color: var(--color-muted);
        font-weight: 600;
        font-size: .86rem;
      }

      .nav-links a {
        padding: 10px 8px;
        border-radius: var(--radius-sm);
      }

      .nav-links a:hover {
        background: var(--color-bg-soft);
        color: var(--color-secondary);
      }

      .menu-button {
        display: none;
        border: 0;
        background: var(--color-bg-soft);
        border-radius: var(--radius-sm);
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
        position: relative;
        display: grid;
        align-items: center;
        min-height: 560px;
        padding: 104px 0 108px;
        overflow: hidden;
        color: var(--color-text);
        background: #fff;
      }

      .hero::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
        background: #fff;
        clip-path: polygon(0 0, 62% 0, 38% 100%, 0 100%);
        pointer-events: none;
      }

      .hero-grid {
        display: block;
      }

      .hero-content {
        position: relative;
        z-index: 2;
        max-width: 560px;
      }

      .hero .lead {
        color: var(--color-muted);
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
        gap: 18px 28px;
        margin-top: 34px;
        padding-top: 22px;
        border-top: 1px solid var(--color-border);
      }

      .stat strong {
        display: block;
        font-family: var(--font-title);
        font-size: 1.35rem;
        color: var(--color-primary);
      }

      .stat span {
        color: var(--color-muted);
        font-size: .88rem;
      }

      .hero-media {
        position: absolute;
        inset: 0 0 0 auto;
        z-index: 0;
        width: 58vw;
        height: 100%;
        min-height: 100%;
        margin: 0;
        border-radius: 0;
        overflow: hidden;
        border: 0;
        box-shadow: none;
        background: var(--color-bg);
      }

      .hero-media-track {
        display: flex;
        width: 600%;
        height: 100%;
        animation: heroBannerSlide 34s ease-in-out infinite;
      }

      .hero-media img {
        display: block;
        flex: 0 0 calc(100% / 6);
        width: calc(100% / 6);
        height: 100%;
        min-height: 560px;
        object-fit: cover;
        object-position: center right;
      }

      @keyframes heroBannerSlide {
        0%, 13% {
          transform: translateX(0);
        }

        18%, 31% {
          transform: translateX(calc(-100% / 6));
        }

        36%, 49% {
          transform: translateX(calc(-200% / 6));
        }

        54%, 67% {
          transform: translateX(calc(-300% / 6));
        }

        72%, 85% {
          transform: translateX(calc(-400% / 6));
        }

        90%, 100% {
          transform: translateX(calc(-500% / 6));
        }
      }

      .hero-media::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, rgba(255,255,255,0), rgba(31,77,53,.08));
      }

      .hero-media figcaption {
        display: none;
      }

      .hero-media figcaption strong {
        display: block;
        color: var(--color-primary);
        font-weight: 800;
        margin-bottom: 2px;
      }

      .trust-bar {
        background: var(--color-primary);
      }

      .trust-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 14px 30px;
        padding: 18px 0;
        color: rgba(255,255,255,.78);
        font-family: var(--font-title);
        font-weight: 800;
        font-size: .84rem;
        letter-spacing: .02em;
      }

      .trust-item {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
      }

      .trust-item svg {
        color: var(--color-accent);
      }

      .segment-card,
      .persona-card,
      .article-card,
      .testimonial-card {
        transition: transform .18s ease, border-color .18s ease;
      }

      .segment-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        align-items: start;
      }

      .segment-card {
        display: flex;
        flex-direction: column;
        height: auto;
      }

      .segment-card:hover,
      .persona-card:hover,
      .article-card:hover,
      .testimonial-card:hover {
        transform: translateY(-3px);
        border-color: rgba(44,106,73,.35);
        box-shadow: var(--shadow-hover);
      }

      .segment-heading {
        display: grid;
        grid-template-columns: 42px 1fr;
        gap: 14px;
        align-items: start;
      }

      .persona-card h4,
      .article-card h4 {
        margin-top: 16px;
      }

      .segment-heading p {
        margin-top: 6px;
      }

      .segment-card p,
      .persona-card p,
      .article-card p,
      .testimonial-card p {
        margin-top: 10px;
        color: var(--color-muted);
        font-size: .94rem;
      }

      .segment-details {
        display: grid;
        gap: 16px;
        margin-top: 18px;
      }

      .segment-details div {
        padding-top: 14px;
        border-top: 1px solid var(--color-border);
      }

      .segment-details dt {
        color: var(--color-primary);
        font-size: .76rem;
        font-weight: 800;
        letter-spacing: .04em;
        text-transform: uppercase;
      }

      .segment-details dd {
        margin-top: 7px;
        color: var(--color-muted);
        font-size: .91rem;
      }

      .solution-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .card-cta {
        display: inline-flex;
        color: var(--color-secondary);
        font-family: var(--font-title);
        font-size: .9rem;
        font-weight: 800;
      }

      .segment-card-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        margin-top: 24px;
      }

      .segment-toggle {
        border: 1px solid var(--color-primary);
        border-radius: var(--radius-sm);
        background: var(--color-primary);
        color: #fff;
        cursor: pointer;
        font-family: var(--font-title);
        font-size: .84rem;
        font-weight: 800;
        padding: 9px 12px;
        transition: background .18s ease, border-color .18s ease, color .18s ease;
      }

      .segment-toggle:hover {
        border-color: var(--color-secondary);
        background: var(--color-secondary);
        color: #fff;
      }

      .segment-expand {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transform: translateY(-4px);
        transition: max-height .34s ease, opacity .22s ease, transform .28s ease;
      }

      .segment-card.is-expanded .segment-expand {
        max-height: 520px;
        opacity: 1;
        transform: translateY(0);
      }

      .cta-strip {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        margin-top: 34px;
        padding: 26px;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: #fff;
      }

      .cta-strip h3 {
        font-size: 1.25rem;
      }

      .cta-strip p {
        max-width: 660px;
        margin-top: 6px;
        color: var(--color-muted);
      }

      .article-link {
        display: inline-flex;
        margin-top: 18px;
        color: var(--color-secondary);
        font-weight: 800;
      }

      .how-header {
        max-width: 760px;
        margin-inline: auto;
        text-align: center;
      }

      .steps-timeline {
        position: relative;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 34px;
        margin-top: 70px;
      }

      .steps-timeline::before {
        content: "";
        position: absolute;
        top: 31px;
        left: calc(12.5% + 32px);
        right: calc(12.5% + 32px);
        height: 1px;
        background: var(--color-border);
      }

      .timeline-step {
        position: relative;
        z-index: 1;
        text-align: center;
      }

      .timeline-number {
        display: inline-grid;
        place-items: center;
        width: 64px;
        height: 64px;
        border-radius: 999px;
        background: var(--color-bg-soft);
        color: var(--color-secondary);
        font-family: var(--font-title);
        font-size: 1.55rem;
        font-weight: 800;
      }

      .timeline-step h3 {
        max-width: 250px;
        margin: 42px auto 0;
        color: #34383d;
        font-size: 1.28rem;
        line-height: 1.28;
      }

      .timeline-step p {
        max-width: 260px;
        margin: 18px auto 0;
        color: var(--color-text);
        font-size: 1rem;
        line-height: 1.45;
      }

      .security-item svg {
        color: var(--color-secondary);
      }

      .security-item p {
        margin-top: 6px;
        color: var(--color-muted);
        font-size: .94rem;
      }

      .security-layout {
        display: grid;
        grid-template-columns: .9fr 1.1fr;
        gap: 42px;
        align-items: start;
      }

      .security-layout .section-header {
        text-align: left;
      }

      .security-layout .section-header .lead {
        margin-inline: 0;
      }

      .security-list {
        display: grid;
        gap: 14px;
      }

      .security-item {
        display: grid;
        grid-template-columns: 42px 1fr;
        gap: 16px;
        padding: 22px;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #fff;
      }

      .faq-layout {
        display: grid;
        grid-template-columns: .82fr 1.18fr;
        gap: 46px;
        align-items: start;
      }

      .faq-layout .section-header {
        text-align: left;
      }

      .faq-layout .section-header .lead {
        margin-inline: 0;
      }

      .faq-list {
        display: grid;
        gap: 12px;
      }

      .faq-item {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #fff;
        overflow: clip;
        transition: border-color .18s ease, background .18s ease;
      }

      .security-item:hover,
      .cta-strip:hover {
        box-shadow: var(--shadow-hover);
      }

      .faq-item:hover {
        border-color: rgba(44,106,73,.35);
      }

      .faq-item button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        width: 100%;
        cursor: pointer;
        border: 0;
        background: transparent;
        padding: 20px 22px;
        color: var(--color-primary);
        font-family: var(--font-title);
        font-size: 1rem;
        font-weight: 800;
        text-align: left;
      }

      .faq-toggle {
        display: inline-grid;
        place-items: center;
        width: 22px;
        height: 22px;
        color: var(--color-secondary);
        transition: transform .2s ease;
        flex: 0 0 auto;
      }

      .faq-item.is-open .faq-toggle {
        transform: rotate(45deg);
      }

      .faq-answer {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transform: translateY(-4px);
        transition: max-height .34s ease, opacity .22s ease, transform .28s ease;
        will-change: max-height, opacity, transform;
      }

      .faq-answer > p {
        padding: 0 22px 22px;
        color: var(--color-muted);
        font-size: .94rem;
      }

      .faq-item.is-open .faq-answer {
        max-height: 240px;
        opacity: 1;
        transform: translateY(0);
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
        background: rgba(44,106,73,.10);
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
        top: clamp(96px, 18vh, 160px);
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
          radial-gradient(circle at top right, rgba(199,166,90,.14), transparent 28%),
          linear-gradient(145deg, var(--color-primary), var(--color-secondary));
        color: #fff;
      }

      .solution-card:hover {
        box-shadow: var(--shadow-hover);
      }

      .solution-card p {
        max-width: 620px;
        color: rgba(255,255,255,.74);
        margin-top: 12px;
      }

      .solution-details {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        margin-top: 28px;
      }

      .solution-details div {
        padding: 16px;
        border-radius: var(--radius-sm);
        background: rgba(255,255,255,.08);
      }

      .solution-details dt {
        color: var(--color-accent);
        font-size: .74rem;
        font-weight: 800;
        letter-spacing: .04em;
        text-transform: uppercase;
      }

      .solution-details dd {
        margin-top: 8px;
        color: rgba(255,255,255,.84);
        font-size: .9rem;
      }

      .solution-columns {
        display: grid;
        grid-template-columns: .92fr 1.08fr;
        gap: 18px;
        margin-top: 24px;
      }

      .solution-columns h4 {
        color: #fff;
        font-size: .95rem;
      }

      .feature-list {
        display: grid;
        gap: 12px;
        margin-top: 12px;
        list-style: none;
      }

      .feature-list li,
      .document-list li {
        padding: 14px;
        border-radius: var(--radius-sm);
        background: rgba(255,255,255,.08);
        color: rgba(255,255,255,.86);
        font-weight: 600;
        font-size: .92rem;
      }

      .document-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        margin-top: 12px;
        list-style: none;
      }

      .solution-actions {
        margin-top: 26px;
      }

      .simulator {
        margin-top: 20px;
      }

      .simulator-header {
        display: flex;
        justify-content: space-between;
        gap: 18px;
      }

      .simulator-header .eyebrow {
        margin-bottom: 10px;
      }

      .simulator-layout {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr);
        gap: 22px;
        align-items: start;
        margin-top: 24px;
      }

      .form-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 18px;
      }

      .simulator-form {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        margin-top: 0;
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
        box-shadow: inset 0 1px 2px rgba(31, 77, 53, 0.04);
      }

      .result-box {
        margin-top: 18px;
        padding: 18px;
        border-radius: var(--radius-md);
        background: rgba(44,106,73,.09);
        color: var(--color-secondary);
        font-weight: 800;
      }

      .result-box strong {
        display: block;
        font-family: var(--font-title);
        font-size: 1.7rem;
        color: var(--color-primary);
      }

      .simulation-summary {
        padding: 24px;
        border-radius: var(--radius-md);
        background: var(--color-primary);
        color: rgba(255,255,255,.72);
        box-shadow: var(--shadow-card);
      }

      .summary-label {
        display: inline-flex;
        margin-bottom: 8px;
        color: var(--color-accent);
        font-size: .76rem;
        font-weight: 800;
        letter-spacing: .04em;
        text-transform: uppercase;
      }

      .simulation-summary > strong {
        display: block;
        color: #fff;
        font-family: var(--font-title);
        font-size: clamp(1.7rem, 3vw, 2.35rem);
        line-height: 1.1;
      }

      .simulation-summary p {
        margin-top: 8px;
        font-size: .94rem;
      }

      .simulation-summary dl {
        display: grid;
        gap: 10px;
        margin-top: 20px;
        padding-top: 18px;
        border-top: 1px solid rgba(255,255,255,.14);
      }

      .simulation-summary div {
        display: flex;
        justify-content: space-between;
        gap: 16px;
      }

      .simulation-summary dt {
        color: rgba(255,255,255,.56);
        font-size: .82rem;
      }

      .simulation-summary dd {
        color: #fff;
        text-align: right;
        font-weight: 700;
      }

      .simulation-summary .button {
        width: 100%;
        margin-top: 22px;
      }

      .simulation-summary small {
        display: block;
        margin-top: 12px;
        color: rgba(255,255,255,.56);
        font-size: .78rem;
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
        background: rgba(44,106,73,.10);
        color: var(--color-secondary);
        font-family: var(--font-title);
        font-weight: 800;
      }

      .partners-section {
        position: relative;
        overflow: hidden;
        padding: 96px 0;
        color: #fff;
        background:
          radial-gradient(circle at 12% 18%, rgba(199,166,90,.18), transparent 28%),
          radial-gradient(circle at 88% 12%, rgba(255,255,255,.10), transparent 24%),
          linear-gradient(135deg, var(--color-primary), var(--color-secondary));
      }

      .partners-section::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);
        background-size: 72px 72px;
        opacity: .14;
        pointer-events: none;
      }

      .partners-header {
        position: relative;
        z-index: 1;
        max-width: 820px;
        text-align: center;
      }

      .partners-header h2 {
        color: #fff;
      }

      .partners-header p {
        max-width: 680px;
        margin: 16px auto 0;
        color: rgba(255,255,255,.72);
        font-size: 1.05rem;
      }

      .partners-marquee {
        position: relative;
        z-index: 1;
        margin-top: 46px;
        overflow: hidden;
      }

      .partners-marquee::before,
      .partners-marquee::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 2;
        width: min(14vw, 180px);
        pointer-events: none;
      }

      .partners-marquee::before {
        left: 0;
        background: linear-gradient(90deg, var(--color-primary), transparent);
      }

      .partners-marquee::after {
        right: 0;
        background: linear-gradient(270deg, var(--color-secondary), transparent);
      }

      .partners-track {
        display: flex;
        width: max-content;
        gap: 18px;
        will-change: transform;
      }

      .partner-logo-card {
        display: grid;
        place-items: center;
        width: 240px;
        height: 112px;
        padding: 14px 20px;
        border: 1px solid rgba(255,255,255,.18);
        border-radius: var(--radius-md);
        background: rgba(255,255,255,.94);
        box-shadow: 0 12px 28px rgba(7, 24, 16, .18);
        flex: 0 0 auto;
      }

      .partner-logo-card img {
        display: block;
        max-width: 100%;
        max-height: 74px;
        object-fit: contain;
      }

      .cta-box {
        padding: 72px 40px;
        border-radius: var(--radius-lg);
        text-align: center;
        color: #fff;
        background:
          radial-gradient(circle at top right, rgba(199,166,90,.20), transparent 30%),
          linear-gradient(135deg, var(--color-primary), var(--color-secondary));
      }

      .cta-box:hover {
        box-shadow: var(--shadow-hover);
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
        min-height: 50px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 9px;
        padding: 13px 18px;
        border-radius: 999px;
        background: #25D366;
        color: #fff;
        font-family: var(--font-title);
        font-size: .9rem;
        font-weight: 800;
        box-shadow: 0 10px 24px rgba(0,0,0,.18);
      }

      @media (max-width: 980px) {
        .hero-grid,
        .solutions-layout,
        .footer-grid,
        .security-layout,
        .faq-layout {
          grid-template-columns: 1fr;
        }

        .hero {
          min-height: auto;
          padding: 72px 0;
        }

        .hero::before {
          display: none;
        }

        .hero-grid {
          display: grid;
          gap: 36px;
        }

        .hero-content {
          max-width: 720px;
        }

        .hero-media {
          position: relative;
          inset: auto;
          width: 100%;
          height: auto;
          min-height: 320px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          pointer-events: auto;
        }

        .hero-media img {
          min-height: 320px;
        }

        .tabs {
          position: static;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .grid-3,
        .grid-4,
        .segment-grid,
        .numbers-grid,
        .steps-timeline {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .steps-timeline::before {
          display: none;
        }

        .form-grid {
          grid-template-columns: 1fr;
        }

        .simulator-layout {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 1120px) {
        .header-actions {
          display: none;
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

        .header-logo {
          width: 132px;
          height: 38px;
        }

        .section,
        .hero,
        .partners-section {
          padding: 64px 0;
        }

        .partner-logo-card {
          width: 190px;
          height: 92px;
          padding: 12px 16px;
        }

        .partner-logo-card img {
          max-height: 60px;
        }

        .hero-media {
          min-height: 260px;
          border-radius: var(--radius-md);
        }

        .hero-media img {
          min-height: 260px;
        }

        .feature-list,
        .solution-details,
        .solution-columns,
        .document-list,
        .tabs,
        .segment-grid,
        .grid-3,
        .grid-4,
        .numbers-grid {
          grid-template-columns: 1fr;
        }

        .security-item {
          grid-template-columns: 1fr;
        }

        .segment-card-actions {
          align-items: stretch;
          flex-direction: column;
        }

        .segment-toggle {
          width: 100%;
        }

        .steps-timeline {
          grid-template-columns: 1fr;
          gap: 28px;
          margin-top: 42px;
        }

        .timeline-step {
          padding: 24px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background: var(--color-bg-soft);
        }

        .timeline-step h3 {
          margin-top: 18px;
        }

        .cta-strip {
          align-items: stretch;
          flex-direction: column;
        }

        .button {
          width: 100%;
        }

        .footer-bottom {
          flex-direction: column;
        }

        .whatsapp {
          right: 14px;
          bottom: 14px;
          min-height: 46px;
          padding: 12px 14px;
        }

        .whatsapp span {
          display: none;
        }
      }
    `}</style>
  );
}
