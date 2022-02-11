import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, Container } from "@chakra-ui/react";
import CustomTheme from "CustomTheme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={CustomTheme}>
      <Container>
        <App />
      </Container>
    </ChakraProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
