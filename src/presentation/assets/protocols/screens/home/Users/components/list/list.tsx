import React, { FC } from "react";
import styled from "styled-components/native";
// import {SmallText} from "@presentation/components";
// import { LoadUserList } from "@domain/useCase";
// import UserItem from "@presentation/screens/home/Users/components/item/item";

import {SmallText} from "../../../../../../../components";
import { LoadUserList } from "../../../../../../../../domain/useCase";
import UserItem from "../item/item";



type Props = {
  users: LoadUserList.Model[];
};

const ItemSeparator = styled.View`
  padding-vertical: 1%;
`;

const StyledUserList = styled.FlatList``;

const UserList: FC<Props> = ({ users }: Props) => {
  return (
    <StyledUserList
      data={users}
      showsVerticalScrollIndicator={true}
      keyExtractor={(item) => {
        return item.id.toString();
      }}
      ListEmptyComponent={() => <SmallText>No data found!</SmallText>}
      ItemSeparatorComponent={() => <ItemSeparator />}
      ListFooterComponentStyle={{
        paddingVertical: 20,
      }}
      renderItem={(post) => <UserItem user={post.item} />}
    />
  );
};

export default UserList;
