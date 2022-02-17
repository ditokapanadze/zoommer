import React from "react";
import { Box, Flex, List, ListItem, Link, Text, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const SideBarFooter = () => {
  const footerItems = ["ონლაინ განვადება", "მიტანის მეთოდი", "ფილიალები"];
  const socials = [
    { icon: FaFacebookF, link: "https://www.facebook.com/" },
    { icon: FaYoutube, link: "https://www.youtube.com/" },
    { icon: FaTwitter, link: "https://www.twitter.com/" },
  ];

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
        {socials.map((item, i) => (
          <Link key={i} href={item.link} isExternal>
            <Flex
              justify='center'
              align='center'
              bg='gray.100'
              p='20px'
              borderRadius='50%'
              mr='15px'
              position='relative'
            >
              <Icon
                as={item.icon}
                fill='dark'
                position='absolute'
                w='15px'
                h='15px'
              />
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default SideBarFooter;
