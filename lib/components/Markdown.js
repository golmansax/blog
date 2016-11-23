import React, { PropTypes } from 'react';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';
import ZoomableImage from './ZoomableImage';

function Link({ children, ...otherProps }) {
  return (
    <a target='_blank' rel='noopener noreferrer' {...otherProps}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node,
};

const DEFAULT_RENDERERS = {
  link: Link,
  image: ZoomableImage,
};

export default function Markdown({ renderers, className, ...otherProps }) {
  return (
    <ReactMarkdown
      className={classnames({ Markdown: true, [className]: className })}
      {...otherProps}
      renderers={Object.assign({}, DEFAULT_RENDERERS, renderers)}
    />
  );
}

Markdown.propTypes = {
  className: PropTypes.string,
  renderers: PropTypes.object,
};
