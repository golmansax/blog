import React, { PropTypes } from 'react';
import Markdown from '../components/Markdown';
import PageLayout from './PageLayout';
import TagsList from '../components/TagsList';
import { blogPath, formatDate } from '../utils';

export default function PostPage(props) {
  const { post, ...otherProps } = props;

  return (
    <PageLayout {...otherProps} title={post.title}>
      <div className='row align-center'>
        <div className='large-8 columns'>
          <a href={blogPath('/')}>back to index</a>
          <h1 className='PostPage-header'>{post.title}</h1>
          <p className='PostPage-info'>{formatDate(post.date)} | <TagsList tags={post.tags} /></p>
        </div>
      </div>
      <div className='PostPage-lead-image-container'>
        <div
          className='PostPage-lead-image'
          style={{ backgroundImage: `url(${post.leadImage.fields.file.url})` }}
        />
      </div>
      <div className='row align-center'>
        <div className='large-8 columns'>
          {post.content ? <Markdown className='PostPage-content' source={post.content} /> : null}
        </div>
      </div>
    </PageLayout>
  );
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
};
