import { Heading } from "@chakra-ui/react";
import React from "react";
interface DashboardHeaderProps {
  season: string;
}
const DashBoardHeader = ({ season }: DashboardHeaderProps) => {
  return (
    <Heading as="h3" size="lg" py="2%">
      Welcome to Rick and Morty, Season #{season}
    </Heading>
  );
};

export default DashBoardHeader;
