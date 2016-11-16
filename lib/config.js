require('dotenv').config({ silent: true });
const marked = require('marked');
const moment = require('moment');
const axis = require('axis');
const rupture = require('rupture');
const autoprefixer = require('autoprefixer-stylus');
const cssPipeline = require('css-pipeline');
const contentful = require('roots-contentful');

module.exports = ({ env }) => {
  const root = env === 'production' ? '/blog' : '';

  return {
    env,

    ignores: [
      'readme.md',
      '**/*layout.*',
      '**/_*',
      '.gitignore',
      'ship.*conf',
      '*.swp',
      '**/*.swp',
      '.*',
      'lib/**/*',
    ],

    locals: {
      blogPath: (path) => {
        if (path[0] === '/') { return `${root}${path}`; }
        return `${root}/${path}`;
      },
      formatDate: (date) => {
        return moment(date).format('MMM DD YYYY');
      },
      markdown: marked,
    },

    extensions: [
      cssPipeline(env === 'production' ? {
        files: 'assets/css/*.styl',
        out: 'css/build.css',
        minify: true,
        hash: true,
      } : {
        files: 'assets/css/*.styl',
      }),
      contentful({
        access_token: process.env.CONTENTFUL_DELIVERY_API_KEY,
        space_id: process.env.CONTENTFUL_SPACE_ID,
        content_types: {
          posts: {
            id: 'post',
            template: 'views/_post.jade',
          },
        },
      }),
    ],

    stylus: {
      use: [axis(), rupture(), autoprefixer()],
      sourcemap: env === 'development',
    },

    jade: {
      pretty: env === 'development',
    },

    babel: {
      sourcemap: env === 'development',
    },
  };
};
