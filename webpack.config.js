const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
      static: './dist',
        compress: true,
        port: 9000,
        hot: true,
        open: true,
        watchFiles: ['src/**/*'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node-modules/,
            },
            {
                test: /\.(html)$/,
                use: 'html-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
}
