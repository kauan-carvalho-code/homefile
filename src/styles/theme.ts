import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#353646",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    blue: {
      "500": "#1980cf",
      "400": "#59a1d9",
      "200": "#c8d5e3",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "blue.200",
        color: "gray.700",
      },
    },
  },
});
