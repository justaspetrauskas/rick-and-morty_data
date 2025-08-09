import { Box, Heading } from "@chakra-ui/react";
import React from "react";
interface DashboardHeaderProps {
  season: string;
}
const DashBoardHeader = ({ season }: DashboardHeaderProps) => {
  return (
    <Box flex={"1 1 60vh"} border="2px solid black" borderRadius="md">
    <Heading as="h3" size="lg" py="2%" sx={{ fontFamily: 'RickAndMorty, sans-serif' }}>
      Rick and Morty
    </Heading>
    <span>Season #{season}</span>
    </Box>
  );
};

export default DashBoardHeader;
