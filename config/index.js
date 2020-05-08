const path = require('path');

const assetsPath = function (_path) {
    const assetsSubDirectory = "static"
    return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
    dev: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        devtool: 'cheap-eval-source-map',
        assetsPath,
    },
    prod: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        devtool: '',
        assetsPath,
        sourceMap: false,
        devtool: "source-map",
    }
}