import { Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import React from "react";
interface TableControlsProps {
  pages: number;
  currPage: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
}
const TableControls = ({
  pages,
  currPage,
  nextPage,
  prevPage,
  goToPage,
}: TableControlsProps) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Heading as="h5" fontSize={"1.5rem"}>
        Character Summary
      </Heading>
      <Flex alignItems={"center"}>
        <IconButton
          colorScheme={"transparent"}
          aria-label="Previous page"
          icon={<GrFormPrevious />}
          _hover={{ backgroundColor: "lightgray" }}
          onClick={prevPage}
          isDisabled={currPage === 0}
        />
        <Spacer />

        {currPage + 1}
        <Spacer />
        <IconButton
          aria-label="Next page"
          icon={<GrFormNext />}
          colorScheme={"transparent"}
          _hover={{ backgroundColor: "lightgray" }}
          onClick={nextPage}
          isDisabled={currPage === pages}
        />
      </Flex>
    </Flex>
  );
};

export default TableControls;
