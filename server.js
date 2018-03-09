const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
// const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require("./webpack.config.js");

const app = express();
const compiler = webpack(webpackConfig);
const port = "8088";

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    noInfo: false,
    reload: true,
    stats: { colors: true }
}));

// app.use(webpackHotMiddleware(compiler));

app.listen(port, function () {
    console.log(`服务启动成功，端口号：${port}！`);
});
