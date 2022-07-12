import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";

import { SearchView } from "./search.styles";

import { LocationContext } from "../../../../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchView>
      <Searchbar
        placeholder="Search for a location..."
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => {
          if (!text.length) {
          }
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};
