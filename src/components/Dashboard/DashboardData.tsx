import { Flex, Skeleton, VStack } from "@chakra-ui/react";
import React from "react";
import useMultipleCharacters from "../../utils/hooks/useMultipleCharacters";
import Charts from "../Charts/Charts";
import DataTable from "../DataTable/DataTable";
import SeasonStats from "./SeasonStats";
interface DashboardDataProps {
  seasonData: Record<string, any>[];
  uniqueCharactersIds: string[];
  loading: boolean;
}
const DashboardData = ({
  seasonData,
  loading,
  uniqueCharactersIds,
}: DashboardDataProps) => {
  const { paginatedData, groupedData, isLoading, error } =
    useMultipleCharacters({
      ids: uniqueCharactersIds,
    });

  return (
    <Flex flexDir="row" w="100%">
      <VStack spacing={2} w="75%" align="stretch">
        <SeasonStats
          seasonData={seasonData}
          isLoading={loading}
          charactersAmount={uniqueCharactersIds.length}
        />
        <Skeleton isLoaded={!loading}>
          <DataTable paginatedData={paginatedData} isLoading={isLoading} />
        </Skeleton>
      </VStack>
      <VStack spacing={2} align="left" px={"1%"} py={"0.5%"} w="100%">
        <Charts groupedData={groupedData} />
      </VStack>
    </Flex>
  );
};

export default DashboardData;
