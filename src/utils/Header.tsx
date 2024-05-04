import { Box } from "@chakra-ui/react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { SocialsRow } from "../portfolio/SocialsRow";

interface HeaderProps {
  show: boolean;
  showLogo?: boolean;
}

export const Header = ({ show, showLogo }: HeaderProps) => {
  const isDesktop = useIsDesktop();
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
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
          <img src="/favicon.svg" alt="logo" width={50} height={50} />
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
