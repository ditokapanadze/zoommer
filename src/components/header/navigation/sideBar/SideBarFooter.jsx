import React from "react";
import {
  Box,
  Flex,
  List,
  ListItem,
  Link,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

const SideBarFooter = () => {
  const footerItems = ["ონლაინ განვადება", "მიტანის მეთოდი", "ფილიალები"];
  return (
    <Flex direction='column'>
      <Box mb='25px'>
        <List>
          {footerItems.map((item, i) => (
            <ListItem key={i}>
              <Link>
                <Text mb='4px' fontSize='13px' fontWeight={500}>
                  {item}
                </Text>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Flex>
        <Link>
          <Flex
            justify='center'
            align='center'
            bg='gray.100'
            w='40px'
            h='40px'
            borderRadius='50%'
            mr='15px'
          >
            <Image src='facebook.png' w='14px' h='14px' />
          </Flex>
        </Link>
        <Link>
          <Flex
            justify='center'
            align='center'
            bg='gray.100'
            w='40px'
            h='40px'
            borderRadius='50%'
          >
            <Image src='youtube.png' w='14px' h='14px' />
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default SideBarFooter;
