const path = require('path');
const config = require('../config');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { resolve } = require('./utils');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [
            {
                test: resolve('src/globals.js'),
                use: 'exports-loader?file,parse=helpers.parse' // 注意：中间不可以有空格 否则不识别
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 1000,
                    name: config.prod.assetsPath("img/[name].[hash:7].[ext]")
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: config.prod.assetsPath("fonts/[name].[hash:7].[ext]")
                }
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin({
            complete: '👣',
            clear: false
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            _: 'lodash'
            // join: ['lodash', 'join']
        }),
    ],
};