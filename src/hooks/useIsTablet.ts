import { useMediaQuery } from "@chakra-ui/react";

export const useIsTablet = () => {
  const [isTablet] = useMediaQuery(["(min-width: 480px)", "(maxWidth: 992px)"]);
  return isTablet;
};
