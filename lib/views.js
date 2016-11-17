import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import IndexPage from './views/IndexPage';
import PostPage from './views/PostPage';

export default {
  IndexPage(props) {
    return renderToStaticMarkup(<IndexPage {...props} />);
  },

  PostPage(props) {
    return renderToStaticMarkup(<PostPage {...props} />);
  },
};
