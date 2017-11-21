import React, { PropTypes } from 'react';
import readingTime from 'reading-time';
import Markdown from './Markdown';
import { blogPath, formatDate } from '../utils';

function FakeLink({ children }) {
  return <span>{children}</span>;
}

FakeLink.propTypes = {
  children: PropTypes.node,
};

export default function PostCard({ post }) {
  const readingStats = readingTime(post.content);

  return (
    <a className='PostCard' href={blogPath(post.displayUrl)}>
      <div
        className='PostCard-image'
        style={{ backgroundImage: `url(${post.leadImage.fields.file.url})` }}
      />
      <div className='PostCard-container'>
        <div className='PostCard-content'>
          <h3>{post.title}</h3>
          <p className='PostCard-info'>
            <small>{readingStats.text} | {formatDate(post.date)}</small>
          </p>
          <Markdown source={post.intro} renderers={{ link: FakeLink }} />
        </div>
        <small className='PostCard-more-link'>Read more...</small>
      </div>
    </a>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
