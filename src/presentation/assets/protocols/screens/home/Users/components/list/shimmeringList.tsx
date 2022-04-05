import React, { FC } from "react";
import styled from "styled-components/native";
// import { SmallText } from "@presentation/components";
import { SmallText } from "../../../../../../../components";
import ShimmeringItem from "../item/shimmeringItem";

const ItemSeparator = styled.View`
  padding-vertical: 1%;
`;
const StyledShimmeringList = styled.FlatList``;
const SHIMMERING_ITEM_COUNT = 14;
const ShimmeringListData = new Array(SHIMMERING_ITEM_COUNT)
  .fill(undefined)
  .map((_, index) => ({
    id: index,
    name: "name",
  }));

const ShimmeringList: FC = () => {
  return (
    <StyledShimmeringList
      data={ShimmeringListData}
      showsVerticalScrollIndicator={true}
      keyExtractor={(item) => {
        return item.id.toString();
      }}
      ListEmptyComponent={() => <SmallText>No data found!</SmallText>}
      ItemSeparatorComponent={() => <ItemSeparator />}
      ListFooterComponentStyle={{
        paddingVertical: 20,
      }}
      renderItem={() => <ShimmeringItem />}
    />
  );
};

export default ShimmeringList;
