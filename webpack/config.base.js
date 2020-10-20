const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    // Clean dist folder
    new CleanWebpackPlugin(),
    // Copy assets
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),
    // Inject html
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../public/index.html') }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.[tj]sx?$/,
        exclude: /node_modules|dist/,
        loader: 'eslint-loader',
        options: {
          emitError: false,
          emitWarning: false,
          failOnError: true,
          failOnWaring: false,
        },
      },
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules|dist/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
