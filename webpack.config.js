const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CircularDependencyPlugin({
      // Exclude detection of files based on a RegExp.
      exclude: /a\.js|node_modules/,
      // Intentionally add errors to webpack instead of warnings.
      failOnError: true
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
