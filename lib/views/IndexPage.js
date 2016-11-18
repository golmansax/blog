import React, { PropTypes } from 'react';
import PageLayout from './PageLayout';
import PostCard from '../components/PostCard';

export default function IndexPage(props) {
  const { posts } = props;

  return (
    <PageLayout {...props} title='Welcome to my blog'>
      <div className='row align-center'>
        <div className='medium-8 columns'>
          <p>Most recent posts</p>
          {posts.map((post) => (
            <PostCard key={post._url} post={post} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
