const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const utils = require('./utils');

module.exports = {
    entry: {
        index: utils.resolve('src/index.js')
    },
    output: {
        filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash:8].js'),
        path: utils.resolve('dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            '@': utils.resolve('src/')
        }
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: utils.assetsPath('fonts/')
                        } 
                    }
                ]
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: utils.assetsPath('images/'),
                            limit: 10240
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: utils.resolve('static'), to: utils.assetsPath('') }
        ]),
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('/css/[name].[contenthash:8].css'),
            chunkFilename: utils.assetsPath('/css/[id].[contenthash:8].css')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: utils.resolve('public/index.html'),
            inject: 'body',
            chunks: ['index'],
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new Webpack.DllReferencePlugin({
            manifest: utils.resolve('dll/vendor-manifest.json')
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath: utils.resolve('dll/vendor.dll.js'),
            outputPath: utils.assetsPath('js/'),
            publicPath: utils.assetsPath('js/')
        })
    ]
}