const PurifyCSS = require('purifycss-webpack');
const glob = require('glob-all');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new PurifyCSS({
            paths: glob.sync([
                path.resolve(__dirname, './dist/*.html'),
                path.resolve(__dirname, './dist/js/*.js')
            ])
        })
    ]
})