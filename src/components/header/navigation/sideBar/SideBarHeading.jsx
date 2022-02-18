import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Center,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react";
import { HiOutlineChatAlt } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaBullhorn } from "react-icons/fa";

const SidebarHeading = ({ onToggleSideBar, onToggleChat }) => {
  return (
    <Flex direction='column' align='center' mt='3' position='relative'>
      <Center>
        <Image src='logo.svg' w='110px' />
      </Center>
      <Button position='absolute' right='0' mr='30px' onClick={onToggleSideBar}>
        <Image src='close.svg' w='14px' />
      </Button>
      <Flex justify='space-between' mt='10' w='100%'>
        <Button onClick={onToggleChat} variant='link'>
          <Flex direction='column' align='center'>
            <Box bg='secondary' px='8px' py='4px' borderRadius='4px'>
              <Icon as={HiOutlineChatAlt} color='white' mt='3px' />
            </Box>
            <Text fontSize='xs' mt='6px'>
              ჩატი
            </Text>
          </Flex>
        </Button>
        <Link href='tel:123-456-7890'>
          <Flex direction='column' align='center'>
            <Box bg='secondary' px='8px' py='4px' borderRadius='4px'>
              <Icon as={FiPhone} color='white' />
            </Box>
            <Text fontSize='xs' fontWeight='medium' mt='6px'>
              კონტაქტი
            </Text>
          </Flex>
        </Link>
        <Link>
          <Flex direction='column' align='center'>
            <Box bg='secondary' px='8px' py='4px' borderRadius='4px'>
              <Icon as={FaBullhorn} color='white' mt='3px' />
            </Box>
            <Text fontSize='xs' mt='6px' fontWeight='medium'>
              All Promotions
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default SidebarHeading;
