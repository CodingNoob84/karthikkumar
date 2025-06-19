import { AboutMeSection } from "@/components/about/about-hero-section";
import { ExperienceSection } from "@/components/about/experience-section";
import { EducationSection } from "@/components/about/education-section";
import { HobbiesSection } from "@/components/about/hobbies-section";
import { ContactSection } from "@/components/about/contact-section";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <AboutMeSection />
      <ExperienceSection />
      <EducationSection />
      <HobbiesSection />
      <ContactSection />
    </div>
  );
}
