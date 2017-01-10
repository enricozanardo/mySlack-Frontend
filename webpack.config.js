module.exports = {
  entry: [
    './src/main.jsx'
  ],
  output: {
    path: './src/public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        exclude: '/node_modules/',
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
    }]
  },
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
