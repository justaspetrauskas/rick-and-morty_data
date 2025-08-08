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
<Flex
  flexDir={{ base: "column", md: "row" }} // stack vertically on mobile, horizontally on desktop
  w="100%"
  px={{ base: 4, md: 0 }} // horizontal padding on mobile for spacing
  gap={4} // spacing between child elements on all screens
>
  <VStack
    spacing={2}
    w={{ base: "100%", md: "60%" }} // full width on mobile, 60% on desktop
    align="stretch"
  >
    <SeasonStats
      seasonData={seasonData}
      isLoading={loading}
      charactersAmount={uniqueCharactersIds.length}
    />
    <Skeleton isLoaded={!loading}>
      <DataTable paginatedData={paginatedData} isLoading={isLoading} />
    </Skeleton>
  </VStack>

  <Charts
    groupedData={groupedData}

  />
</Flex>

  );
};

export default DashboardData;
