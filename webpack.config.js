const path = require('path');

const SRC_DIR = path.join(__dirname, '/src/client');
const DIST_DIR = path.join(__dirname, '/lib');

module.exports = {
  entry: `${SRC_DIR}/server/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [SRC_DIR],
        use: 'babel-loader',
      },
    ],
  },
};