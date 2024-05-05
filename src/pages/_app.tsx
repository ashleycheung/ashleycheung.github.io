import "@/styles/globals.css";
import { ThemeConfig, extendTheme, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const portfolioTheme = extendTheme({
  config,
  colors: {
    primary: {
      500: "#319795",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={portfolioTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
