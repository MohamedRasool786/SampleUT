'use strict'

var path = require('path')
var webpack = require('webpack')

module.exports = {
entry: './src/main.js',
// output: {
//   path: path.resolve(__dirname, './dist'),
//   publicPath: '/dist/',
//   filename: 'build.js'
// },
resolve: {
alias: {
'vue$': 'vue/dist/vue.esm.js',
 '@': path.resolve(__dirname, 'src')
 }
 },
 module: {
 rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
     {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
    },
    {
     test: /\.(png|jpg|gif|svg)$/,
     loader: 'file-loader',
     options: {
      name: '[name].[ext]?[hash]'
      }
     },
    {
     test: /\.css$/,
     loader: [ 'style-loader',  'css-loader' ]
   }
]
},
devServer: {
historyApiFallback: true,
noInfo: true
},
performance: {
hints: false
},
devtool: '#eval-source-map'
}


// test specific setups
if (process.env.NODE_ENV === 'test') {
module.exports.externals = [require('webpack-node-externals')()]
module.exports.devtool = 'eval'
devtool: 'inline-cheap-module-source-map'
}
