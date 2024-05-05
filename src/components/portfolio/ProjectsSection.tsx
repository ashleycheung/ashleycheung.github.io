import { Box, Text } from "@chakra-ui/react";
import { FeaturedProject } from "./FeaturedProject";
import { Masonry } from "./Masonry";
import rightArrowImg from "/public/assets/right_arrow.svg";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { useIsTablet } from "../../hooks/useIsTablet";

export const ProjectsSection = () => {
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return (
    <Box
      id="projects-anchor"
      display={"flex"}
      justifyContent="center"
      paddingTop={32}
    >
      <Box maxW="1280px" padding={!isDesktop ? 4 : 8}>
        <Box
          display={"flex"}
          flexDir={!isDesktop ? "column" : "row"}
          marginBottom={8}
        >
          <Box width={!isDesktop ? "100%" : "50%"} paddingRight={4}>
            <Text
              fontSize={isDesktop ? "5xl" : "4xl"}
              fontWeight={"bold"}
              marginBottom={4}
              width={"100%"}
            >
              My Work
            </Text>

            <Text fontSize={"xl"} marginBottom={4}>
              As a tinkerer at heart, there is nothing I like to do more than to
              tinker with projects in my spare time! From multiplayer games, to
              full stack webapps and even computer vision AI bots, these are
              just to name a few of the types of projects I love to work on.
              There is a unique joy that comes from seeing something you work on
              come to fruition - when that first button click works - it is a
              satisfaction like no other!
            </Text>
            {isDesktop ? (
              <Box display={"flex"} justifyContent="center">
                <Box width={"150px"}>
                  <img src={rightArrowImg.src} width="100%" alt="right arrow" />
                </Box>
              </Box>
            ) : null}
          </Box>
          <FeaturedProject />
        </Box>
        <Masonry
          columns={isDesktop ? 4 : isTablet ? 3 : 2}
          gap={!isDesktop ? 4 : 8}
        />
      </Box>
    </Box>
  );
};
