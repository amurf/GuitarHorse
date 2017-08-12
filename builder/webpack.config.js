var path    = require('path')
var webpack = require('webpack')

var sassIncludes = [
  'node_modules/font-awesome/scss',
  'node_modules/bootstrap/scss',
];

module.exports = {
  cache: true,
  entry: {
    app: '/build/src/app.js',
    vendor: [
      "vue",
      "vue-router",
      "axios",
      "bootstrap-vue",
      "vuedraggable",
    ],
  },
  output: {
    path: '/build/app',
    publicPath: '/',
    filename: 'js/[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
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
              {
                loader: "sass-loader",
                options: {
                  includePath: sassIncludes,
                },
              },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: [
                    '/build/src/scss/_variables.scss',
                    '/build/src/scss/_bootstrap-used-in-components.scss',
                  ],
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
          {
            loader: "sass-loader",
            options: {
              includePath: sassIncludes,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
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
      shared: '/build/shared/',
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
