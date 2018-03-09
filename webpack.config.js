const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        // app: ['webpack-hot-middleware/client?reload=true', APP_PATH]
        app: './src/index.js'
        // "webpack-hot-middleware/client"
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        hot: true
    },
    plugins: [
        new ExtractTextPlugin({filename: "[name].[hash].css"}),
        new HtmlWebpackPlugin({
            template: './src/index.template.html',
            title: '学习webpack'
        }),
        new OpenBrowserPlugin({url: 'http://localhost:8088'})
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vender'
        // }),
        // new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }, {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'less-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(jpg|svg|png|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};