import React from 'react'
import PageLayout from './PageLayout';
import { blogPath, formatDate } from '../utils';

export default function PostPage(props) {
  const { post } = props;

  return (
    <PageLayout {...props} title={post.title}>
      <a href={blogPath('/')}>back to index</a>
      <h1>{post.title}</h1>
      {post.tags ? post.tags.map((tag) => (
        <p key={tag.fields.title}>Tag: {tag.fields.title}</p>
      )) : null}
      {post.content || false /* TODO: use markdown */}
      <p>
        Holman is an entrepreneuer and freelance developer living in New York.
        He likes to write about things he really likes.
      </p>
    </PageLayout>
  );
}
