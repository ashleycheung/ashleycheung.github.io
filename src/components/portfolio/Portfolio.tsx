import { LightMode } from "@chakra-ui/react";
import { BlogsSection } from "./BlogsSection";
import { ContactSection } from "./ContactSection";
import { MyJourneySection } from "./MyJourneySection";
import { ProjectsSection } from "./ProjectsSection";
import { HeroSection } from "./HeroSection";

export const Portfolio = () => {
  return (
    <LightMode>
      <HeroSection />
      <MyJourneySection />
      <ProjectsSection />
      <BlogsSection />
      <ContactSection />
    </LightMode>
  );
};
