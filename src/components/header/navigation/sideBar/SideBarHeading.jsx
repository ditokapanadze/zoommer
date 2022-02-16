import React from "react";
import { Box, Flex, Image, Text, Center, Button, Icon } from "@chakra-ui/react";
import { HiOutlineChatAlt } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaBullhorn } from "react-icons/fa";

const SidebarHeading = ({ onToggle }) => {
  const headingContent = [
    { image: HiOutlineChatAlt, text: "ჩატი" },
    { image: FiPhone, text: "კონტაქტი" },
    { image: FaBullhorn, text: "All promotions" },
  ];

  return (
    <Flex direction='column' align='center' mt='3' position='relative'>
      <Center>
        <Image src='logo.svg' w='110px' />
      </Center>
      <Button position='absolute' right='0' mr='30px' onClick={onToggle}>
        <Image src='close.svg' w='14px' />
      </Button>
      <Flex justify='space-between' mt='10' w='100%'>
        {headingContent.map((item, i) => (
          <Button key={i}>
            <Flex direction='column' align='center'>
              <Box bg='secondary' px='8px' py='4px' borderRadius='4px'>
                <Icon
                  position='relative'
                  as={item.image}
                  color='white'
                  mt='3px'
                />
              </Box>
              <Text fontSize='xs' mt='6px'>
                {item.text}
              </Text>
            </Flex>
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default SidebarHeading;
