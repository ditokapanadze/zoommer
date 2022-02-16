import React from "react";
import { Box, Slide } from "@chakra-ui/react";
import SideBarHeading from "./SideBarHeading";
import SideBarList from "./SideBarList";
import SideBarFooter from "./SideBarFooter";

const SideBar = ({ isOpen, onToggle }) => {
  return (
    <Slide direction='left' in={isOpen} style={{ zIndex: 10 }}>
      <Box
        position='absolute'
        w='100%'
        h='100vh'
        top='0'
        left='0'
        bg='white'
        px={4}
      >
        <SideBarHeading onToggle={onToggle} isOpen={isOpen} />
        <SideBarList />
        <SideBarFooter />
      </Box>
    </Slide>
  );
};

export default SideBar;
