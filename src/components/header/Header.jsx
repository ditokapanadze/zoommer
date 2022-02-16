import React from "react";
import { Box, Flex, Image, Button } from "@chakra-ui/react";

const Header = ({ onToggle }) => {
  return (
    <Box position='relative'>
      <Flex justify='space-between' align='center' bg='white' h='60px' px={5}>
        <Flex align='center'>
          <Button px='0'>
            <Box mr='12px' onClick={onToggle}>
              <Image src='menu.svg' alt='header logo' />
            </Box>
          </Button>
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
