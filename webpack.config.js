const { resolve } = require('path');

module.exports = {
  entry: resolve('./src/GameOfChips.js'),
  mode: 'development',
  watch: true,
  output: {
    path: resolve('./'),
    filename: 'loader.min.js'
  }
}