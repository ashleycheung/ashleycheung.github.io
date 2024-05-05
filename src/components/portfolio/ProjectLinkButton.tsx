import { Box, Button } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

interface ProjectLinkButtonProps {
  url: string;
}

export const ProjectLinkButton = ({ url }: ProjectLinkButtonProps) => {
  return (
    <Button
      marginBottom={4}
      onClick={() => window.open(url, "_blank")?.focus()}
    >
      <Box marginRight={2}>Check it out here</Box>
      <BiLinkExternal />
    </Button>
  );
};
