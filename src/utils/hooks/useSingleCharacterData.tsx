import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";

const fetchSingleCharacter = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.json();
};

interface useSingleCharacterDataProps {
  characterId: string;
}
const useSingleCharacterData = ({
  characterId,
}: useSingleCharacterDataProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { data, status } = useQuery(["singleCharacter", characterId], () =>
    fetchSingleCharacter(characterId)
  );

  useEffect(() => {
    if (status === "loading" || status === "idle") {
      setIsLoading(true);
    } else if (status === "error") {
      setIsLoading(false);
      setError(true);
    } else {
      setIsLoading(false);
      setError(false);
    }
  }, [status]);

  return { data, isLoading, error };
};

export default useSingleCharacterData;
