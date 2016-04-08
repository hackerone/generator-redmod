var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname),
        publicPath: '/src/',
        filename: 'app.js',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        devFlagPlugin
    ],
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.jsx$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style', 'css?modules', 'autoprefixer', 'sass'] },
            { test: /\.svg$/, loader: 'file-loader' }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js', '.json']
    }
};