const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isProd = mode === 'production';

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: isProd ? '[name].[contenthash:8].js' : 'index.bundle.js',
        publicPath: '/',
        clean: true
    },

    mode,
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: { static: path.join(__dirname, 'src'), port: 5002, historyApiFallback: true },

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
                test: /\.(jpg|jpeg|png|gif|svg|avif|webp|woff2?)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name].[hash:8][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            favicon: './public/favicon.ico',
            minify: isProd
                ? {
                      collapseWhitespace: true,
                      removeComments: true,
                      removeRedundantAttributes: true,
                      useShortDoctype: true
                  }
                : false
        }),
        {
            apply(compiler) {
                compiler.hooks.afterEmit.tap('CopyPublicSeoFiles', () => {
                    const outDir = path.join(__dirname, 'build');
                    for (const file of ['robots.txt', 'sitemap.xml', 'og-image.jpg', '404.html']) {
                        fs.copyFileSync(
                            path.join(__dirname, 'public', file),
                            path.join(outDir, file)
                        );
                    }
                });
            }
        }
    ]
};
