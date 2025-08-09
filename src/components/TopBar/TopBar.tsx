import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  useColorMode,
  Skeleton,
  Text,
  FormLabel,
  FormControl,
  Switch,
} from "@chakra-ui/react";

import { FiMenu, FiHome } from "react-icons/fi";
import { CgGhostCharacter } from "react-icons/cg";


import logo from "../../assets/rick-and-morty.png";

import React, { useState } from "react";
import NavItem from "./NavItem";


import Navigation from "./Navigation";


interface TopBarProps {
  seasons: string[];
  isLoading: boolean;
  selectSeason: (season: string) => void;
}
const TopBar = ({ seasons, isLoading, selectSeason }: TopBarProps) => {
  const { colorMode, toggleColorMode } = useColorMode()


  return (
    <Box w="100vw" bg="white" zIndex={9999} pos="sticky" top={0} >
      <Flex
        w="100%"
        maxW="80vw"
        my={"0"} mx={"auto"}
        flexDir="row"
        justifyContent="flex-start"
        alignItems="center"
        py={"1rem"}
      >
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="flex-start"
          columnGap={"0.5rem"}
        >
          <Avatar name="Rick and Morty" src={logo} size="lg" />
          {/* Show text next to avatar only on desktop */}
          <Flex flexDir="column" display={{ base: "none", md: "flex" }}>
            <Heading as="h2" size="lg" sx={{ fontFamily: 'RickAndMorty, sans-serif' }}>Rick and Morty</Heading>
            <Text color="grey">Beyond words</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>

  );
};

export default TopBar;



//   <Flex
//     flexDir={{ base: "row", md: "column" }}
//     px={{ base: 4, md: "5%" }}
//     h="100%"
//     w="100%"
//     borderRadius="15px"
//     as="nav"
//     boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
//     alignItems="center"
//   >
//     <Flex
//       w="100%"
//       py={2}
//       mt={{ base: 0, md: 4 }}
//       alignItems="center"
//       justifyContent={{ base: "space-between", md: "space-around" }}
//     >
//       <Avatar name="Rick and Morty" src={logo} size="md" />
//       {/** Show text next to avatar only on desktop */}
//       <Flex flexDir="column" display={{ base: "none", md: "flex" }}>
//         <Heading as="h3" size="sm">
//           Rick and Morty
//         </Heading>
//         <Text color="grey">Beyond words</Text>
//       </Flex>
//     </Flex>
//     <Divider mt={{ base: 0, md: 4 }} display={{ base: "none", md: "block" }} />
//     {/* Render Navigation component with horizontal layout on mobile */}


//     <FormControl display='flex' alignItems='center'>
//       <FormLabel htmlFor='email-alerts' mb='0'>
//         {colorMode === "light" ? "Switch to Dark" : "Switch to Light"}
//       </FormLabel>
//       <Switch id='email-alerts' isChecked={colorMode === "dark"} onChange={toggleColorMode} />
//     </FormControl>

//     <Navigation
//       seasons={seasons}
//       selectSeason={selectSeason}
//     />
//   </Flex>