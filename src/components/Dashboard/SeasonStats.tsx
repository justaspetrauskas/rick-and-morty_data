import { Grid, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUniqueCharactersIds, sortCharacterIds } from "../../utils/helpers";

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
    }
  }, [seasonData]);

  useEffect(() => {
    if (seasonData) {
      setNumberOfEp(seasonData.length);
    }
  }, [seasonData]);

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={6}
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={"15px"}
      w="100%"
      p={3}
    >
      {/* episodes */}
      <Skeleton isLoaded={!isLoading}>
        <StatCard
          result={numberOfEp.toString()}
          title={"Total Episodes"}
          bgColor={"teal.100"}
        />
      </Skeleton>
      {/* unique characters */}
      <Skeleton isLoaded={!isLoading}>
        <StatCard
          result={charactersAmount.toString()}
          title={"Unique Characters"}
          bgColor={"teal.100"}
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
  );
};

export default SeasonStats;
