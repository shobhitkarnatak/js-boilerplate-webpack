const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app-root',
      filename: 'index.html',
      scripts: [
        {
          type: 'module',
          src: 'bundle.js',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
