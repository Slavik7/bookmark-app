import data from "../data";
import { getData } from "../storage";

export const addBookmark = (bookmark) => {
  return { type: "BOOKMARK_ADD", payload: { bookmark: bookmark } };
};

export const dataFetch = () => {
  const bookmarksData = getData();
  const bookmarks = bookmarksData ? bookmarksData : [];
  return { type: "BOOKMARK_INIT", payload: { bookmarks: bookmarks } };
};

export const removeBookmark = (id) => {
  return { type: "BOOKMARK_REMOVE", payload: { id: id } };
};

export const saveBookmarks = () => {
  return { type: "BOOKMARKS_SAVE" };
};

export const categoriesUpdate = () => {
  return { type: "CATEGORIES_UPDATE" };
};
