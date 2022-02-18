import React from "react";
import { Box, Flex, List, ListItem, Link, Text, Image } from "@chakra-ui/react";

const NavList = () => {
  const navItems = [
    { image: "icons/mobile.svg", text: "მობილურები" },
    { image: "icons/headphone.svg", text: "ტაბები | აქსესუარები" },
    { image: "icons/laptop.svg", text: "ლეპტოპები | IT" },
    { image: "icons/audio.svg", text: "აუდიო სისტემა" },
    { image: "icons/gaming.svg", text: "Gaming" },
    { image: "icons/tv.svg", text: "ტელევიზორი | მონტიორი" },
    { image: "icons/photo.svg", text: "ფოტო | ვიდეო | ოპტიკა" },
    { image: "icons/smart.svg", text: "ჭკვიანი სახლი" },
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
