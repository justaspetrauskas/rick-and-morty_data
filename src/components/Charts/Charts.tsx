import { VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import DoughnutChart from "./DoughnutChart";
interface ChartsProps {
  groupedData: Record<string, any>;
}
const Charts = ({ groupedData }: ChartsProps) => {
  return (
    <VStack spacing={2} align="center" h="100vh" w="100%">
      <DoughnutChart data={groupedData.gender} title={"Character by gender"} />
      <DoughnutChart data={groupedData.species} title={"Character by gender"} />
      <DoughnutChart data={groupedData.status} title={"Character by gender"} />
    </VStack>
  );
};

export default Charts;
