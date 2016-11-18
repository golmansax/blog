import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

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
};

export default function Markdown({ renderers, ...otherProps }) {
  return (
    <ReactMarkdown
      {...otherProps}
      renderers={Object.assign(DEFAULT_RENDERERS, renderers)}
    />
  );
}

Markdown.propTypes = {
  renderers: PropTypes.object,
};
