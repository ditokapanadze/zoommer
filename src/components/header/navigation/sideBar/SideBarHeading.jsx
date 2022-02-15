import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Center,
  Link,
  Button,
  Icon,
} from "@chakra-ui/react";
import { HiOutlineChatAlt } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { ImBullhorn } from "react-icons/fa";

const SidebarHeading = () => {
  const headingContent = [
    { image: "<HiOutlineChatAlt/>", text: "ჩატი" },
    { image: "FiPhone", text: "კონტაქტი" },
    { image: "ImBullhorn", text: "All promotions" },
  ];

  headingContent.map((i) => console.log(i.image));

  return (
    <Flex direction='column' align='center' mt='3' position='relative'>
      <Center>
        <Image src='logo.svg' w='110px' />
      </Center>
      <Button position='absolute' right='0' mr='30px'>
        <Image src='close.svg' w='14px' />
      </Button>
      <Flex justify='space-between' mt='10' w='100%'>
        {headingContent.map((item, i) => (
          <Button key={i}>
            <Flex direction='column' align='center'>
              <Icon as={FiPhone} color='dark' />
              <Text fontSize='xs'>{item.text}</Text>
            </Flex>
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default SidebarHeading;
