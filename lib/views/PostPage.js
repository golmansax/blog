import React, { PropTypes } from 'react';
import Markdown from '../components/Markdown';
import PageLayout from './PageLayout';
import { blogPath } from '../utils';

export default function PostPage(props) {
  const { post, ...otherProps } = props;

  return (
    <PageLayout {...otherProps} title={post.title}>
      <div className='row align-center'>
        <div className='medium-8 colums'>
          <a href={blogPath('/')}>back to index</a>
          <h1>{post.title}</h1>
          <div>
            Tags:
            {post.tags ? post.tags.map((tag) => (
              <span key={tag.fields.title}>{tag.fields.title}</span>
            )) : null}
          </div>
          {post.intro ? <Markdown source={post.intro} /> : null}
          {post.content ? <Markdown source={post.content} /> : null}
          <p>
            Holman is an entrepreneuer and freelance developer living in New York.
            He likes to write about things he really likes.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
};
