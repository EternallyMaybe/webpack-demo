const path = require('path');
const MyPlugins = require('./plugins/myPlugins');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
        // index1: path.resolve(__dirname, './src/index1.js')
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new MyPlugins({
            params: 'params'
        })
    ]
}