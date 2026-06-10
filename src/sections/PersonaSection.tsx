
function PersonasSection() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <SectionHeader
          eyebrow="Jornadas" 
          title="A solução certa para cada momento da carreira"
          description="Personas organizadas como dados. Perfeito para renderizar por map no React."
        />

        <div className="grid grid-4 section-grid">
          {personas.map((persona) => (
            <Card className="persona-card" key={persona.name}>
              <span className="tag">{persona.segment}</span>
              <h4>{persona.name}</h4>
              <p>{persona.description}</p>

              <div className="tag-list">
                {persona.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
