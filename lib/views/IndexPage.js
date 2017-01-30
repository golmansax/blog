import React, { PropTypes } from 'react';
import PageLayout from './PageLayout';
import PostCard from '../components/PostCard';

export default function IndexPage(props) {
  const { posts } = props;

  return (
    <PageLayout {...props} title='Blog'>
      <div className='row align-center'>
        <div className='large-8 columns'>
          <p className='IndexPage-label'>Most recent posts</p>
          {posts.map((post) => (
            <PostCard key={post.displayUrl} post={post} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
