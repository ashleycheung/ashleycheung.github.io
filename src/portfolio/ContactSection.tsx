import { Box, Heading } from "@chakra-ui/react";
import { SocialsRow } from "./SocialsRow";
import { FaCross } from "react-icons/fa";
import { useIsDesktop } from "../hooks/useIsDesktop";

export const ContactSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <Box
      minH={"100vh"}
      display="flex"
      alignItems={"center"}
      justifyContent="center"
      position={"relative"}
    >
      <Box
        width={"100%"}
        maxW="1280px"
        display={"flex"}
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
        padding={!isDesktop ? 4 : 8}
      >
        <Heading fontSize={"xx-large"} marginBottom={4}>
          Want to get in touch?
        </Heading>
        <Heading
          fontSize={isDesktop ? "xxx-large" : "x-large"}
          marginBottom={4}
          color="teal.500"
        >
          ashleycheung2412@gmail.com
        </Heading>
        <SocialsRow />
        <Box
          position={"absolute"}
          bottom={16}
          display="flex"
          flexDir={"column"}
          alignItems="center"
        >
          <FaCross fontSize={"3rem"} />
          <Heading fontSize={"large"} marginTop={2}>
            To Christ be the Glory
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};
