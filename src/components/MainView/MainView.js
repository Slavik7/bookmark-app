import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookmarkList from "../BookmarkList";
import Tabs from "../Tabs";
import * as S from "./style";
const MainView = () => {
  const [curBookmarks, setCurBookmarks] = useState([]);
  const [category, setCategory] = useState("all");

  const { bookmarks, categories } = useSelector((state) => state);
  useEffect(() => {
    if (category.toLowerCase() !== "all") {
      const b = bookmarks.filter((bookmark) => {
        return bookmark.category.toLowerCase() === category.toLowerCase();
      });

      setCurBookmarks([...b]);
    } else {
      setCurBookmarks([...bookmarks]);
    }
  }, [category, bookmarks]);

  return (
    <S.MainView>
      <Tabs setCategory={setCategory} categories={categories} />
      {curBookmarks.length > 0 && (
        <BookmarkList list={curBookmarks} title={category} />
      )}
    </S.MainView>
  );
};

export default MainView;
