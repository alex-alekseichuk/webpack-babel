const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    ui: './src/ui.js'
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    library: '[name]File',
    libraryTarget: 'var',
    // publicPath: "/img/app-file/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + `/src/index.html`,
      inject: "body",
      chunks: ['ui']
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // loaders: ['babel-loader', {loader: path.resolve('./ioc-webpack-loader.js')}],
        // loaders: [{loader: path.resolve('./ioc-webpack-loader.js')}, 'babel-loader'],
        // loaders: [
        //   {loader: path.resolve(__dirname, 'node_modules/ng-common/util/ioc-webpack-loader.js')}
        // ],
        loaders: [{
          loader: 'babel-loader',
          options: {
            babelrc: true,
            extends: path.resolve(__dirname, '.babelrc'),
            // cacheDirectory: true,
            // envName: ENV
          }
        }],
      }
    ]
  },
  externals: {
  },
  optimization: {
    minimize: false
  }
};
