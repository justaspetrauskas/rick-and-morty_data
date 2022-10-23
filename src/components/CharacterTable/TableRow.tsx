import { Avatar, Badge, Tag, Td, Tr } from "@chakra-ui/react";
import React from "react";
interface TableRowProps {
  character: Record<string, any>;
}
const TableRow = ({ character }: TableRowProps) => {
  return (
    <Tr>
      <Td>
        <Avatar name={character.name} src={character.image} size="md" />
      </Td>
      <Td fontWeight={"semibold"}>{character.name}</Td>
      <Td>{character.gender}</Td>
      <Td>{character.species}</Td>
      <Td>{character.origin.name}</Td>
      <Td>
        <Tag
          size={"md"}
          variant={"subtle"}
          colorScheme={
            character.status === "Alive"
              ? "green"
              : character.status === "Dead"
              ? "red"
              : "gray"
          }
        >
          {character.status}
        </Tag>
      </Td>
    </Tr>
  );
};

export default TableRow;
