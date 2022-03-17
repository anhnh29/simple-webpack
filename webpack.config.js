const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const path = require('path');


module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  watch: true,
  plugins: [new HtmlWebpackPlugin({title:'webpack-project',filename: 'index.html'})],
};