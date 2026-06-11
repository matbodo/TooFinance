import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  ClipboardCheck,
  Handshake,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import trustImage from "../assets/trust.png";
import { Button } from "../components/ui/button";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Especialistas em saúde",
    description:
      "Soluções pensadas para clínicas, consultórios, profissionais e empresas do ecossistema de saúde.",
  },
  {
    icon: ClipboardCheck,
    title: "Análise com critério",
    description:
      "Avaliamos perfil, necessidade, prazo e objetivo antes de indicar crédito, seguro ou planejamento.",
  },
  {
    icon: Handshake,
    title: "Parceiros selecionados",
    description:
      "Conectamos você a alternativas compatíveis com sua realidade operacional e financeira.",
  },
  {
    icon: ShieldCheck,
    title: "Processo seguro",
    description:
      "Dados e documentos são conduzidos com responsabilidade, clareza e acompanhamento próximo.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Decisão mais clara",
    description:
      "Você compara opções com apoio consultivo para contratar com mais previsibilidade.",
  },
];

const carouselDotCount = 3;

type CarouselState = {
  activeIndex: number;
  canScrollLeft: boolean;
  canScrollRight: boolean;
};

const initialCarouselState: CarouselState = {
  activeIndex: 0,
  canScrollLeft: false,
  canScrollRight: true,
};

export function WhyTooFinanceSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    hasMoved: false,
    isDown: false,
    scrollLeft: 0,
    startX: 0,
  });
  const [carousel, setCarousel] = useState(initialCarouselState);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".why-card");

    if (!track || !firstCard) return 320;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");

    return firstCard.offsetWidth + gap;
  }, []);

  const updateCarouselState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const scrollProgress = maxScroll <= 0 ? 0 : track.scrollLeft / maxScroll;
    const activeIndex = Math.min(
      carouselDotCount - 1,
      Math.max(0, Math.round(scrollProgress * (carouselDotCount - 1))),
    );

    setCarousel({
      activeIndex,
      canScrollLeft: track.scrollLeft > 4,
      canScrollRight: track.scrollLeft < maxScroll - 4,
    });
  }, []);

  function scrollBenefits(direction: "left" | "right") {
    trackRef.current?.scrollBy({
      left: direction === "left" ? -getStep() : getStep(),
      behavior: "smooth",
    });
  }

  function startDragging(event: PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || event.button !== 0) return;

    dragRef.current = {
      hasMoved: false,
      isDown: true,
      scrollLeft: track.scrollLeft,
      startX: event.clientX,
    };

    track.classList.add("is-dragging");
  }

  function dragBenefits(event: PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !dragRef.current.isDown) return;

    const distance = event.clientX - dragRef.current.startX;

    if (Math.abs(distance) > 3) {
      dragRef.current.hasMoved = true;
      track.scrollLeft = dragRef.current.scrollLeft - distance;
      event.preventDefault();
    }
  }

  function stopDragging() {
    const track = trackRef.current;

    dragRef.current.isDown = false;
    track?.classList.remove("is-dragging");
    updateCarouselState();
  }

  function preventLinkClickAfterDrag(event: MouseEvent<HTMLDivElement>) {
    if (!dragRef.current.hasMoved) return;

    event.preventDefault();
    event.stopPropagation();
    dragRef.current.hasMoved = false;
  }

  useEffect(() => {
    updateCarouselState();

    window.addEventListener("resize", updateCarouselState);
    return () => window.removeEventListener("resize", updateCarouselState);
  }, [updateCarouselState]);

  return (
    <section className="section section why-section" id="porque-too">
      <div className="container">
        <div className="why-hero">
          <figure className="why-image">
            <img src={trustImage} alt="Profissional de saúde em atendimento consultivo" />
          </figure>

          <div className="why-copy">
            <h2>Por que TOO Finance?</h2>
            <p>
              A TOO Finance aproxima clínicas, profissionais e empresas das soluções certas para
              crescer, proteger a operação e decidir com mais clareza. Nosso atendimento combina
              análise de perfil, curadoria de parceiros e acompanhamento consultivo para indicar
              caminhos mais adequados a cada momento financeiro.
            </p>
            <Button href="#simulador">Solicitar análise</Button>
          </div>
        </div>

        <div className="why-products">
          <div className="why-products-title">
            <h3>Soluções para cada momento da operação</h3>
          </div>

          <div className="why-carousel">
            <div
              className={`why-carousel-window ${carousel.canScrollLeft ? "has-left" : ""} ${
                carousel.canScrollRight ? "has-right" : ""
              }`}
            >
              <div
                className="why-benefits"
                ref={trackRef}
                onClickCapture={preventLinkClickAfterDrag}
                onPointerCancel={stopDragging}
                onPointerDown={startDragging}
                onPointerLeave={stopDragging}
                onPointerMove={dragBenefits}
                onPointerUp={stopDragging}
                onScroll={updateCarouselState}
              >
                {benefits.map(({ description, icon: Icon, title }) => (
                  <article className="why-card" key={title}>
                    <span className="why-icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href="#solucoes" className="why-card-link">
                      Saiba mais
                      <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <div className="why-controls" aria-label="Navegar benefícios">
              <button
                type="button"
                aria-label="Ver benefícios anteriores"
                disabled={!carousel.canScrollLeft}
                onClick={() => scrollBenefits("left")}
              >
                <ArrowLeft size={20} strokeWidth={2} />
              </button>
              <div className="why-dots" aria-hidden="true">
                {Array.from({ length: carouselDotCount }, (_, index) => (
                  <span
                    className={index === carousel.activeIndex ? "is-active" : ""}
                    key={index}
                    />
                ))}
              </div>
              <button
                type="button"
                aria-label="Ver próximos benefícios"
                disabled={!carousel.canScrollRight}
                onClick={() => scrollBenefits("right")}
              >
                <ArrowRight size={20} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
