import { Box, Link, Text } from "@chakra-ui/react";
import { TechLogoType } from "./TechLogo";
import { TechnologyList } from "./TechnologyList";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { RiClaudeLine } from "react-icons/ri";

export interface TimelineProps {
  data: {
    logo: StaticImageData;
    title: string;
    location: string;
    locationUrl: string;
    date: string;
    description: ReactNode[];
    technologies?: TechLogoType[];
  }[];
}

export const Timeline = ({ data }: TimelineProps) => {
  const iconSize = "75px";

  return (
    <Box maxWidth="768px">
      {data.map((d, i) => (
        <Box key={d.title} display="flex">
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            position={"relative"}
          >
            <Box width={iconSize} height={iconSize} padding={4} display="flex">
              <img
                width="100%"
                height="100%"
                src={d.logo.src}
                alt="logo"
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box
              position={"absolute"}
              left={"50%"}
              right={0}
              top={iconSize}
              borderLeft={"2px solid #E2E8F0"}
              bottom={0}
            />
          </Box>
          <Box paddingTop={4} paddingBottom={i !== data.length - 1 ? 8 : 0}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              {d.title}
              <Link
                color={"primary.500"}
                href={d.locationUrl}
                fontFamily={"sans-serif"}
                isExternal
              >
                {" "}
                @ {d.location}
              </Link>
            </Text>
            <Text color={"gray.600"}>{d.date}</Text>
            <Box display={"flex"} flexDir={"column"}>
              {d.description.map((d, i) => (
                <Box
                  key={i}
                  marginTop={4}
                  position={"relative"}
                  paddingLeft={"20px"}
                >
                  <Box
                    position={"absolute"}
                    left={0}
                    top={"12.5px"}
                    transform={"translateY(-50%) scale(1.2)"}
                    opacity={0.8}
                  >
                    <RiClaudeLine size={15} />
                  </Box>
                  {d}
                </Box>
              ))}
            </Box>
            {d.technologies ? (
              <>
                <Text color={"gray.600"} marginTop={4}>
                  Technologies I worked with:
                </Text>
                <TechnologyList
                  maxHeight="50px"
                  technologies={d.technologies}
                />
              </>
            ) : null}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
