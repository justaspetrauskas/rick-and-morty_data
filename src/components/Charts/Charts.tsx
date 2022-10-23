import { VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import DoughnutChart from "./DoughnutChart";
interface ChartsProps {
  groupedData: Record<string, any>;
}
const Charts = ({ groupedData }: ChartsProps) => {
  useEffect(() => {
    if (groupedData) {
      console.log(groupedData);
    }
  }, [groupedData]);

  return (
    <VStack spacing={2} align="center" h="100%" w="100%">
      <DoughnutChart data={groupedData.gender} />
      <DoughnutChart data={groupedData.species} />
      <DoughnutChart data={groupedData.status} />
    </VStack>
  );
};

export default Charts;
