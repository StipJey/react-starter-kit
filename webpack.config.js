webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


webpackConfig = {
    context: __dirname,
    entry: {
        bundle: './src/app.js',
    },
    output: {
        filename: '[name].js',
        path: './build',
        library: '[name]',
        publicPath: '/build'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ]
};
module.exports = webpackConfig;