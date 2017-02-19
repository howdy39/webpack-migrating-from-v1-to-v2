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
        loader: 'eslint-loader'
      }
    ]
  }
};
