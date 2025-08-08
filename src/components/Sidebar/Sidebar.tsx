import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  useColorMode,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { FiMenu, FiHome } from "react-icons/fi";
import { CgGhostCharacter } from "react-icons/cg";
import logo from "../../assets/rick-and-morty.png";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Navigation from "./Navigation";
interface SidebarProps {
  seasons: string[];
  isLoading: boolean;
  selectSeason: (season: string) => void;
}
const Sidebar = ({ seasons, isLoading, selectSeason }: SidebarProps) => {
const { colorMode, toggleColorMode } = useColorMode()


  return (
<Flex
  pos="fixed"
  top={0}
  left={0}
  h={{ base: "60px", md: "100vh" }}
  w={{ base: "100%", md: "15%" }}
  flexDir={{ base: "row", md: "column" }}
  justifyContent="center"
  alignItems="center"
  p={{ base: "0 1rem", md: "0.5%" }}
  bg={{ base: "blue.500", md: "transparent" }}
  zIndex={9999}
>
  <Skeleton isLoaded={!isLoading} h="100%" w="100%">
    <Flex
      flexDir={{ base: "row", md: "column" }}
      px={{ base: 4, md: "5%" }}
      h="100%"
      w="100%"
      borderRadius="15px"
      as="nav"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      alignItems="center"
    >
      <Flex
        w="100%"
        py={2}
        mt={{ base: 0, md: 4 }}
        alignItems="center"
        justifyContent={{ base: "space-between", md: "space-around" }}
      >
        <Avatar name="Rick and Morty" src={logo} size="md" />
        {/** Show text next to avatar only on desktop */}
        <Flex flexDir="column" display={{ base: "none", md: "flex" }}>
          <Heading as="h3" size="sm">
            Rick and Morty
          </Heading>
          <Text color="grey">Beyond words</Text>
        </Flex>
      </Flex>
      <Divider mt={{ base: 0, md: 4 }} display={{ base: "none", md: "block" }} />
      {/* Render Navigation component with horizontal layout on mobile */}
      <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "Switch to Dark" : "Switch to Light"}
    </Button>
      <Navigation
        seasons={seasons}
        selectSeason={selectSeason}
      />
    </Flex>
  </Skeleton>
</Flex>
  );
};

export default Sidebar;
