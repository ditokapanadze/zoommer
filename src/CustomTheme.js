import { extendTheme } from "@chakra-ui/react";

const Container = {
  baseStyle: {
    maxW: "100%",
  },
};

const CustomTheme = extendTheme({
  colors: {
    primary: "white",
    secondary: "#ff5000",
    dark: "#17223B",
    "bg-main": "#f5f5f5",
  },

  sizes: {
    container: {
      maxWidth: "100%",
    },
  },

  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },

  components: {
    Container,
    Button: { baseStyle: { _focus: { boxShadow: "none" } } },
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
