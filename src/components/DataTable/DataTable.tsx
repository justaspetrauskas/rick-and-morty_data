import { Flex, Skeleton, Table, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUniqueCharactersIds, paginate } from "../../utils/helpers";
import useMultipleCharacters from "../../utils/hooks/useMultipleCharacters";
import TableBody from "./TableBody";
import TableControls from "./TableControls";
import TableHead from "./TableHead";
interface DataTableProps {
  seasonData: Record<string, any>[];
  characterIds: string[];
}
const DataTable = ({ seasonData, characterIds }: DataTableProps) => {
  const { paginatedData, isLoading, error } = useMultipleCharacters({
    ids: characterIds,
  });
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

  useEffect(() => {
    if (paginatedData) {
      console.log(paginatedData[currentPage]);
    }
  }, [paginatedData, currentPage]);
  return (
    <VStack
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={"15px"}
      spacing={2}
      w="100%"
      overflow="auto"
      p={3}
    >
      {/* <TableHeader /> */}

      <TableControls
        pages={paginatedData.length}
        pageData={paginatedData[currentPage]}
        currPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        goToPage={gotToPage}
      />
      <Skeleton isLoaded={!isLoading}>
        <Flex overflow="auto">
          <Table variant="unstyled" mt={4}>
            <TableHead />
            {paginatedData[currentPage] && (
              <TableBody characters={paginatedData[currentPage]} />
            )}
          </Table>
        </Flex>
      </Skeleton>
    </VStack>
  );
};

export default DataTable;
