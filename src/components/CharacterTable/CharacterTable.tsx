import { Flex, Table, Thead } from "@chakra-ui/react";
import React from "react";
import TableBody from "./TableBody";
import TableControls from "./TableControls";
import TableHead from "./TableHead";

interface CharacterTableProps {
  data: Record<string, any>[];
  pages: number;
  currPage: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
}
const CharacterTable = ({
  data,
  pages,
  currPage,
  nextPage,
  prevPage,
  goToPage,
}: CharacterTableProps) => {
  console.log(data);
  return (
    <Flex flexDir="column" border={"1px solid black"} borderRadius={10} p={5}>
      <TableControls
        pages={pages}
        currPage={currPage}
        nextPage={nextPage}
        prevPage={prevPage}
        goToPage={goToPage}
      />
      <Flex overflow="auto">
        <Table variant="unstyled" mt={4}>
          <TableHead />
          {data && <TableBody characters={data} />}
        </Table>
      </Flex>
    </Flex>
  );
};

export default CharacterTable;
