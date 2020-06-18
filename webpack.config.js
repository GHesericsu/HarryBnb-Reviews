const path = require('path');

const CLIENT_DIR = path.join(__dirname, '/client');
const PUBLIC_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${CLIENT_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: CLIENT_DIR,
        exclude: /node.modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime', 'babel-plugin-styled-components']
        },
      },
    ],
  },
};
