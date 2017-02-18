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
        test: /\.json$/,
        loader: './my_loaders/my-loader'
      }
    ]
  }
};
