import React, { PropTypes } from 'react';
import classnames from 'classnames';
import imagesData from '../../data/imagesData.json';

// Create Map from url -> image
const IMAGE_LOOKUP = new Map(imagesData.map((image) => {
  return [image.url, image];
}));

export default function ZoomableImage(props) {
  const { src, className } = props;

  if (!IMAGE_LOOKUP.has(src)) {
    throw new Error(`Following image src is not in imagesData: ${src}`);
  }

  return (
    <img
      {...props}
      className={classnames({ ZoomableImage: true, [className]: className })}
    />
  );
}
