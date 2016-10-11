var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

var DEV = process.env.NODE_ENV === 'development'

var config = {
  entry: [path.join(__dirname, 'src/js/index.js')],
  output: {
    publicPath: '/',
    pathinfo: DEV,
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  target: 'web',
  devtool: DEV ? 'eval' : null, // 'source-map'
  plugins: DEV ? [
    new CaseSensitivePathsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
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
    new ExtractTextPlugin('style.css'),
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
          cacheDirectory: DEV,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: DEV ?
          'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss' :
          ExtractTextPlugin.extract('style', 'css?-autoprefixer&modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
      },
      {
        test: /\.(ico|jpe?g|png|gif|webp|svg)(\?.*)?$/,
        include: path.join(__dirname, 'src'),
        exclude: /\/favicon.ico$/,
        loader: 'file',
        query: {
          name: 'assets/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\/favicon.ico$/,
        include: path.join(__dirname, 'src'),
        loader: 'file',
        query: {
          name: 'favicon.ico'
        }
      },
      {
        test: /\.html$/,
        loader: 'html',
        query: {
          attrs: ['link:href']
        }
      }
    ]
  },
  postcss: [
    require('postcss-partial-import')(),
    require('postcss-mixins')(),
    require('postcss-advanced-variables')(),
    require('postcss-custom-media')(),
    require('postcss-extend')(),
    require('postcss-nested')(),
    require('postcss-property-lookup')(),
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ]
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}

config.plugins.unshift(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
}))

if (DEV) {
  config.entry.unshift('webpack-dev-server/client?/')
  config.module.loaders.unshift({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'react-hot'
  })
  config.devServer = {
    hot: true,
    inline: true,
    colors: true,
    clientLogLevel: 'none',
    historyApiFallback: true,
    port: process.env.PORT || 3000
  }
}

module.exports = config
