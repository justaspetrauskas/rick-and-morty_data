import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineLocalMovies } from "react-icons/md";

interface NavigationProps {
  seasons: string[];
  selectSeason: (season: string) => void;
}
const Navigation = ({ seasons, selectSeason }: NavigationProps) => {
  return (
    <Flex flexDir="column" h="100%" mt={4}>
      <Accordion defaultIndex={[0]} allowMultiple as={Menu}>
        <AccordionItem border={"none"}>
          <AccordionButton aria-label="seasons" borderRadius={5}>
            <MenuButton w="100%" flex="1">
              <Flex alignItems={"center"}>
                <Icon
                  as={MdOutlineLocalMovies}
                  fontSize="xl"
                  color={"#82AAAD"}
                />
                <Text fontWeight={"semibold"} ml={3}>
                  Seasons
                </Text>
              </Flex>
            </MenuButton>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel float={"right"} w="90%">
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={2}
              align="stretch"
            >
              {seasons.map((season) => (
                <Button
                  size="sm"
                  fontWeight={"semibold"}
                  colorScheme="teal"
                  onClick={() => selectSeason(season)}
                  key={season}
                >
                  Season #{season}
                </Button>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default Navigation;
