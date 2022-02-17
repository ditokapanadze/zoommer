import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <FormControl>
      <Input type='search' placeholder='ძიება...' />
    </FormControl>
  );
};

export default SearchBar;
