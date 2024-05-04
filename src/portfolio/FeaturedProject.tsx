import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { PROJECTDATA } from "./projectdata";
import { ProjectLinkButton } from "./ProjectLinkButton";
import { TechnologyList } from "./TechnologyList";

export const FeaturedProject = () => {
  const { featuredProject: project } = PROJECTDATA;

  return (
    <Box
      className="boxShadow"
      width="100%"
      borderRadius={"md"}
      overflow="hidden"
    >
      <Box width={"100%"} display="flex">
        <img src={project.thumbnailSrc} width="100%" alt={project.desc} />
      </Box>
      <Box padding={4} bottom={4} right={4} backgroundColor="white">
        <Heading fontSize={"lg"}>Featured Project</Heading>
        <Heading fontSize={"4xl"}>{project.title}</Heading>
        <Text marginBottom={4}>{project.desc}</Text>
        <ProjectLinkButton url={project.projectSrc} />
        <Divider orientation="horizontal" marginTop={2} marginBottom={2} />
        <TechnologyList technologies={project.technologies} />
      </Box>
    </Box>
  );
};
