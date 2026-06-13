import { Box } from "@chakra-ui/react";
import { TechLogo, TechLogoType } from "./TechLogo";
import Marquee from "react-fast-marquee";

interface TechnologyListProps {
  technologies: TechLogoType[];
  maxHeight?: string;
  asMarquee?: boolean;
}
export const TechnologyList = ({
  technologies,
  maxHeight,
  asMarquee,
}: TechnologyListProps) => {
  if (asMarquee) {
    return (
      <Marquee
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000000 20%, #000000 80%, transparent 100%)",
        }}
      >
        {technologies.map((tech) => (
          <TechLogo key={tech} name={tech} maxHeight={maxHeight ?? "50px"} />
        ))}
      </Marquee>
    );
  }

  return (
    <Box display={"flex"} justifyContent={"flex-start"} flexWrap={"wrap"}>
      {technologies.map((tech) => (
        <TechLogo key={tech} name={tech} maxHeight={maxHeight ?? "45px"} />
      ))}
    </Box>
  );
};
