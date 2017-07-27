var path    = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: '/build/src/app.js',
  },
  output: {
    path: '/build/app',
    publicPath: '/',
    filename: 'js/[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
            module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(
              path.join(__dirname, '../node_modules')
              ) === 0
            )
      }
    }),
  ],
  module: {
    rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          'scss': [
          { loader: "vue-style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: '/build/src/scss/overrides.scss',
            },
          },
          ],
        },
      },
    },
    {
      test: /\.scss$/,
      use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      { loader: "sass-loader" },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: '/build/src/scss/overrides.scss',
        },
      },
      ],
      exclude: /(node_modules)/,
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/,
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'img/[name].[hash:7].[ext]',
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'fonts/[name].[hash:7].[ext]',
      }
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      src: '/build/src/',
    }
  },
  devtool: '#cheap-module-eval-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compress: {
            warnings: false
          }
        }),
        new webpack.LoaderOptionsPlugin({
          minimize: true
        })
    ])
}
