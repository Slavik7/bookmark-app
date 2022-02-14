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
  const urlUI = card.url.length > 40 ? `${card.url.slice(0, 41)}...` : card.url;
  const dispatch = useDispatch();
  const navToURL = (url) => {
    const urlFix = createFullUrl(url);
    window.open(urlFix, "_blank").focus();
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
        <Text variant="body2">{urlUI}</Text>
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
