import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useEpisodeData from "../../utils/hooks/useEpisodeData";
import Sidebar from "../Sidebar/Sidebar";
import DashBoardHeader from "./DashBoardHeader";
import SeasonStats from "./SeasonStats";

const Dashboard = () => {
  const { groupedData, error, isLoading } = useEpisodeData();

  const [season, setSeason] = useState("01");
  const selectSeason = (season: string) => {
    setSeason(season);
  };
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxWidth="100vw">
      {/* sidebar */}
      <Sidebar seasons={Object.keys(groupedData)} isLoading={isLoading} />
      {/* data */}
      <Flex w="85%" minH={"100vh"} flexDir="column" px={"1%"} py={"0.5%"}>
        {/* DashBoard top */}
        <DashBoardHeader season={season} />
        <SeasonStats seasonData={groupedData[season]} isLoading={isLoading} />

        {/* statistics */}
      </Flex>
      {/* <DataDashboard seasonData={groupedData[season]} /> */}
    </Flex>
  );
};

export default Dashboard;
