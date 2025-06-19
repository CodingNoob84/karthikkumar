import { HeroSection } from "@/components/home/hero-section";
import { TechnologiesSection } from "@/components/home/technologies";
import { ProjectsSection } from "@/components/home/projects-section";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
