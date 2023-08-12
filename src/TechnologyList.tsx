import { Box } from "@chakra-ui/react";
import { TechLogo, TechLogoType } from "./TechLogo";

interface TechnologyListProps {
  technologies: TechLogoType[];
  maxHeight?: string;
}
export const TechnologyList = ({
  technologies,
  maxHeight,
}: TechnologyListProps) => {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexWrap="wrap"
      justifyContent={"center"}
    >
      {technologies.map((tech) => (
        <TechLogo key={tech} name={tech} maxHeight={maxHeight ?? "30px"} />
      ))}
    </Box>
  );
};
