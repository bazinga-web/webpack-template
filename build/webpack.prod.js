const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const config = require('../config/index');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { resolve } = require('./utils');


module.exports = merge(common, {
    mode: 'production',
    output: {
        path: config.prod.assetsRoot,
        filename: config.prod.assetsPath('js/[name].[chunkhash:8].js'),
        chunkFilename: config.prod.assetsPath('js/[name].[chunkhash:8].js')
    },
    devtool: config.prod.sourceMap ? config.prod.devtool : false,
    optimization: {
        // 值 "single" 会创建一个在所有生成 chunk 之间共享的运行时文件。此设置是如下设置的别名：runtimeChunk: { name: 'runtime'}
        runtimeChunk: 'single', // 提取引导模板
        splitChunks: {
            // chunks: 'all'
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/, // 提取第三方库
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        // 不论是否添加任何新的本地依赖，对于前后两次构建，vendor hash 都应该保持一致
        // 解决由于解析顺序发生变化，ID 也会随之改变的问题
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            favicon: resolve('favicon.ico'),
            title: 'My Webpack Template Prod',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            }
        }),
        // 若设置optimization.runtimeChunk: true 时，webpack 会添加一个只包含运行时(runtime)额外代码块到每一个入口。
        // 这个需要看场景使用，会导致每个入口都加载多一份运行时代码。其实打包生成的 runtime.js 
        // 非常的小，gzip 之后一般只有几 kb，但这个文件又经常会改变，导致我们每次都需要重新请求它，
        // 它的 http 耗时远大于它的执行时间了，所以建议不要将它单独拆包，而是将它内联到 index.html 之中。
        new ScriptExtHtmlWebpackPlugin({
            //`runtime` must same as runtimeChunk name. default is `runtime`
            // 注意一定要在 HtmlWebpackPlugin 之后引用
            // inline 的 name 和 runtimeChunk 的 name 保持一致
            inline: /runtime\..*\.js$/,
        }),
    ]
});