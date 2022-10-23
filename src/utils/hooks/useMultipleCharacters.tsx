import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { paginate } from "../helpers";

const fetchMultipleCharacter = async (ids: string[]) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${ids}`
  );
  return response.json();
};

interface useMultipleCharactersProps {
  ids: string[];
}

const useMultipleCharacters = ({ ids }: useMultipleCharactersProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [paginatedData, setPaginatedData] = useState<Record<string, any>[][]>(
    []
  );

  const { data, status } = useQuery(["multipleCharacters", ids], () =>
    fetchMultipleCharacter(ids)
  );

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const paginatedData = paginate(data, 10);
      setPaginatedData(paginatedData);
    }
  }, [data]);

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

  return { paginatedData, isLoading, error };
};

export default useMultipleCharacters;
