import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { getUniqueCharactersIds } from "../../utils/helpers";
interface SeasonStatsProps {
  seasonData: Record<string, any>[];
  isLoading: boolean;
}
const SeasonStats = ({ seasonData, isLoading }: SeasonStatsProps) => {
  useEffect(() => {
    if (seasonData) {
      console.log(seasonData);

      const uniqueCharacter = getUniqueCharactersIds(seasonData);
      const episodes = seasonData.length;
      console.log(uniqueCharacter);
    }
  }, [seasonData]);

  return (
    <Flex
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={"15px"}
      w="100%"
      p={3}
    >
      SeasonStats
    </Flex>
  );
};

export default SeasonStats;
