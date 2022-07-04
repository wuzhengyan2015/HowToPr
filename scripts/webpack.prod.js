const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ]
}

module.exports = merge(prodConfig, baseConfig)