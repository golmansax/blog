import React, { PropTypes } from 'react';
import Navbar from '../components/Navbar';
import { getAsset, blogPath } from '../utils';

export default function PageLayout(props) {
  const { title, children } = props;

  return (
    <html lang='en-US'>
      <head>
        <meta charSet='utf8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge, chrome=1' />
        <meta name='description' content='description of your site' />
        <meta name='author' content='author of the site' />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href='https://fonts.googleapis.com/css?family=Noto+Sans' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Noto+Serif' rel='stylesheet' />
        <link href={blogPath(getAsset('main.css'))} rel='stylesheet' />
        <title>{title}</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};