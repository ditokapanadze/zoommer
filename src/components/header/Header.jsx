import React from "react";
import { Box, Flex, Image, Button } from "@chakra-ui/react";

const Header = ({ onToggleSideBar, isOpenSearch, onToggleSearch }) => {
  return (
    <Box position='relative' mb={2}>
      <Flex justify='space-between' align='center' bg='white' h='60px' px={5}>
        <Flex align='center'>
          <Button px='0'>
            <Box mr='12px' onClick={onToggleSideBar}>
              <Image src='icons/menu.svg' alt='header logo' />
            </Box>
          </Button>
          <Box w='130px'>
            <Image src='icons/logo.svg' />
          </Box>
        </Flex>
        <Flex align='center'>
          {!isOpenSearch && (
            <Button onClick={onToggleSearch}>
              <Image src='icons/search.svg' />
            </Button>
          )}
          <Box>
            <Image src='icons/cart.svg' />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
