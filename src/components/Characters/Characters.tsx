import { Flex, Heading, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import useCharacterData from "../../utils/hooks/useCharacterData";
import CharacterTable from "../CharacterTable/CharacterTable";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import SearchBar from "../SearchBar/SearchBar";
import CharacterCharts from "../CharacterCharts/Charts";
import useEpisodeData from "../../utils/hooks/useEpisodeData";

const Characters = () => {
  const { groupedData, paginatedData, status, isLoading } = useCharacterData();

  const [currentPage, setCurrentPage] = useState<number>(0);

  const nextPage = () => {
    if (currentPage < paginatedData.length) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };
  const gotToPage = (page: number) => {
    if (page > 0 && page <= paginatedData.length) setCurrentPage(page);
  };

  if (status === "error") {
    return <Error />;
  }

  return (
    <Flex w={"85%"} p="3%">
      <Flex
        w={"55%"}
        flexDir="column"
        overflow="auto"
        minH="100vh"
        alignItems="center"
      >
        <Heading>Welcome back</Heading>
        <Skeleton isLoaded={!isLoading}>
          <SearchBar />
          {paginatedData && (
            <CharacterTable
              data={paginatedData[currentPage]}
              pages={paginatedData.length}
              nextPage={nextPage}
              prevPage={prevPage}
              goToPage={gotToPage}
              currPage={currentPage}
            />
          )}
        </Skeleton>
      </Flex>

      <Flex
        w={"30%"}
        flexDir="column"
        overflow="auto"
        minH="100vh"
        alignItems="center"
      >
        <CharacterCharts groupedData={groupedData} />
      </Flex>
    </Flex>
  );
};

export default Characters;
