// theme/index.ts or theme.js
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#e0f7fa",
    100: "#b2ebf2",
    200: "#80deea",
    300: "#4dd0e1",
    400: "#26c6da",
    500: "#00bcd4", // primary vivid color (e.g., bright cyan)
    600: "#00acc1",
    700: "#0097a7",
    800: "#00838f",
    900: "#006064",
  },
  gray: {
    50: "#f7fafc",
    100: "#edf2f7",
    200: "#e2e8f0",
    300: "#cbd5e0",
    400: "#a0aec0",
    500: "#718096",
    600: "#4a5568",
    700: "#2d3748",
    800: "#1a202c",
    900: "#171923",
  }
};

const theme = extendTheme({ colors });

export default theme;
