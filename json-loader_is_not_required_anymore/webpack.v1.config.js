const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
