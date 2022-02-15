import React from "react";
import { Box, Flex, List, ListItem, Link, Text, Image } from "@chakra-ui/react";

const NavList = () => {
  const navItems = [
    { image: "mobile.svg", text: "მობილურები" },
    { image: "headphone.svg", text: "ტაბები | აქსესუარები" },
    { image: "laptop.svg", text: "ლეპტოპები | IT" },
    { image: "audio.svg", text: "აუდიო სისტემა" },
    { image: "gaming.svg", text: "Gaming" },
    { image: "tv.svg", text: "ტელევიზორი | მონტიორი" },
    { image: "photo.svg", text: "ფოტო | ვიდეო | ოპტიკა" },
    { image: "smart.svg", text: "ჭკვიანი სახლი" },
  ];

  return (
    <Flex mt='60px' mb='80px' position='relative'>
      <List>
        {navItems.map((item, i) => (
          <ListItem color='dark' key={i}>
            <Link align='center'>
              <Flex align='center'>
                <Box p='7px' borderRadius='4px'>
                  <Image src={item.image} w='24px' />
                </Box>
                <Text fontSize='13px' fontWeight={500}>
                  {item.text}
                </Text>
              </Flex>
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default NavList;
