/* eslint-disable jsx-a11y/img-has-alt */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import imagesData from '../../data/imagesData';

// Create Map from url -> image
const IMAGE_LOOKUP = new Map(imagesData.map((image) => {
  return [image.url, image];
}));

function getImage(src) {
  // Contentful has two asset domains, try both of them!
  // - images.contentful.com
  // - images.ctfassets.net

  if (IMAGE_LOOKUP.has(src)) {
    return IMAGE_LOOKUP.get(src);
  }

  const secondarySrc = src.replace('images.contentful.com', 'images.ctfassets.net');
  if (IMAGE_LOOKUP.has(secondarySrc)) {
    return IMAGE_LOOKUP.get(secondarySrc);
  }

  return null;
}

export default function ZoomableImage({
  src, containerClassName, imageClassName, backgroundImage, ...otherProps
}) {
  const image = getImage(src);
  if (!image) {
    throw new Error(`Following image src is not in imagesData: ${src}`);
  }

  const className = classnames({
    ZoomableImage: true,
    [imageClassName]: imageClassName,
  });

  const { attribution } = image;

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
      <small className='ZoomableImage-caption'>
        {image.description}{attribution && ' '}
        {attribution && (
          <span className='ZoomableImage-attribution'>
            (image
            {attribution.photographer && (
              <span>
                {' '}by{' '}
                <a
                  href={attribution.photographer.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  >
                  {attribution.photographer.name}
                </a>
              </span>
            )}
            {attribution.source && (
              <span>
                {' '}via <a href={attribution.source.url} target='_blank' rel='noopener noreferrer'>
                  {attribution.source.name}
                </a>
              </span>
            )}
            )
          </span>
        )}
      </small>
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
