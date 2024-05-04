import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { SocialsRow } from "../portfolio/SocialsRow";
import { PersonalAvatar } from "../utils/PersonalAvatar";

export const BlogFooter = () => {
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexWrap={isDesktop ? undefined : "wrap"}
      outline={"1px solid gray"}
      borderRadius={"md"}
      padding={4}
      marginTop={8}
      boxShadow={"md"}
      justifyContent={"center"}
    >
      <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
        <PersonalAvatar size={"2xl"} />
        <SocialsRow />
      </Box>
      <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
        <Box
          fontSize={isDesktop ? "3xl" : "2xl"}
          fontWeight={"bold"}
          marginBottom={2}
        >
          Written by Ashley Cheung
        </Box>
        <Box fontSize={"lg"} marginBottom={2}>
          Want to checkout my other work?
        </Box>
        <Button
          onClick={() => navigate("/")}
          variant={"outline"}
          color={"primary.500"}
        >
          Find out more
        </Button>
      </Box>
    </Box>
  );
};
