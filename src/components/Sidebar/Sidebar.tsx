import {
  Avatar,
  Collapse,
  Divider,
  Flex,
  Heading,
  IconButton,
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
  return (
    <Flex
      pos="fixed"
      h="100vh"
      w={"15%"}
      flexDir="column"
      justifyContent="center"
      p="0.5%"
    >
      <Skeleton isLoaded={!isLoading} h={"100%"}>
        <Flex
          flexDir="column"
          px="5%"
          h="100%"
          w="100%"
          borderRadius={"15px"}
          as="nav"
          boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
        >
          <Flex
            w="100%"
            py="2%"
            mt={4}
            alignItems={"center"}
            justifyContent="space-around"
          >
            <Avatar name="Rick and Morty" src={logo} size={"lg"} />
            <Flex flexDir="column">
              <Heading as="h3" size="sm">
                Rick and Morty
              </Heading>
              <Text color="grey">Beyond words</Text>
            </Flex>
          </Flex>
          <Divider mt={4} />
          <Navigation seasons={seasons} selectSeason={selectSeason} />
          {/* <IconButton
          aria-label="menu"
          background="none"
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={toggleisOpen}
        ></IconButton>
        <NavItem
          navIsOpen={isOpen}
          title={"Characters"}
          icon={CgGhostCharacter}
          active={true}
        /> */}
        </Flex>
      </Skeleton>
    </Flex>
  );
};

export default Sidebar;
