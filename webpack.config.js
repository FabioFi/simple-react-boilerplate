var path = require('path')
var webpack = require('webpack')
var DashboardPlugin = require('webpack-dashboard/plugin');
var precss = require('precss')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

var DEV = process.env.NODE_ENV === 'development'

var config = {
  entry: [path.join(__dirname, 'src/js/index.js')],
  output: {
    publicPath: DEV ? '/' : null,
    pathinfo: true,
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    alias: {
      css: '../css'
    }
  },
  target: 'web',
  devtool: DEV ? 'eval' : null, // 'source-map'
  plugins: DEV ? [
    new DashboardPlugin(),
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'src/index.html')
    })
  ] : [ // Production
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: DEV ? true : false,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
      },
      {
        test: /\.(jpe?g|png|gif|webp|svg)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'assets/[name].[ext]'
        }
      },
    ]
  },
  postcss: [
    precss,
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
}

config.plugins.unshift(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
}))

if (DEV) {
  config.entry.unshift('webpack-dev-server/client?/')
  config.entry.unshift('webpack/hot/dev-server')
  config.module.loaders.unshift({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'react-hot'
  })
}

module.exports = config
