import "./App.css";
import { AnimatedSection } from "./components/AnimatedSection";
import CertificateSection from "./components/CertificateSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection
          id="about"
          className="container mx-auto px-4 lg:px-8 py-24 md:py-32 space-y-8"
        >
          <HeroSection />
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection
          id="projects"
          className="bg-muted/40 container mx-auto px-4 lg:px-8 py-16 md:py-24"
        >
          <ProjectSection />
        </AnimatedSection>

        {/* Certificates Section */}
        <AnimatedSection
          id="certificates"
          className="container mx-auto px-4 lg:px-8 py-16 md:py-24"
        >
          <CertificateSection />
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection
          id="contact"
          className="bg-muted/40 container mx-auto px-4 lg:px-8 py-16 md:py-24"
        >
          <ContactSection />
        </AnimatedSection>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
