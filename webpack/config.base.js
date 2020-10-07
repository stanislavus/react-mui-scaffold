const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
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
