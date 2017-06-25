import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import autoprefixer from 'autoprefixer';
import { ENV } from './constants';
import { blogPath } from '../utils';

const ROOT_DIR = path.resolve(__dirname, '..', '..');

module.exports = {
  entry: {
    main: path.resolve(ROOT_DIR, 'assets', 'main.js'),
  },

  output: {
    path: path.resolve(ROOT_DIR, 'public', 'webpack'),
    filename: `[name]${ENV === 'production' ? '.[chunkhash]' : ''}.js`,
    publicPath: blogPath('/webpack/'),
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: ENV === 'development' ? 'eval-source-maps' : undefined,

  module: {
    rules: [
      ENV === 'production' && {
        loader: 'transform-loader?loose-envify',
        enforce: 'post',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer],
              },
            },
            'resolve-url-loader',
            'sass-loader?sourceMap',
          ],
        }),
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[path][name].[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              bypassOnDebug: true,
            },
          },
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ].filter((rule) => rule),
  },

  plugins: [
    new ExtractTextPlugin(`[name]${ENV === 'production' ? '.[chunkhash]' : ''}.css`),
    new ManifestPlugin(),
  ],
};
