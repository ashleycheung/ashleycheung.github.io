import { LightMode } from "@chakra-ui/react";
import { useTitle } from "../hooks/useTitle";
import { BlogsSection } from "./BlogsSection";
import { ContactSection } from "./ContactSection";
import { LandingSection } from "./LandingSection";
import { MyJourneySection } from "./MyJourneySection";
import { ProjectsSection } from "./ProjectsSection";

export const Portfolio = () => {
  useTitle("Ashley Cheung");
  return (
    <LightMode>
      <LandingSection />
      <MyJourneySection />
      <ProjectsSection />
      <BlogsSection />
      <ContactSection />
    </LightMode>
  );
};
