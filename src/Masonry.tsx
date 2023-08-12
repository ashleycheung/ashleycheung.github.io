import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useIsDesktop } from "./hooks/useIsDesktop";
import { Project, PROJECTDATA } from "./projectdata";
import { SelectedProject } from "./SelectedProject";
import { TechnologyList } from "./TechnologyList";

interface MasonryProps {
  columns: number;
  gap: number;
}

export const Masonry = ({ columns, gap }: MasonryProps) => {
  const { projects } = PROJECTDATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const isDesktop = useIsDesktop();

  return (
    <>
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        size={"full"}
      >
        {selectedProject !== null ? (
          <ModalOverlay>
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <SelectedProject project={selectedProject} />
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => setSelectedProject(null)}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        ) : null}
      </Modal>
      <Box display={"flex"}>
        {Array.from(Array(columns).keys()).map((_, i) => (
          <Box
            width={"100%"}
            key={i}
            display="flex"
            flexDir="column"
            marginTop={gap}
            marginRight={i !== columns - 1 ? gap : 0}
          >
            {projects
              .filter((_, projectNum) => projectNum % columns === i)
              .map((project, j) => (
                <Box
                  className="boxShadow"
                  cursor={"pointer"}
                  borderRadius={"md"}
                  overflow="hidden"
                  width="100%"
                  key={`${i} ${j}`}
                  marginBottom={gap}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    width={"100%"}
                    src={project.thumbnailSrc}
                    alt={project.desc}
                  />
                  {isDesktop ? (
                    <Box padding={4}>
                      <Text fontSize={"xl"} fontWeight="bold" marginBottom={2}>
                        {project.title}
                      </Text>
                      <Text fontSize={"sm"}>{project.desc}</Text>
                      <Divider
                        orientation="horizontal"
                        marginTop={2}
                        marginBottom={2}
                      />
                      <TechnologyList technologies={project.technologies} />
                    </Box>
                  ) : null}
                </Box>
              ))}
          </Box>
        ))}
      </Box>
    </>
  );
};
