import React from "react";
import Text from "../Text";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import * as S from "./style";
import { createFullUrl } from "../../util";
import {
  categoriesUpdate,
  removeBookmark,
  saveBookmarks,
} from "../../store/actions";
import { useDispatch } from "react-redux";
const BookmarkCard = ({ card }) => {
  const dispatch = useDispatch();
  const navToURL = (url) => {
    const urlFix = createFullUrl(url);
    window.location.href = urlFix;
  };
  const deleteHandler = (id) => {
    dispatch(removeBookmark(id));
    dispatch(saveBookmarks());
    dispatch(categoriesUpdate());
  };
  return (
    <S.Card>
      <S.CardDetails onClick={() => navToURL(card.url)}>
        <Text variant="body1">{card.title}</Text>
        <Text variant="body2">{card.url}</Text>
      </S.CardDetails>
      <S.CardActions>
        <IconButton size="small" onClick={() => deleteHandler(card.id)}>
          <Delete fontSize="small" />
        </IconButton>
      </S.CardActions>
    </S.Card>
  );
};

export default BookmarkCard;
