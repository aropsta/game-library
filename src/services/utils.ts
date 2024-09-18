import noImage from "/no-image.webp";

//Data/speed saving measure
//Takes image url and returns the url for the cropped version
//RAWG only supports specific crop sizes
export default function getCroppedImageUrl(url: string) {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}
