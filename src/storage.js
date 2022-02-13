export const saveData = (data) => {
  localStorage.removeItem("bookmarks");
  localStorage.setItem("bookmarks", JSON.stringify(data));
};

export const getData = () => {
  const data = localStorage.getItem("bookmarks");
  return JSON.parse(data);
};
