import React, { PropTypes } from 'react';
import readingTime from 'reading-time';
import Markdown from '../components/Markdown';
import PageLayout from './PageLayout';
import TagsList from '../components/TagsList';
import ZoomableImage from '../components/ZoomableImage';
import { blogPath, formatDate } from '../utils';

export default function PostPage(props) {
  const { post, ...otherProps } = props;
  const leadImage = post.leadImage.fields.file.url;

  const readingStats = readingTime(post.content);

  return (
    <PageLayout
      {...otherProps}
      title={post.title}
      description={post.intro}
      image={leadImage.includes('http') ? leadImage : `https:${leadImage}`}
      >
      <div className='row align-center'>
        <div className='large-8 columns'>
          <a href={blogPath('/')}>back to index</a>
          <h1 className='PostPage-header'>{post.title}</h1>
          <p className='PostPage-info'>
            {readingStats.text} | {formatDate(post.date)}
          </p>
          <TagsList tags={post.tags} />
        </div>
      </div>
      <ZoomableImage
        backgroundImage
        src={leadImage}
        containerClassName='PostPage-lead-image-container'
        imageClassName='PostPage-lead-image'
      />
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
