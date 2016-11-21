import React, { PropTypes } from 'react';
import Markdown from '../components/Markdown';
import PageLayout from './PageLayout';
import TagsList from '../components/TagsList';
import { blogPath } from '../utils';

export default function PostPage(props) {
  const { post, ...otherProps } = props;

  return (
    <PageLayout {...otherProps} title={post.title}>
      <div className='row align-center'>
        <div className='medium-8 columns'>
          <a href={blogPath('/')}>back to index</a>
          <h1 className='PostPage-header'>{post.title}</h1>
          <p><TagsList tags={post.tags} /></p>
          {post.intro ? <Markdown className='PostPage-content' source={post.intro} /> : null}
          {post.content ? <Markdown className='PostPage-content' source={post.content} /> : null}
        </div>
      </div>
    </PageLayout>
  );
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
};
