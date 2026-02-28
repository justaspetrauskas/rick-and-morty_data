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
  flexDir="column" // always stack vertically
  px={{ base: 4, md: 0 }} // horizontal padding on mobile for spacing
  gap={4} // spacing between child elements
  h={"100vh"}
>

    <Charts groupedData={groupedData} />
    {/* <SeasonStats
      seasonData={seasonData}
      isLoading={loading}
      charactersAmount={uniqueCharactersIds.length}
    />
    <Skeleton isLoaded={!loading}>
      <DataTable paginatedData={paginatedData} isLoading={isLoading} />
    </Skeleton> */}


  
</Flex>

  );
};

export default DashboardData;
