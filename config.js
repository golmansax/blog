const moment = require('moment');
const axis = require('axis');
const rupture = require('rupture');
const autoprefixer = require('autoprefixer-stylus');
const cssPipeline = require('css-pipeline');
const dynamicContent = require('dynamic-content');

module.exports = ({ env }) => {
  const root = env === 'production' ? '/blog' : '';

  return {
    env,

    ignores: ['readme.md', '**/*layout.*', '**/_*', '.gitignore', 'ship.*conf', '*.swp', '**/*.swp'],

    locals: {
      blogPath: (path) => {
        if (path[0] === '/') { return `${root}${path}`; }
        return `${root}/${path}`;
      },
      formatDate: (date) => {
        return moment(date).format('MMM DD YYYY');
      },
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
      dynamicContent(),
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
