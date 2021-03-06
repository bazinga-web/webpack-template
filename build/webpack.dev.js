const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const config = require('../config/index')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: config.dev.assetsRoot,
        filename: config.dev.assetsPath('js/[name].[hash].js'),
        chunkFilename: config.dev.assetsPath('js/[name].[hash].js')
    },
    devtool: config.dev.devtool,
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: resolve('favicon.ico'),
            title: 'My Webpack Template Dev',
        }),
    ]
});