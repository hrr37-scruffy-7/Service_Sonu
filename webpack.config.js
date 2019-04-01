let path = require('path');
module.exports = {
  entry: path.join(__dirname, 'public', 'src', 'index.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client')
  },
  mode: 'development'
};