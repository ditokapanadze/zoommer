import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Slide,
} from "@chakra-ui/react";
import { GrFormClose } from "react-icons/gr";

const SearchBar = ({ isOpenSearch, onToggleSearch }) => {
  return (
    <Slide direction='top' in={isOpenSearch} style={{ zIndex: -1 }}>
      <FormControl mt='60px' px='30px'>
        <InputGroup>
          <Input
            type='search'
            placeholder='ძიება...'
            _placeholder={{ color: "gray.100" }}
            bg='white'
            my='8px'
            borderRadius='15px'
          />
          <InputRightElement>
            <Button onClick={onToggleSearch}>
              <Icon as={GrFormClose} w='25px' h='25px' mt='15px' />
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Slide>
  );
};

export default SearchBar;
