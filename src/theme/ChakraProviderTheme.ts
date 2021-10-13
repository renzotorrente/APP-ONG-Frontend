import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Inter, serif",
    mono: "Menlo, monospace",
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.100",
        color: "gray.800",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});

export default theme;
