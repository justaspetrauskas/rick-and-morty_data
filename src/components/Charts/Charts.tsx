import { HStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import DoughnutChart from "./DoughnutChart";
interface ChartsProps {
  groupedData: Record<string, any>;
}
const Charts = ({ groupedData }: ChartsProps) => {
  return (
    <HStack
      spacing={4}              // spacing between charts horizontally
      align="center"
      pb="1%"
      w={"100%"}
      minHeight="350px"
      mt={{ base: 4, md: 0 }}
    >
      <DoughnutChart data={groupedData.gender} title={"Characters by gender"} />
      <DoughnutChart
        data={groupedData.species}
        title={"Characters by species"}
      />
      <DoughnutChart data={groupedData.status} title={"Characters by status"} />
    </HStack>
  );
};

export default Charts;
