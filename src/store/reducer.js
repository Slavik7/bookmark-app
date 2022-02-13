import { saveData } from "../storage";

const initialState = {
  bookmarks: [],
  categories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKMARK_ADD": {
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload.bookmark],
      };
    }
    case "BOOKMARK_REMOVE": {
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks.filter(
            (bookmark) => bookmark.id !== action.payload.id
          ),
        ],
      };
    }
    case "CATEGORIES_UPDATE": {
      const catSet = new Set();
      catSet.add("all");
      state.bookmarks.forEach((b) => {
        catSet.add(b.category);
      });
      return { ...state, categories: [...catSet.values()] };
    }
    case "BOOKMARK_INIT": {
      return {
        ...state,
        bookmarks: [...action.payload.bookmarks],
      };
    }
    case "BOOKMARKS_SAVE": {
      saveData(state.bookmarks);
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
