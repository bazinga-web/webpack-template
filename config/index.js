const path = require('path');

const assetsPath = function (_path) {
    const assetsSubDirectory = "static"
    return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
    dev: {
        devtool: 'cheap-eval-source-map',
    },
    prod: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        devtool: '',
        assetsPath,
        sourceMap: false,
        devtool: "source-map",
    }
}