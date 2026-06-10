
function PartnersSection() {
  return (
    <section className="section section-soft">
      <div className="container">
        <SectionHeader eyebrow="Parceiros" title="Parceiros e integrações" />

        <div className="partners" aria-label="Lista de parceiros">
          {partners.map((partner) => (
            <span className="partner" key={partner}>
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}