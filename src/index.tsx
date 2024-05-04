import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import "./index.css";
import { Portfolio } from "./portfolio/Portfolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Blog } from "./blog/Blog";

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

const router = createBrowserRouter([
  {
    path: "/blog/:blogId",
    element: <Blog />,
  },
  {
    path: "",
    element: <Portfolio />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={portfolioTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
