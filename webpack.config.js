const webpack = require('webpack');
const path = require('path');

// const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
                // include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      // {
      //   test: /\.scss$/,
      //   use: [{ loader: 'style-loader' }, { loader: 'sass-loader' }],
      // },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
        // port: 3000,
        // historyApiFallback: {
        //     index: './src/client/index.html',
        // },
    contentBase: path.join(__dirname),
        // compress: true,
    port: 3000,
      historyApiFallback: true
  },
};

module.exports = config;
