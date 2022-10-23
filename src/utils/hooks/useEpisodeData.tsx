import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { filterBySeason, groupBySeason } from "../helpers";
const useEpisodeData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [groupedData, setGroupedData] = useState<Record<string, any>>({});

  const fetchEpisodes = async () => {
    let pages: number = 0;
    const allEpisodes = [];
    const response = await fetch(`https://rickandmortyapi.com/api/episode`);
    const { info } = await response.json();
    pages = info.pages;
    for (let p = 1; p <= pages; p++) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${p}`
      );
      const { results } = await response.json();
      allEpisodes.push(...results);
    }

    return allEpisodes;
  };

  const { data, status } = useQuery("episodes", fetchEpisodes);

  useEffect(() => {
    if (data) {
      // group episodes by season
      const bySeason = groupBySeason(data);
      setGroupedData(bySeason);
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

  return { groupedData, isLoading, error };
};

export default useEpisodeData;
