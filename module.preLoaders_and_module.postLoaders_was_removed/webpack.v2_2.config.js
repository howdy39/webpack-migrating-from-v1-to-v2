const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loaders: [
          'eslint-loader',
          './my_loaders/my-loader1'
        ]
      },
      {
        test: /\.js$/,
        loader: './my_loaders/my-loader2'
      },
      {
        test: /\.js$/,
        enforce: 'post',
        loader: './my_loaders/my-loader3'
      },
    ]
  }
};
