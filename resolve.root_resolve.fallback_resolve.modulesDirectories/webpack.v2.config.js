const path = require('path');

module.exports = {
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules', 'my_modules',
      path.resolve(__dirname, 'src/fallback')
    ],
  },
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    filename: 'bundle.v2.js'
  },
};
