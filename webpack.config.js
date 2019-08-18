const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  devtool: 'source-map',
  externals: [nodeExternals({ modulesDir: path.resolve(__dirname, './node_modules') })],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared')
    }
  },
  optimization: {
    nodeEnv: false
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: 'ts-loader'
    }]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  }
};