import noImage from "../assets/blank.jpg";


export const optimizedImage = (url: string) => {
  if (!url) return noImage;
  
  const index = url.indexOf("media/") + "media/".length;
  const optImg = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return optImg;
};

// url = https://example.com/media/image123.jpg
// optImg = https://example.com/media/crop/600/400/image123.jpg