import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import "./index.css";
import { ProjectsSection } from "./ProjectsSection";
import { MyJourneySection } from "./MyJourneySection";
import { LandingSection } from "./LandingSection";
import { ContactSection } from "./ContactSection";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const portfolioTheme = extendTheme({
  config,
  colors: {
    primary: {
      500: "#319795",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={portfolioTheme}>
      <LandingSection />
      <MyJourneySection />
      <ProjectsSection />
      <ContactSection />
    </ChakraProvider>
  </React.StrictMode>
);
