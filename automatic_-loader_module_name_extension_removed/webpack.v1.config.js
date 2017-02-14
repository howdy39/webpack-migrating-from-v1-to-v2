const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        // loader: 'style-loader!css-loader'
        loader: 'style!css' // 省略可能
      }
    ]
  }
};
