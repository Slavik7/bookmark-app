export const createFullUrl = (url) => {
  const httpsIndex = url.indexOf("https://");
  const httpIndex = url.indexOf("http://");

  if (httpsIndex === -1 && httpIndex === -1) return `https://${url}`;

  return url;
};
