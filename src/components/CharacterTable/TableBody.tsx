import { Tbody, Tr } from "@chakra-ui/react";
import TableRow from "./TableRow";
import React from "react";
interface TableBodyProps {
  characters: Record<string, any>[];
}
const TableBody = ({ characters }: TableBodyProps) => {
  return (
    <Tbody>
      {characters.map((character) => (
        <TableRow character={character} key={character.id} />
      ))}
    </Tbody>
  );
};

export default TableBody;
