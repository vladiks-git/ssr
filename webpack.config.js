const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        watchFiles: ['src/**/*.php', 'public/**/*'],
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}