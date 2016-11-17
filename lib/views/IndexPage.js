import React from 'react';
import PageLayout from './PageLayout';
import { blogPath, formatDate } from '../utils';

export default function IndexPage(props) {
  const { posts } = props;

  return (
    <PageLayout {...props} title='Welcome to my blog'>
      <div>Hello world</div>
      {posts.map((post) => (
        <div key={post._url}>
          <h2>
            <a href={blogPath(post._url)}>{post.title}</a>
          </h2>
          <div>{formatDate(post.date)}</div>
        </div>
      ))}
    </PageLayout>
  );
}
