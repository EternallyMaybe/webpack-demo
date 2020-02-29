const path = require('path');
const Webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        vendor: ['react', 'react-dom', 'react-redux', 'redux']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../', 'dll'),
        library: '[name]_[hash]'
    },
    plugins: [
        new Webpack.DllPlugin({
            path: path.resolve(__dirname, '../', 'dll/[name]-manifest.json'),
            name: '[name]_[hash]'
        })
    ]
}