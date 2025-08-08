import { Box, Grid, keyframes, Skeleton, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { sortCharacterIds } from "../../utils/helpers";
import { IBarChartData } from "../../utils/types";
import LineChart from "../Charts/LineDataChart";

import StatCard from "./StatCard";

interface SeasonStatsProps {
  seasonData: Record<string, any>[];
  isLoading: boolean;
  charactersAmount: number;
}
const SeasonStats = ({
  seasonData,
  isLoading,
  charactersAmount,
}: SeasonStatsProps) => {
  const [numberOfEp, setNumberOfEp] = useState(0);

  const [mpCharName, setMpCharName] = useState<string>("");

  const [charactersByEpisode, setCharactersByEpisode] = useState<
    IBarChartData[]
  >([]);

  const fetchSingleCharacter = async (id: string) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    setMpCharName(data.name);
  };

  useEffect(() => {
    if (seasonData) {
      const sorted = sortCharacterIds(seasonData);
      fetchSingleCharacter(sorted[0].id);
      setNumberOfEp(seasonData.length);
      const characterData: IBarChartData[] = seasonData.map(
        (episode: Record<string, any>) => {
          return {
            name: ("Ep" + episode.episode.split("E")[1]) as string,
            characters: +episode.characters.length,
          };
        }
      );
      setCharactersByEpisode(characterData);
    }
  }, [seasonData]);

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(255, 0, 150, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.8); /* Lime green shadow */
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(255, 0, 150, 0.7);
  }
`;
  return (
    <Box
      borderRadius="25px"
      border="3px solid #000000"
      w="100%"
      h="100%"
      p={4}
      _hover={{
        animation: `${hoverAnimation} 1.5s ease-in-out`,
      }}
    >
      <VStack gap={2}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} w={"100%"}>
          {/* episodes */}
          <Skeleton isLoaded={!isLoading}>
            <StatCard
              result={numberOfEp.toString()}
              title={"Total Episodes"}
              bgColor={"brand.100"}
            />
          </Skeleton>
          {/* unique characters */}
          <Skeleton isLoaded={!isLoading}>
            <StatCard
              result={charactersAmount.toString()}
              title={"Unique Characters"}
              bgColor={"brand.50"}
            />
          </Skeleton>
          {/* most popular character */}
          <Skeleton isLoaded={!isLoading}>
            <StatCard
              result={mpCharName}
              title={"Most Popular Character"}
              bgColor={"teal.100"}
            />
          </Skeleton>
        </Grid>
        {/* characte breakdowwn */}
        <Skeleton
          isLoaded={charactersByEpisode ? true : false}
          w="100%"
          h="100%"
        >
          <LineChart
            data={charactersByEpisode}
            title={"Character distribution"}
          />
        </Skeleton>
      </VStack>
    </Box>
  );
};

export default SeasonStats;
