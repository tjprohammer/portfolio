const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: { path: path.join(__dirname, 'build'), filename: 'index.bundle.js' },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    devServer: { static: path.join(__dirname, 'src'), port: 5000 },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
};
