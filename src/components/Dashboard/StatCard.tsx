import { Box, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
interface StatCardProps {
  title: string;
  result: string;
  bgColor: string;
  characterId?: string;
}
const StatCard = ({ title, result, bgColor }: StatCardProps) => {
  return (
    <GridItem
      borderRadius="md"
      colSpan={2}
      minH={"5rem"}
      p={"10px"}
      backgroundColor={bgColor}
    >
      <Flex flexDir="row" h="100%" justifyContent="center">
        <Flex flexDir="column" justifyContent="space-between" align="center">
          <Heading as="h5" size="lg">
            {result}
          </Heading>
          <Text fontSize="sm" fontWeight="semi-bold">
            {title}
          </Text>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default StatCard;
