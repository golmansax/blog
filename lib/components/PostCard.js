import React, { PropTypes } from 'react';
import Markdown from './Markdown';
import { blogPath, formatDate } from '../utils';

function FakeLink({ children }) {
  return <span>{children}</span>;
}

FakeLink.propTypes = {
  children: PropTypes.node,
};

export default function PostCard({ post }) {
  return (
    <a className='PostCard' href={blogPath(post._url)}>
      <h3>{post.title}</h3>
      <p>{formatDate(post.date)}</p>
      <Markdown source={post.intro} renderers={{ link: FakeLink }} />
    </a>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
