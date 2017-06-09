import contentfulData from './contentfulImagesData.json';
import manualData from './manualImagesData.json';

const data = contentfulData.map((image) => ({ ...image }));
manualData.forEach((image) => {
  const matchedImage = data.find((thisImage) => thisImage.url === image.url);
  if (!matchedImage) {
    throw new Error(`Could not find image with url ${image.url}`);
  }

  Object.assign(matchedImage, image);
});

export default data;
