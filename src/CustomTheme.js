import { theme, extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  colors: {
    primary: "white",
    secondary: "#ff5000",
    dark: "#17223b",
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
