export const createFullUrl = (url) => {
  const wwwIndex = url.indexOf("www.");
  const httpsIndex = url.indexOf("https://");
  const httpIndex = url.indexOf("http://");
  const fullPrefix =
    url.indexOf("https://www.") > -1 || url.indexOf("http://www.") > -1;
  if (fullPrefix) return url;
  if (httpsIndex === -1 && httpIndex === -1)
    if (wwwIndex === -1 || wwwIndex > 0) return `https://www.${url}`;
    else return `https://${url}`;
  else if (httpsIndex === 0) return url.replace("https://", "https://www.");
  else if (httpIndex === 0) return url.replace("http://", "http://www.");

  return url;
};
