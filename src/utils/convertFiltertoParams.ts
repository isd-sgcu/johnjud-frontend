/*
  const [filters, setFilters] = useState<filterState>({
    dog: false,
    cat: false,
    male: false,
    female: false,
    white: false,
    black: false,
    brown: false,
    blonde: false,
    minAge: 0,
    maxAge: 30,
  });
*/

import { filterState } from "@/types/filter";

const convertFiltertoParams = (filters?: filterState) => {
  if (!filters) {
    return "";
  }
  const params: Record<string, string | number> = {};

  if (filters.search) {
    params.search = filters.search;
  }

  if (filters.dog && filters.cat) {
    // skip
  } else if (filters.dog) {
    params.type = "dog";
  } else if (filters.cat) {
    params.type = "cat";
  }

  if (filters.male && filters.female) {
    // skip
  } else if (filters.male) {
    params.gender = "male";
  } else if (filters.female) {
    params.gender = "female";
  }

  const colorKeys: (keyof filterState)[] = [
    "white",
    "black",
    "brown",
    "blonde",
  ];
  const selectedColors = colorKeys.filter((color) => filters[color]);
  if (selectedColors.length > 0 && selectedColors.length < colorKeys.length) {
    params["color"] = selectedColors.join(",");
  }

  if (filters.minAge !== 0) {
    params["minAge"] = filters.minAge;
  }
  if (filters.maxAge !== 30) {
    params["maxAge"] = filters.maxAge;
  }

  // Convert params object to query string
  const queryString = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
  return queryString;
};

export { convertFiltertoParams };
