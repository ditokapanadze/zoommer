import React from "react";
import { Box } from "@chakra-ui/react";
import SideBarHeading from "./SideBarHeading";
import SideBarList from "./SideBarList";
import SideBarFooter from "./SideBarFooter";

const SideBar = () => {
  return (
    <Box
      position='absolute'
      w='100%'
      h='100vh'
      top='0'
      left='0'
      bg='white'
      px={4}
    >
      <SideBarHeading />
      <SideBarList />
      <SideBarFooter />
    </Box>
  );
};

export default SideBar;
