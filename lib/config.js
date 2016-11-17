const moment = require('moment');
const cssPipeline = require('css-pipeline');
const contentful = require('roots-contentful');
import path from 'path';
import { ENV } from './constants';
import { blogPath } from './utils';
import views from './views';

module.exports = {
  env: ENV,

  open_browser: false,

  ignores: [
    'readme.md',
    '**/_*',
    '.gitignore',
    'ship.*conf',
    '*.swp',
    '**/*.swp',
    '.*',
    'lib/**/*',
  ],

  locals: {
    views,
    blogPath,
  },

  extensions: [
    cssPipeline(ENV === 'production' ? {
      files: 'assets/css/*.scss',
      out: 'css/build.css',
      minify: true,
      hash: true,
    } : {
      files: 'assets/css/*.scss',
    }),
    contentful({
      access_token: process.env.CONTENTFUL_DELIVERY_API_KEY,
      space_id: process.env.CONTENTFUL_SPACE_ID,
      content_types: {
        posts: {
          id: 'post',
          template: 'views/_post.jade',
          sort: (post1, post2) => {
            // We want reverse chronological order
            return moment(post2.date).diff(moment(post1.date), 'days');
          },
        },
      },
    }),
  ],

  jade: {
    pretty: ENV === 'development',
  },

  babel: {
    sourcemap: ENV === 'development',
  },

  scss: {
    includePaths: [path.resolve(__dirname, '..', 'node_modules')],
  },
};
