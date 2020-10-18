const webpackBase = require('./webpack.base.conf');

module.exports = {
    // 配置源码显示方式
    devtool: 'eval-source-map',
    mode: 'development',
    entry: {
        app: ['./src/index.jsx']
    },
    resolve: webpackBase.resolve,
    module: webpackBase.module,
    optimization: webpackBase.optimization,
    plugins: [
        webpackBase.plugins.html,
        webpackBase.plugins.miniCssExtract,
        webpackBase.plugins.optimizeCssAssets,
        webpackBase.plugins.progressBarPlugin,
        webpackBase.plugins.ContextReplacementPlugin,
        webpackBase.plugins.AntdDayjsWebpackPlugin
    ]
};
