import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box position='relative'>
      <Flex justify='space-between' align='center' bg='white' h='60px' px={5}>
        <Flex align='center'>
          <Box mr='12px'>
            <Image src='menu.svg' alt='header logo' />
          </Box>
          <Box w='130px'>
            <Image src='logo.svg' />
          </Box>
        </Flex>
        <Flex align='center'>
          <Box>
            <Image src='search.svg' />
          </Box>
          <Box>
            <Image src='cart.svg' ml='20px' />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
