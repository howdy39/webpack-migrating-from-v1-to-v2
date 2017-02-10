const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    root: [path.resolve(__dirname, 'src')],
    modulesDirectories: ['node_modules', 'my_modules'],
    fallback: [path.resolve(__dirname, 'src/fallback')]
  }
};
