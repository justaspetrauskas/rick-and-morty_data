import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { groupBy, paginate } from "../helpers";

const useCharacterData = () => {
  const [groupedData, setGroupedData] = useState<Record<string, any>>({
    species: {},
    gender: {},
    status: {},
  });

  const [paginatedData, setPaginatedData] = useState<Record<string, any>[][]>(
    []
  );

  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    let pages: number = 0;
    const allCharacters = [];
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const { info } = await response.json();
    pages = info.pages;
    for (let p = 1; p <= pages; p++) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${p}`
      );
      const { results } = await response.json();
      allCharacters.push(...results);
    }

    return allCharacters;
  };

  const { data, status, error } = useQuery("characters", fetchCharacters);

  useEffect(() => {
    if (data) {
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
    if (status === "loading") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [status]);

  return { groupedData, paginatedData, status, isLoading };
};

export default useCharacterData;
