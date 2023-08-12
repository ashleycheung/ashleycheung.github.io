import { Box, Heading } from "@chakra-ui/react";
import { Timeline, TimelineProps } from "./Timeline";
import freelancerLogo from "./assets/freelancer.png";
import unswLogo from "./assets/unsw.jpg";
import baulkoLogo from "./assets/baulko.png";
import { useIsDesktop } from "./hooks/useIsDesktop";
import { TechLogoType } from "./TechLogo";

const timelineData: TimelineProps["data"] = [
  {
    logo: freelancerLogo,
    title: "Junior Software Engineer",
    location: "Freelancer.com",
    locationUrl: "https://www.freelancer.com.au/",
    date: "March 2023 - PRESENT",
    description: [
      "Implemented dynamic frontend components using Angular",
      "Drafted a technical specification of a facebook automation feature",
      "Created well tested REST API endpoints using PHP",
      "Automated the team's internal task tracking through Typescript",
    ],
    technologies: [
      TechLogoType.Typescript,
      TechLogoType.Angular,
      TechLogoType.MySql,
      TechLogoType.Php,
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
    date: "January 2019 - PRESENT",
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
        <Heading fontSize={"xxx-large"} marginBottom={4} width={"100%"}>
          My Journey
        </Heading>
        <Timeline data={timelineData} />
      </Box>
    </Box>
  );
};
