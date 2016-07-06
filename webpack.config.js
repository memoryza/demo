/**
 * @file webpack
 * @author memoryza(jincai.wang@foxmail.com)
 */
var webpack = require('webpack');
var path = require('path');
var config = require('./util/common');
var entry = {
    main: config.abs('htdocs/js/main.js')
};
module.exports = {
    context: config.srcPath,
    entry: entry,
    output: {
        path: config.buildPath,
        filename: 'js/[name].js',
        publicPath: config.buildPath
    },
    resolve: {
        alias: {
            src: config.srcPath
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: path.join(config.srcPath, 'js'),
            loader:'babel',
            query: {
              presets: ['es2015']
            }

        }]
    },
    plugins: [
        // new webpack.opimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false
        //     }
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
  //           name: "vendor",
  //           filename: "vendor.js"
  //       })
    ]
}