import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  colorModeManager: true,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        overflowX: "hidden",
        minHeight: "100vh",
        bg: "white",
        color: "gray.800",
        _dark: {
          bg: "gray.800",
          color: "gray.50",
        },
      },
    },
  },
});
