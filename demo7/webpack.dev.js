const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        extension: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 8080,
        historyApiFallback: true,
        open: 'Chrome',
        before: function(app, server) {
            app.get('/api/path', function(req, res) {
                res.json({ custom: 'response'} );
            })
        },
        after: function(app, server) {
            // console.log(app);
            // console.log(server);
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {'^/api': ''},
                changeOrigin: true,
                secure: true
            }
        }
    }
})