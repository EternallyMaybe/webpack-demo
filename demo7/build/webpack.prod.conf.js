const path = require('path');
const merge = require('webpack-merge');
const PurifyCSS = require('purifycss-webpack');
const glob = require('glob-all');
const utils = require('./utils');
const common = require('./webpack.base.conf');
const { build } = require('./config');

const webpackConfig = {
    mode: 'production',
    plugins: [
        new PurifyCSS({
            paths: glob.sync([
                utils.resolve('dist/*.html'),
                utils.resolve('dist/js/*.js')
            ])
        })
    ]
}

if (build.happypack.open) {
    const Happypack = require('happypack');
    const ThreadPool = Happypack.ThreadPool({ size: build.happypack.threadPoolSize || 2 });
    
    if (!webpackConfig.module) webpackConfig.module = {};

    if (!webpackConfig.module.rules) webpackConfig.module.rules = [];

    webpackConfig.module.rules.push({
        test: /\.js/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=happybabel'
    });

    webpackConfig.plugins.push(new Happypack({
        id: 'happybabel',
        threadPool: ThreadPool,
        cache: true,
        loaders: ['babel-loader']
    }));
}

if (build.openPWA) {
    // const { GenerateSW } = require('workbox-webpack-plugin');
    // console.log('--------');
    // console.log(GenerateSW);
    // console.log('-------------');
    // webpackConfig.plugins.push(new WorkWebpackPlugin.GenerateSW({
    //     clientClaim: true,
    //     skipWaiting: true
    // }));
}

if (build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}
  
module.exports = merge(common, webpackConfig);