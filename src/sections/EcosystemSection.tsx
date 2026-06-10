
function EcosystemSection() {
  return (
    <section className="section" id="ecossistema">
      <div className="container">
        <SectionHeader
          eyebrow="Ecossistema completo"
          title="Feito para todos que fazem a saúde acontecer"
          description="Da indústria farmacêutica ao paciente, passando por clínicas, hospitais e profissionais."
        />

        <div className="grid grid-auto section-grid">
          {ecosystemItems.map((item) => (
            <a className="card segment-card" href={item.href} key={item.title}>
              <IconToken label={item.icon} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}