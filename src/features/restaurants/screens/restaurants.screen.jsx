import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const ANDROID_TOP_MARGIN = StatusBar.currentHeight;
const SearchContainer = styled.View`
  padding: 16px;
  margin-top: ${ANDROID_TOP_MARGIN};
`;

const RestaurantListContainer = styled.View`
  padding: 16px;
  background-color: blue;
  flex: 1;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
