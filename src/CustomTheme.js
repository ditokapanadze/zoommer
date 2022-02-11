import { theme, extendTheme } from "@chakra-ui/react";

theme.shadows.outline = "none";

const CustomTheme = extendTheme({
  colors: {
    primary: "white",
    secondary: "#ff5000",
    text: "#17223b",
    "bg-main": "#f5f5f5",
  },

  styles: {
    global: {
      body: {
        backgroundColor: "bg-main",
        color: "primary",
      },
    },
  },
});

export default CustomTheme;
