import React from 'react';
import PageLayout from './PageLayout';
import PostCard from '../components/PostCard';

export default function IndexPage(props) {
  const { posts } = props;

  return (
    <PageLayout {...props} title='Welcome to my blog'>
      <div>Hello world</div>
      <div className="row align-center">
        <div className="medium-6 columns">
          {posts.map((post) => (
            <PostCard key={post._url} post={post} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
