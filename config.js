const axis = require('axis');
const rupture = require('rupture');
const autoprefixer = require('autoprefixer-stylus');
const css_pipeline = require('css-pipeline');
const dynamic_content = require('dynamic-content');

module.exports = ({ env }) => {
  return {
    ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf', '*.swp', '**/*.swp'],

    extensions: [
      css_pipeline(env === 'production' ? {
        files: 'assets/css/*.styl',
        out: 'css/build.css',
        minify: true,
        hash: true,
      } : {
        files: 'assets/css/*.styl',
      }),
      dynamic_content(),
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
