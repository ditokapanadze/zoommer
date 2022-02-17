import React from "react";
import { Box, Slide } from "@chakra-ui/react";
import SideBarHeading from "./SideBarHeading";
import SideBarList from "./SideBarList";
import SideBarFooter from "./SideBarFooter";

const SideBar = ({ isOpenSideBar, onToggleSideBar }) => {
  return (
    <Slide direction='left' in={isOpenSideBar} style={{ zIndex: 10 }}>
      <Box position='relative'>
        <Box
          position='absolute'
          w='100%'
          h='100vh'
          top='0'
          left='0'
          bg='white'
          px={4}
        >
          <SideBarHeading onToggleSideBar={onToggleSideBar} />
          <SideBarList />
          <SideBarFooter />
        </Box>
      </Box>
    </Slide>
  );
};

export default SideBar;
