import moment from 'moment';
import contentful from 'roots-contentful';
import { ENV } from './constants';
import { blogPath, slugify } from '../utils';
import views from '../views';

function getDisplayUrl(url) {
  const index = url.indexOf('index.html');
  return url.substring(0, index);
}

module.exports = {
  env: ENV,

  open_browser: false,

  dump_dirs: ['views'],

  ignores: [
    'assets/**/*',
    'data/**/*',
    'scripts/**/*',
    'readme.md',
    '**/_*',
    '.gitignore',
    'ship.*conf',
    '*.swp',
    '**/*.swp',
    '.*',
    'lib/**/*',
    'webpack.config.js',
    'yarn.lock',
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
            return `posts/${moment(entry.date).format('YYYY/MM/DD')}/${slugify(entry.title)}/index`;
          },
          transform: (entry) => {
            // eslint-disable-next-line no-param-reassign
            entry.displayUrl = getDisplayUrl(entry._url);
            return entry;
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
