const path = require('path');

module.exports = {
  resolve: {
    root: [path.resolve(__dirname, './src')],
    modulesDirectories: ['node_modules', 'my_modules'],
    fallback: [path.resolve(__dirname, './src/fallback')],
  },
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    filename: 'bundle.v1.js'
  },
};
