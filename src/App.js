import { ChakraProvider, Container, useDisclosure } from "@chakra-ui/react";
import CustomTheme from "./CustomTheme";
import Header from "./components/header/Header";
import SideBar from "./components/header/navigation/sideBar/SideBar";
import SearchBar from "./components/header/SearchBar";
import Main from "./components/main/Main";

const App = () => {
  const { isOpen: isOpenSideBar, onToggle: onToggleSideBar } = useDisclosure();
  const { isOpen: isOpenSearch, onToggle: onToggleSearch } = useDisclosure();

  return (
    <ChakraProvider theme={CustomTheme}>
      <Container px={0}>
        <Header
          onToggleSideBar={onToggleSideBar}
          onToggleSearch={onToggleSearch}
          isOpenSearch={isOpenSearch}
        />
      </Container>
      <Container maxW='xl'>
        <SideBar
          isOpenSideBar={isOpenSideBar}
          onToggleSideBar={onToggleSideBar}
        />
        <SearchBar
          onToggleSearch={onToggleSearch}
          isOpenSearch={isOpenSearch}
        />
      </Container>
      <Main />
    </ChakraProvider>
  );
};

export default App;
