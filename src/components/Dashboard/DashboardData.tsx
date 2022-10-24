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
    <Flex flexDir="row">
      <VStack spacing={2} w="60%" align="stretch">
        <SeasonStats
          seasonData={seasonData}
          isLoading={loading}
          charactersAmount={uniqueCharactersIds.length}
        />
        <Skeleton isLoaded={!loading}>
          <DataTable paginatedData={paginatedData} isLoading={isLoading} />
        </Skeleton>
      </VStack>
      <VStack spacing={2} px={"1%"} py={"0.5%"} w="40%">
        <Charts groupedData={groupedData} />
      </VStack>
    </Flex>
  );
};

export default DashboardData;
