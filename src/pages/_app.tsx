import "@/styles/globals.css";
import { ThemeConfig, extendTheme, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";

export const polaroidBoxShadow =
  "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";

export const polaroidBorder = "1px solid rgba(0,0,0,0.3)";

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
    bgCard: {
      500: "#FAF7F0",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={portfolioTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <GoogleAnalytics gaId="G-8720VTMJ1N" />
    </>
  );
}
