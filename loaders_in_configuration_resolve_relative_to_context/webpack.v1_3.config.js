const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'my-loader'
      }
    ]
  },
  resolveLoader:  {
    root: path.resolve(__dirname, 'my_loaders')
  }
};
