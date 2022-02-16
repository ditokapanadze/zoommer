import { ChakraProvider, Container, useDisclosure } from "@chakra-ui/react";
import CustomTheme from "CustomTheme";
import Header from "components/header/Header";
import SideBar from "components/header/navigation/sideBar/SideBar";

const App = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <ChakraProvider theme={CustomTheme}>
      <Container px={0} maxW='xl'>
        <Header onToggle={onToggle} />
      </Container>
      <Container maxW='xl'>
        <SideBar isOpen={isOpen} onToggle={onToggle} />
      </Container>
    </ChakraProvider>
  );
};

export default App;
