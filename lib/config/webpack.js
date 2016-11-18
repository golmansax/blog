import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import autoprefixer from 'autoprefixer';
import failPlugin from 'webpack-fail-plugin';
import { ENV } from './constants';

const ROOT_DIR = path.resolve(__dirname, '..', '..');

module.exports = {
  entry: {
    main: path.resolve(ROOT_DIR, 'assets', 'css', 'main.scss'),
  },

  output: {
    path: path.resolve(ROOT_DIR, 'public', 'webpack'),
    filename: `[name]${ENV === 'production' ? '.[chunkhash]' : ''}.js`,
    publicPath: '/webpack/',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: ENV === 'development' ? 'eval-source-maps' : undefined,

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', [
          'css', 'postcss', 'resolve-url', 'sass?sourceMap',
        ]),
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[path][name].[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.json$/,
        loaders: 'json',
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin(`[name]${ENV === 'production' ? '.[chunkhash]' : ''}.css`),
    new ManifestPlugin(),
    failPlugin,
  ],

  postcss: () => [autoprefixer],
};