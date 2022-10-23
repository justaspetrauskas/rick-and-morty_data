import { Flex, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUniqueCharactersIds } from "../../utils/helpers";
import useEpisodeData from "../../utils/hooks/useEpisodeData";
import Sidebar from "../Sidebar/Sidebar";
import DashBoardHeader from "./DashBoardHeader";
import DataTable from "../DataTable/DataTable";
import SeasonStats from "./SeasonStats";

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
        <Flex w="85%" minH={"100vh"} flexDir="column" px={"1%"} py={"0.5%"}>
          {/* DashBoard top */}
          <DashBoardHeader season={season} />
          <Flex w="100%" flexDir="row">
            <Flex w="75%" flexDir="column">
              <SeasonStats
                seasonData={groupedData[season]}
                isLoading={isLoading}
                charactersAmount={uniqueCharactersIds.length}
              />

              <DataTable
                seasonData={groupedData[season]}
                characterIds={uniqueCharactersIds}
              />
            </Flex>
          </Flex>

          {/* statistics */}
        </Flex>
      </Skeleton>
      {/* <DataDashboard seasonData={groupedData[season]} /> */}
    </Flex>
  );
};

export default Dashboard;
