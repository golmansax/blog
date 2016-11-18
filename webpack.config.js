const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const autoprefixer = require("autoprefixer");
const failPlugin = require("webpack-fail-plugin");

const ENV = process.env.NODE_ENV || "development";

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'assets', 'css', 'main.scss'),
  },

  output: {
    path: path.resolve(__dirname, "public/webpack"),
    filename: `[name]${ENV === "production" ? ".[chunkhash]" : ""}.js`,
  },

  // Enable sourcemaps for debugging webpack"s output.
  devtool: ENV === "development" ? "eval-source-maps" : undefined,

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", [
          "css", "postcss", "resolve-url", "sass?sourceMap",
        ]),
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file?hash=sha512&digest=hex&name=[path][name].[hash].[ext]",
          "image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false",
        ],
      },
      {
        test: /\.json$/,
        loaders: "json",
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin(`[name]${ENV === "production" ? ".[chunkhash]" : ""}.css`),
    new ManifestPlugin(),
    failPlugin,
  ],

  postcss: () => [autoprefixer],
};
