import moment from 'moment';
import contentful from 'roots-contentful';
import { ENV } from './constants';
import { blogPath, slugify } from '../utils';
import views from '../views';

module.exports = {
  env: ENV,

  open_browser: false,

  dump_dirs: ['views'],

  ignores: [
    'assets/**/*',
    'readme.md',
    '**/_*',
    '.gitignore',
    'ship.*conf',
    '*.swp',
    '**/*.swp',
    '.*',
    'lib/**/*',
    'webpack.config.js',
  ],

  locals: {
    views,
    blogPath,
  },

  extensions: [
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
          path: (entry) => {
            return `posts/${moment(entry.date).format('YYYY/MM/DD')}/${slugify(entry.title)}`;
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
    presets: ['latest'],
  },
};
