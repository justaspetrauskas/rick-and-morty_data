import { Flex, Skeleton, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUniqueCharactersIds } from "../../utils/helpers";
import useEpisodeData from "../../utils/hooks/useEpisodeData";
import Sidebar from "../Sidebar/Sidebar";
import DashBoardHeader from "./DashBoardHeader";
import DataTable from "../DataTable/DataTable";
import SeasonStats from "./SeasonStats";
import Charts from "../Charts/Charts";
import DashboardData from "./DashboardData";

const Dashboard = () => {
  const { groupedData, error, isLoading } = useEpisodeData();

  const [season, setSeason] = useState("01");
  const [uniqueCharactersIds, setUniqueCharactersIds] = useState<string[]>([]);

  useEffect(() => {
    if (groupedData[season]) {
      const uniqueCharacters = getUniqueCharactersIds(groupedData[season]);

      setUniqueCharactersIds(uniqueCharacters);
    }
  }, [season, groupedData]);

  const selectSeason = (season: string) => {
    setSeason(season);
  };
  return (
    <Flex h="100vh" overflow="auto" minH="100vh" flexDir="row" maxWidth="100vw">
      {/* sidebar */}
      <Sidebar
        seasons={Object.keys(groupedData)}
        isLoading={isLoading}
        selectSeason={selectSeason}
      />
      {/* data */}
      <Skeleton isLoaded={!isLoading} w="100%" ml="15%">
        <VStack
          w="85%"
          minH={"100vh"}
          spacing={2}
          align="left"
          px={"1%"}
          py={"0.5%"}
        >
          {/* DashBoard top */}
          <DashBoardHeader season={season} />
          {/* statistics */}
          <DashboardData
            seasonData={groupedData[season]}
            loading={isLoading}
            uniqueCharactersIds={uniqueCharactersIds}
          />
        </VStack>
      </Skeleton>
    </Flex>
  );
};

export default Dashboard;
