import { Flex } from "@chakra-ui/react";
import DougnutChart from "./DoughnutChart";
import React from "react";
interface ChartsProps {
  groupedData: Record<string, any>;
}
const Charts = ({ groupedData }: ChartsProps) => {
  console.log("groupedData", groupedData);
  return (
    <Flex alignContent="center" flexDir="column" w="100%" h="100%">
      <DougnutChart data={groupedData.gender} />
      <DougnutChart data={groupedData.species} />
      <DougnutChart data={groupedData.status} />
    </Flex>
  );
};

export default Charts;
