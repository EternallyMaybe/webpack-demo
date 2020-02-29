const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: path.resolve(__dirname, './loaders/myLoader/index.js') + '?params=13121',
                    }
                ]
            }
        ]
    }
}