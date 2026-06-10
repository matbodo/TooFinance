import { Card } from "../components/ui/card";
import { SectionHeader } from "../components/ui/sectionHeader";
import { articles } from "../data/ecosystem";

export function BlogSection() {
  return (
    <section className="section" id="conteudo">
      <div className="container">
        <SectionHeader
          title="Educacao financeira para o setor de saude"
          description="Guias e insights para organizar caixa, proteger patrimonio e tomar decisoes financeiras melhores."
        />

        <div className="grid grid-3 section-grid">
          {articles.map((article) => (
            <Card className="article-card" key={article.title}>
              <span className="tag">{article.category}</span>
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <a className="article-link" href={article.href}>
                Ler artigo
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
