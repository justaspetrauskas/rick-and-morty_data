import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { groupBy, paginate } from "../helpers";

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
  const [groupedData, setGroupedData] = useState<Record<string, any>>({
    species: {},
    gender: {},
    status: {},
  });

  const { data, status } = useQuery(["multipleCharacters", ids], () =>
    fetchMultipleCharacter(ids)
  );

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const groupedBySpecies = groupBy(data, "species");
      const groupedByGender = groupBy(data, "gender");
      const groupedByStatus = groupBy(data, "status");
      const paginatedData = paginate(data, 10);
      setGroupedData({
        species: groupedBySpecies,
        gender: groupedByGender,
        status: groupedByStatus,
      });
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

  return { paginatedData, groupedData, isLoading, error };
};

export default useMultipleCharacters;
