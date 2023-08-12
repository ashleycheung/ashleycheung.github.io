import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { useIsDesktop } from "./hooks/useIsDesktop";
import { Project } from "./projectdata";
import { ProjectLinkButton } from "./ProjectLinkButton";
import { TechnologyList } from "./TechnologyList";

interface SelectedProjectProps {
  project: Project;
}

export const SelectedProject = ({ project }: SelectedProjectProps) => {
  const isDesktop = useIsDesktop();

  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      minHeight="85vh"
    >
      <Box
        maxW={"768px"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Box width={"100%"} padding={4}>
          <Heading
            fontSize={!isDesktop ? "xx-large" : "xxx-large"}
            marginBottom={4}
          >
            {project.title}
          </Heading>
          {!isDesktop ? (
            <Box display="flex" width={"100%"} marginBottom={4}>
              <img
                style={{ objectFit: "contain" }}
                src={project.thumbnailSrc}
                width="100%"
                alt={project.desc}
              />
            </Box>
          ) : null}
          <Text marginBottom={4}>{project.desc}</Text>
          <ProjectLinkButton url={project.projectSrc} />
          <Divider orientation="horizontal" marginTop={2} marginBottom={2} />
          <TechnologyList technologies={project.technologies} />
        </Box>
        {isDesktop ? (
          <Box display="flex" width={"100%"} height={"50vh"}>
            <img
              style={{ objectFit: "contain" }}
              src={project.thumbnailSrc}
              width="100%"
              alt={project.desc}
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
