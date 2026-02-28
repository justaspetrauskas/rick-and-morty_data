import { Flex, Skeleton, Table, VStack, keyframes } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useMultipleCharacters from "../../utils/hooks/useMultipleCharacters";
import TableBody from "./TableBody";
import TableControls from "./TableControls";
import TableHead from "./TableHead";
interface DataTableProps {
  paginatedData: Record<string, any>[][];
  isLoading: boolean;
}
const DataTable = ({ paginatedData, isLoading }: DataTableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const nextPage = () => {
    if (currentPage + 1 < paginatedData.length) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };
  const gotToPage = (page: number) => {
    if (page > 0 && page <= paginatedData.length) setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [paginatedData]);

  const hoverAnimation = keyframes`
    0% {
      box-shadow: 0 0 20px rgba(255, 0, 150, 0.7);
    }
    50% {
      box-shadow: 0 0 30px rgba(0, 255, 0, 0.8); /* Lime green shadow */
    }
    100% {
      box-shadow: 0 0 20px rgba(255, 0, 150, 0.7);
    }
  `;

  return (
    <VStack
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={"25px"}
      spacing={2}
      maxW={"80vw"}
      mx={"auto"}
      w="100%"
      overflow="auto"
      p={3}
      border="3px solid #000000"
                  _hover={{
        animation: `${hoverAnimation} 1.5s ease-in-out infinite`,
      }}
    >
      <TableControls
        pages={paginatedData.length}
        pageData={paginatedData[currentPage]}
        currPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        goToPage={gotToPage}
      />
      <Skeleton isLoaded={!isLoading} w="100%">
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
