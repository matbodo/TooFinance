
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { SiteStyles } from "./styles/SiteStyles";
import { BlogSection } from "./sections/BlogSection";
import { CTASection } from "./sections/CTASection";
import { EcosystemSection } from "./sections/EcosystemSection";
import { HeroSection } from "./sections/HeroSection";
import { NumbersSection } from "./sections/NumberSection";
import { PartnersSection } from "./sections/PartnersSection";
import { PersonasSection } from "./sections/PersonaSection";
import { SolutionsSection } from "./sections/SolutionSections";
import { TestimonialsSection } from "./sections/TestimonialSection";
import { TrustBar } from "./sections/TrustBar";
import { WhatsAppButton } from "./sections/WhatsappButton";

export default function App() {
  return (
    <>
      <SiteStyles />

      <Header />

      <main>
        <HeroSection />
        <TrustBar />
        <EcosystemSection />
        <SolutionsSection />
        <NumbersSection />
        <PersonasSection />
        <TestimonialsSection />
        <BlogSection />
        <PartnersSection />
        <CTASection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
