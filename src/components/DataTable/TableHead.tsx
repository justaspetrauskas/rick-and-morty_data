import { Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
const headers = ["image", "name", "gender", "species", "origin", "status"];
const TableHead = () => {
  return (
    <Thead w="100%">
      <Tr color="gray">
        {headers.map((header, index) => (
          <Th align="center" key={index}>
            {header}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default TableHead;
