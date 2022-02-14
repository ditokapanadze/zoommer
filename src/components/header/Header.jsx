import React from "react";
import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import Navigation from "./Navigation";
import { FiSearch } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <Flex justify='space-between' align='center' bg='white'>
      <Flex align='center'>
        <Navigation />
        <Box>
          <Image src='logo.png' alt='header logo' />
        </Box>
      </Flex>
      <Flex align='center'>
        <Icon as={FiSearch} color='dark' w='30px' h='30px' />
        <Icon as={RiShoppingCartLine} color='dark' w='30px' h='30px' />
      </Flex>
    </Flex>
  );
};

export default Header;
