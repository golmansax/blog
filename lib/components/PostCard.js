import React, { PropTypes } from 'react';
import Markdown from './Markdown';
import TagsList from './TagsList';
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
      <div className='PostCard-content'>
        <h3>{post.title}</h3>
        <p className='PostCard-info'>{formatDate(post.date)} | <TagsList tags={post.tags} /></p>
        <Markdown source={post.intro} renderers={{ link: FakeLink }} />
      </div>
      <small className='PostCard-more-link'>Read more...</small>
    </a>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
