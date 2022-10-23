import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import React from "react";

const SearchBar = () => {
  return (
    <Box py={5} w={"100%"}>
      <InputGroup>
        <InputLeftElement children={<FiSearch />} pointerEvents="none" />
        <Input
          type="text"
          placeholder="Search for character"
          borderRadius="10px"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
