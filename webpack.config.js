var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        index: './index.jsx' // Appʼs entry point
    },
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot-loader','babel-loader']
            },

            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
             ]
    },
    devServer: {
        contentBase: "./public",
        noInfo: true, //  --no-info option
        hot: true,
        inline: true
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};
