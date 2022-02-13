import { Button } from "@mui/material";
import React from "react";
import Text from "../Text";
import * as S from "./style";
const Header = ({ setAddActive }) => {
  return (
    <S.Header>
      <Text>Bookmarks</Text>
      <Button
        size="small"
        variant="outlined"
        onClick={() => {
          setAddActive(true);
        }}
      >
        ADD Bookmark
      </Button>
    </S.Header>
  );
};

export default Header;
