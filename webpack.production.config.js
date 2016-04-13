var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var node_modules_dir = path.resolve(__dirname, 'node_modules')

var config = {
    entry: {
        app: path.resolve(__dirname, 'app/app.js'),
        mobile: path.resolve(__dirname, 'app/mobile.js'),
        vendors: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            exclude: [node_modules_dir],
            loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
            query: {
                //添加两个presents 使用这两种presets处理js或者jsx文件
                presets: ['es2015', 'react']
            }
        }, { //css
                test: /\.css$/, // Only .css files
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                // loader: 'style!css' // Run both loaders
            }, { // LESS
                test: /\.less$/,
                loader: 'style!css!less'
            }, { // SASS
                test: /\.scss$/,
                loader: 'style!css!sass'
            }, { //图片
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin("app/css/app.css")
    ]
}

module.exports = config