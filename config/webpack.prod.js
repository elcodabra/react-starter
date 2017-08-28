const path = require('path');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { DefinePlugin, LoaderOptionsPlugin, NoEmitOnErrorsPlugin } = require('webpack');
const { UglifyJsPlugin } = require('webpack').optimize;
const commonConfig = require('./webpack.common.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new UglifyJsPlugin({
      sourceMap: false,
      mangle: {
        keep_fnames: true
      },
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
    }),
    new LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ],
  devServer: {
    historyApiFallback: true
  }
});
