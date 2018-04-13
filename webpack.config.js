const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
        
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}