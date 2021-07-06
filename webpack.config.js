/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

console.log(path.resolve(__dirname, './.env'));
const defaultConfig = {
  // webpack will take the files from ./src/index
  entry: './src/index',
  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    contentBase: './public',
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/, use: { loader: 'file-loader' } },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
      systemvars: true,
    }),
  ],
};

const production = {
  mode: 'production',
  ...defaultConfig,
};
const development = {
  mode: 'development',
  devtool: 'source-map',
  ...defaultConfig,
};
module.exports = [production, development];
