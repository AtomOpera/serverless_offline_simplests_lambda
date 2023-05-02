const path = require('path');
const slsw = require('serverless-webpack');

console.log(slsw.lib.entries)
module.exports = {
  entry: { handler: './handler.js' },
  // entry: slsw.lib.entries,
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].js'
    filename: 'handler.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: __dirname,
        exclude: /node_modules/,
      },
    ],
  },
  // resolve: {
  //   extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".html"]
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx|ts|tsx)$/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader',
  //     },
  //   ],
  // },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript
  // minifying and other things, so let's set mode to development
  // mode: 'development'
};