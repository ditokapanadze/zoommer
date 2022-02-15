import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  colors: {
    primary: "white",
    secondary: "#ff5000",
    dark: "#17223B",
    "bg-main": "#f5f5f5",
  },

  styles: {
    global: {
      body: {
        fontFamily: "FiraGO",
        backgroundColor: "bg-main",
        color: "primary",
      },

      " h1, h2, h3, h4, h5, h6,": {
        color: "dark",
      },

      p: {
        color: "dark",
      },
    },
  },
});

export default CustomTheme;
