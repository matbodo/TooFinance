import { Card } from "../components/ui/card";
import { SectionHeader } from "../components/ui/sectionHeader";
import { testimonials } from "../data/ecosystem";

export function TestimonialsSection() {
  return (
    <section className="section section-soft">
      <div className="container">
        <SectionHeader eyebrow="Depoimentos" title="Quem usa a TOO Finance conta" />

        <div className="grid grid-3 section-grid">
          {testimonials.map((testimonial) => (
            <Card className="testimonial-card" key={testimonial.author}>
              <p>“{testimonial.text}”</p>

              <div className="testimonial-author">
                <span className="avatar">{testimonial.initials}</span>
                <div>
                  <strong>{testimonial.author}</strong>
                  <br />
                  <small>{testimonial.role}</small>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
