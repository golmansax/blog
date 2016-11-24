/* eslint-disable jsx-a11y/img-has-alt */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import imagesData from '../../data/imagesData.json';

// Create Map from url -> image
const IMAGE_LOOKUP = new Map(imagesData.map((image) => {
  return [image.url, image];
}));

export default function ZoomableImage({
  src, containerClassName, imageClassName, backgroundImage, ...otherProps
}) {
  if (!IMAGE_LOOKUP.has(src)) {
    throw new Error(`Following image src is not in imagesData: ${src}`);
  }

  const image = IMAGE_LOOKUP.get(src);
  const className = classnames({
    ZoomableImage: true,
    [imageClassName]: imageClassName,
  });

  return (
    <span
      className={classnames({
        'ZoomableImage-container': true,
        [containerClassName]: containerClassName,
      })}
      >
      {backgroundImage ? (
        <span
          className={className}
          style={{ backgroundImage: `url(${src})` }}
          data-src={src}
        />
      ) : (
        <img
          {...otherProps}
          src={src}
          className={className}
        />
      )}
      <small className='ZoomableImage-caption'>{image.description}</small>
    </span>
  );
}

ZoomableImage.propTypes = {
  backgroundImage: PropTypes.bool.isRequired,
  containerClassName: PropTypes.string,
  imageClassName: PropTypes.string,
  src: PropTypes.string,
};

ZoomableImage.defaultProps = {
  backgroundImage: false,
};