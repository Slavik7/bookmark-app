import React from "react";
import * as S from "./style";
import BookmarkCard from "../BookmarkCard";
import Text from "../Text";
const BookmarkList = ({ list, title }) => {
  return (
    <S.ListContainer>
      <S.ListHeader>
        <Text variant="body1">{title.toUpperCase()}</Text>
      </S.ListHeader>
      <S.List>
        {list.length > 0 &&
          list.map((card, index) => <BookmarkCard card={card} key={card.id} />)}
      </S.List>
    </S.ListContainer>
  );
};

export default BookmarkList;
