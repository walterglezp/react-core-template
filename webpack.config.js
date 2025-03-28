const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin") 
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
 
module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js', // cache-busting for better performance
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: {
      keep: "config.js",
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
    alias: {
      react: path.resolve('./node_modules/react'),
      '@app': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    },
    fallback: {
      "url": require.resolve("url/")
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                sourceMap: true, // Enable source maps for TypeScript
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30 * 1024, // Minimum size, in bytes, for a chunk to be generated
      maxSize: 244 * 1024, // Target maximum chunk size to split large modules
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body', // Injects scripts before the closing </body> tag
    }),
    new HtmlWebpackTagsPlugin({
      files: ["index.html"],
      tags: ["config.js"],
      append: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets'), to: 'assets' },
      ],
    }),
    new CompressionWebpackPlugin({
      algorithm: 'gzip',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
};
