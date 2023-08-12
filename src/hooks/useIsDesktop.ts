import { useMediaQuery } from "@chakra-ui/react";

export const useIsDesktop = () => {
  const [isDesktop] = useMediaQuery("(min-width: 993px)");
  return isDesktop;
};
