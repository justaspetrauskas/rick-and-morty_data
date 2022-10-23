import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface NavItemProps {
  navIsOpen: boolean;
  icon: IconType;
  title: string;
  active: boolean;
}

const NavItem = ({ navIsOpen, icon, title, active }: NavItemProps) => {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navIsOpen ? "flex-start" : "center"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active ? "#AEC8CA" : "transparent"}
          p={3}
          w={"100%"}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
        >
          <MenuButton w="100%">
            <Flex alignItems={"center"}>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#82AAAD" : "gray.500"}
              />
              <Text display={navIsOpen ? "flex" : "none"} ml={3}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default NavItem;
