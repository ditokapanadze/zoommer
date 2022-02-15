import { ChakraProvider, Container } from "@chakra-ui/react";
import CustomTheme from "CustomTheme";
import Header from "components/header/Header";
import SideBar from "components/header/navigation/sideBar/SideBar";

const App = () => {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Container px={0} maxW='xl'>
        <Header />
      </Container>
      <Container maxW='xl'>
        <SideBar />
      </Container>
    </ChakraProvider>
  );
};

export default App;
