const { resolve } = require('path');

module.exports = {
  entry: resolve('./src/GameOfChips.js'),
  mode: 'development',
  output: {
    path: resolve('./dist/'),
    filename: 'bundle.min.js'
  }
}