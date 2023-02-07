import React from "react";
import { Search } from "@mapbox/search-js-react";

const CitySearch = () => {
  const filter = (suggestions) => {
    return suggestions.filter((suggestion) => {
      return (
        suggestion.context[0].id.includes("place") ||
        suggestion.context[0].id.includes("municipality")
      );
    });
  };

  return (
    <Search
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onResult={console.log}
      filter={filter}
    />
  );
};

export default CitySearch;
