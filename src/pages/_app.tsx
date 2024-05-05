import "@/styles/globals.css";
import { ThemeConfig, extendTheme, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  console.log("Rendered");
  return (
    <>
      <ChakraProvider theme={portfolioTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <GoogleAnalytics gaId="G-8720VTMJ1N" />
    </>
  );
}
