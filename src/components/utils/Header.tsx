import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { SocialsRow } from "../portfolio/SocialsRow";
import favicon from "/public/favicon.svg";

interface HeaderProps {
  show: boolean;
  showLogo?: boolean;
}

export const Header = ({ show, showLogo }: HeaderProps) => {
  const isDesktop = useIsDesktop();
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push("/");
  }, []);
  return (
    <Box
      padding={4}
      opacity={show ? 1 : 0}
      transition="opacity 0.5s"
      alignItems={"center"}
      display={"flex"}
      justifyContent={showLogo ? "space-between" : "flex-end"}
      width={"100%"}
    >
      {showLogo ? (
        <Box
          cursor={"pointer"}
          marginLeft={2}
          display={"flex"}
          alignItems={"center"}
          onClick={onClick}
        >
          <img src={favicon.src} alt="logo" width={50} height={50} />
          {isDesktop ? (
            <Box fontWeight={"bold"} fontSize={"1.5rem"} paddingLeft={2}>
              Ashley Cheung
            </Box>
          ) : null}
        </Box>
      ) : null}
      <SocialsRow />
    </Box>
  );
};
