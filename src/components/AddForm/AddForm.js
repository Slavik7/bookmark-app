import { Button, FormControl, IconButton, TextField } from "@mui/material";
import NativeSelect from "@mui/material/NativeSelect";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import * as S from "./style";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  categoriesUpdate,
  saveBookmarks,
} from "../../store/actions";
const AddForm = ({ setAddActive }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const addBookmarkHandler = (e) => {
    e.preventDefault();
    if (url.length >= 3) {
      const bookmark = {
        title: title,
        url: url,
        category: category,
        id: nanoid(),
      };
      dispatch(addBookmark(bookmark));
      dispatch(saveBookmarks());
      dispatch(categoriesUpdate());
      setAddActive(false);
    }
  };
  return (
    <S.BookmarkFormContainer>
      <S.FormContainer>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="standard"
        />
        <TextField
          label="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          variant="standard"
        />
        <S.CategoryContainer>
          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="standard"
          />

          <NativeSelect
            id="demo-customized-select-native"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            sx={{ alignSelf: "flex-end" }}
          >
            <option aria-label="None" value="" />
            {categories.map((cat, index) => (
              <option value={cat} key={index}>
                {cat}
              </option>
            ))}
          </NativeSelect>
        </S.CategoryContainer>
        <Button
          variant="contained"
          type="submit"
          onClick={addBookmarkHandler}
          disabled={url.length < 3}
        >
          ADD
        </Button>
        <IconButton
          size="small"
          sx={{ position: "absolute", right: "0.5rem", top: "0.5rem" }}
          onClick={() => {
            setAddActive(false);
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </S.FormContainer>
    </S.BookmarkFormContainer>
  );
};

export default AddForm;
