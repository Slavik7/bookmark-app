export const createFullUrl = (url) => {
  let wwwIndex = url.indexOf("www.");
  if (url.indexOf("https://") === -1)
    if (wwwIndex === -1 || wwwIndex > 0) return `https://www.${url}`;
    else return `https://${url}`;
};
