let webpack = require('webpack');
let HtmlPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let rules = require('./webpack.config.rules')();
let path = require('path');

rules.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
    })
});

module.exports = {
    entry: {
        index: './src/index.js'
    },
    devServer: {
        overlay: true
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('dist'),
    },
    devtool: 'source-map',
    module: { rules },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlPlugin({
            title: 'Geo Review',
            template: 'index.hbs',
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
