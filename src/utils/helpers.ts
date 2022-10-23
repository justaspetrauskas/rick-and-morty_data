export const groupBy = (arr: Record<string, any>[], key: string) =>
  arr.reduce(
    (acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc),
    {}
  );

export function paginate(items: any[], size: number) {
  const paginatedData = [];
  items = [].concat(...items);

  while (items.length) {
    paginatedData.push(items.splice(0, size));
  }

  return paginatedData;
}

export const filterBySeason = (arr: Record<string, any>[], season: string) => {
  return arr.filter((item: Record<string, any>) =>
    item.episode.slice(1, 3).includes(season)
  );
};

export const groupBySeason = (arr: Record<string, any>[]) => {
  return arr.reduce((group, item) => {
    const { episode } = item;
    const season = episode.slice(1, 3);
    group[season] = group[season] || [];
    group[season].push(item);
    return group;
  }, {});
};

export const getCharacters = (arr: Record<string, any>[]) => {
  const uniqueCharactersIds = Array.from(
    arr
      .map((e) =>
        e.characters.map((item: string) => {
          let itemArr = item.split("/");
          return itemArr[itemArr.length - 1];
        })
      )
      .flat(1)
  );

  return uniqueCharactersIds;
};

export const getUniqueCharactersIds = (arr: Record<string, any>[]) => {
  const uniqueCharacters = Array.from(new Set(getCharacters(arr)));
  return uniqueCharacters;
};

export const sortCharacterIds = (arr: Record<string, any>[]) => {
  const sortedCharacters = getCharacters(arr).reduce(function (acc, curr) {
    acc[curr] ? ++acc[curr] : (acc[curr] = 1);

    return acc;
  }, []);

  const sorted = Object.entries(sortedCharacters)
    .map((arr) => {
      return { id: arr[0], value: arr[1] };
    })
    .sort((a: Record<string, any>, b: Record<string, any>) => {
      return b.value - a.value;
    });

  return sorted;
};
