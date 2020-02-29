const path = require('path');
const merge = require('webpack-merge');
const apiMocker = require('mocker-api');
const common = require('./webpack.base.conf');
const utils = require('./utils');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: utils.resolve('dist'),
        compress: true,
        port: 8080,
        historyApiFallback: true,
        open: 'Chrome',
        before: function(app, server) {
            apiMocker(app, utils.resolve('mocker/index'))
        },
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:3000',
        //         pathRewrite: {'^/api': ''},
        //         changeOrigin: true,
        //         secure: true
        //     }
        // }
    }
})