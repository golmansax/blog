import React, { PropTypes } from 'react';
import { blogPath, formatDate } from '../utils';

export default function PostCard({ post }) {
  return (
    <a className='PostCard' href={blogPath(post._url)}>
      <h3>{post.title}</h3>
      <div>{formatDate(post.date)}</div>
    </a>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
