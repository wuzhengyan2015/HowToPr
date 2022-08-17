const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    clean: true,
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
}

module.exports = merge(prodConfig, baseConfig)