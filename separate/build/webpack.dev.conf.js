const merge = require("webpack-merge");
const webpack = require("webpack");

const baseConfig = require("./webpack.base.conf");
const paths = require("./paths");

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: paths.PATH_DIST,
        hot: true,
        inline: true,
        open: true,
        host: "localhost",
        port: "8000",
        proxy: {
            '/': {
                target: 'http://s02.mifile.cn',
                changeOrigin: true
            }
        }
        
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});