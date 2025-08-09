import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  MenuDivider,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { MdOutlineLocalMovies } from "react-icons/md";


import { motion } from "framer-motion";

// Define motion components for MenuList and MenuItem
const MotionMenuList = motion(MenuList);
const MotionMenuItem = motion(MenuItem);

const listVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Delay between children
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

interface NavigationProps {
  seasons: string[];
  selectSeason: (season: string) => void;
}
// TODO add loading states to wait for seasons
const Navigation = ({ seasons, selectSeason }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(seasons.length > 0 ? seasons[0] : null);

  const handleSelectSeason = (season: any) => {
    setSelectedSeason(season);
    selectSeason(season);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (

    <Menu isOpen={isOpen} onClose={closeMenu} onOpen={() => setIsOpen(true)}>
      <MenuButton
        as={Button}
        rounded="md"

        variant="solid"
        cursor="pointer"
        minW={0}
        bg="yellow.400"
        color="black"
        fontWeight="bold"
        boxShadow="0 4px 0 orange.700"
        _hover={{
          bg: "yellow.300",
          boxShadow: "0 6px 0 orange.800",
        }}
        _active={{
          bg: "orange.500",
          transform: "scale(0.95)",
          boxShadow: "0 2px 0 orange.600",
        }}
        onClick={toggleMenu}
      >
        <Flex alignItems="center" columnGap="0.25rem">
          <p>Season</p>
          {seasons?.length > 0 && <Text fontWeight="semibold">#{selectedSeason}</Text>}
        </Flex>
      </MenuButton>

      <MotionMenuList
        variants={listVariants}
        border="none"
        boxShadow="0 8px 0 orange.700"
        fontWeight="bold"
        color="black"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {seasons.map((season) => (
          <MotionMenuItem
            key={season}
            fontWeight="semibold"
            onClick={() => handleSelectSeason(season)}
            borderRadius="md"
            variants={itemVariants}
            mb={2}
            justifyContent="center"
            bg="yellow.200"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            _hover={{
              bg: "yellow.300",
              transform: "scale(1.05)",
              boxShadow: "0 4px 0 orange.700",
            }}
            _active={{
              bg: "orange.500",
              transform: "scale(0.95)",
              boxShadow: "0 2px 0 orange.600",
            }}
          >
            Season #{season}
          </MotionMenuItem>
        ))}
      </MotionMenuList>


    </Menu>

  );
};

export default Navigation;
