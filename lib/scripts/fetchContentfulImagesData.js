/* eslint-disable no-console */

import contentful from 'contentful';
import path from 'path';
import { writeFileSync } from 'jsonfile';

const OUT_PATH = path.resolve(__dirname, '..', '..', 'data', 'contentfulImagesData.json');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
});

client.getAssets().then((res) => {
  const images = res.items.map((item) => {
    const { file } = item.fields;
    if (!file || !file.contentType.includes('image')) {
      return null;
    }

    return Object.assign({}, item.fields.file.details.image, {
      url: file.url,
      description: item.fields.description,
    });
  }).filter((image) => image);

  writeFileSync(OUT_PATH, images, {
    spaces: 2,
  });

  console.log(`Successfully wrote imagesData to ${OUT_PATH}`);
});
