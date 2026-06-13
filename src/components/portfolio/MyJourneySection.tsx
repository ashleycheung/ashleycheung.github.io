import { Box, Text } from "@chakra-ui/react";
import { Timeline, TimelineProps } from "./Timeline";
import freelancerLogo from "/public/assets/freelancer.png";
import tiktokLogo from "/public/assets/tiktok.png";
import unswLogo from "/public/assets/unsw.jpg";
import baulkoLogo from "/public/assets/baulko.png";
import { TechLogoType } from "./TechLogo";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { Bold } from "../utils/Bold";
import { Italics } from "../utils/Italics";

const timelineData: TimelineProps["data"] = [
  {
    logo: tiktokLogo,
    title: "Software Engineer",
    location: "TikTok",
    locationUrl: "https://www.tiktok.com",
    date: "August 2024 - PRESENT",
    description: [
      <>
        <Bold>Frontend technical owner</Bold> of the TikTok LIVE Vault Gift
        series, a premium gifting product contributing{" "}
        <Italics>5–10% of platform gifting revenue</Italics>
      </>,
      <>
        <Bold>Led frontend development</Bold> of the Vault Dawn & Dusk campaign,
        increasing gift revenue by 12.1%
      </>,
      <>
        Technical owner of Caishen, an internal configuration platform serving
        multiple business lines, which reduced bug count by 40% and cut
        configuration time from 2 days to 1 hour
      </>,
      <>
        Built a no-code drag-and-drop editor enabling cross-functional teams to
        configure pages independently, saving 3 days of frontend and 2 days of
        server manpower per Vault cycle
      </>,
      <>
        Automated daily Vault operational monitoring, saving 1 day of manual
        intervention per Vault open
      </>,
      <>
        Engineered an MCP server for the Caishen platform, enabling AI agent
        integrations and unlocking natural language access to internal tooling
      </>,
    ],
  },
  {
    logo: freelancerLogo,
    title: "Junior Software Engineer",
    location: "Freelancer.com",
    locationUrl: "https://www.freelancer.com.au/",
    date: "March 2023 - July 2024",
    description: [
      "Implemented dynamic frontend components using Angular",
      "Took charge in migrating the twilio-sdk of the Angular Webapp to the zoom-sdk",
      "Created well tested REST API endpoints using PHP and Python",
      "Automated the team's internal task tracking through Typescript",
    ],
    technologies: [
      TechLogoType.Typescript,
      TechLogoType.Angular,
      TechLogoType.MySql,
      TechLogoType.Php,
      TechLogoType.Python,
      TechLogoType.Go,
    ],
  },
  {
    logo: freelancerLogo,
    title: "Software Engineer Intern",
    location: "Freelancer.com",
    locationUrl: "https://www.freelancer.com.au/",
    date: "December 2022 - March 2023",
    description: [
      "Wrote efficient SQL queries for Freelancer's production database with over 68 million users",
      "Implemented UI tests for Angular frontend components",
      "Followed an Agile project management methodology",
    ],
  },
  {
    logo: unswLogo,
    title: "Computer Science and Mechatronics Engineering",
    date: "January 2019 - December 2023",
    location: "UNSW",
    locationUrl: "https://www.unsw.edu.au/",
    description: [
      "Engineering (Mechatronics) / Computer Science Double Degree",
      "Distinction Average WAM (above 80)",
      "Included in UNSW Dean's Honour's list in 2020, 2021, and 2022",
      "Proficient in Algorithms & Datastructures, Databases, Networking through course work",
    ],
    technologies: [
      TechLogoType.React,
      TechLogoType.CPlusPlus,
      TechLogoType.Python,
      TechLogoType.Javascript,
      TechLogoType.Postgresql,
      TechLogoType.Sqlite,
    ],
  },
  {
    logo: baulkoLogo,
    title: "Senior years",
    location: "Baulkham Hills Highschool",
    locationUrl: "https://baulkham-h.schools.nsw.gov.au/",
    date: "2017 - 2018",
    description: [
      "Graduated with an ATAR of 98.95",
      "Distinguished achiever in Mathematics Extension 1 & 2, Physics, English (Advanced)",
    ],
  },
];

export const MyJourneySection = () => {
  const isDesktop = useIsDesktop();

  return (
    <Box
      id="journey-anchor"
      alignItems={"center"}
      display={"flex"}
      justifyContent="center"
      paddingTop={8}
      minH="100vh"
    >
      <Box
        width={"100%"}
        maxW="1280px"
        display={"flex"}
        flexDir="column"
        alignItems={"center"}
        padding={!isDesktop ? 4 : 8}
      >
        <Text
          fontSize={isDesktop ? "5xl" : "4xl"}
          fontWeight={"bold"}
          marginBottom={4}
          width={"100%"}
        >
          My Journey
        </Text>
        <Timeline data={timelineData} />
      </Box>
    </Box>
  );
};
