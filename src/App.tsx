
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { SiteStyles } from "./styles/SiteStyles";
import { BlogSection } from "./sections/BlogSection";
// import { CTASection } from "./sections/CTASection";
import { EcosystemSection } from "./sections/EcosystemSection";
import { FAQSection } from "./sections/FAQSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
// import { NumbersSection } from "./sections/NumberSection";
import { PartnersSection } from "./sections/PartnersSection";
import { PersonasSection } from "./sections/PersonaSection";
import { SecuritySection } from "./sections/SecuritySection";
import { SolutionsSection } from "./sections/SolutionSections";
import { TestimonialsSection } from "./sections/TestimonialSection";
import { TrustBar } from "./sections/TrustBar";
import { WhatsAppButton } from "./sections/WhatsappButton";
import { WhyTooFinanceSection } from "./sections/WhyTooFinanceSection";

export default function App() {
  return (
    <>
      <SiteStyles />

      <Header />

      <main>
        <HeroSection />
        <PartnersSection />
        <WhyTooFinanceSection />
        <HowItWorksSection />
        <SolutionsSection />
        <EcosystemSection />
        <SecuritySection />
        <FAQSection />
        <PersonasSection />
        <TestimonialsSection />
        <BlogSection />
        <TrustBar />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
