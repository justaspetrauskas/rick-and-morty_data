import { VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import DoughnutChart from "./DoughnutChart";
interface ChartsProps {
  groupedData: Record<string, any>;
}
const Charts = ({ groupedData }: ChartsProps) => {
  return (
    <VStack
      spacing={2}
      align="center"
      h="100vh"
      w="40%"
      position="sticky"
      top="0"
      pb="1%"
    >
      <DoughnutChart data={groupedData.gender} title={"Characters by gender"} />
      <DoughnutChart
        data={groupedData.species}
        title={"Characters by species"}
      />
      <DoughnutChart data={groupedData.status} title={"Characters by status"} />
    </VStack>
  );
};

export default Charts;
