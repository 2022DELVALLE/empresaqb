const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProd ? 'production' : 'development',

    entry: './src/index.js',

    output: {
        filename: isProd ? 'bundle.[contenthash].js' : 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true, // Limpia dist automáticamente (Webpack 5)
    },

    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@portals': path.resolve(__dirname, 'src/portals/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@context': path.resolve(__dirname, 'src/context/'),
        },
    },

    module: {
        rules: [
            // JS / JSX con Babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },

            // HTML
            {
                test: /\.html$/,
                use: 'html-loader',
            },

            // CSS + SCSS → MiniCssExtract (prod) / style-loader (dev)
            {
                test: /\.(css|scss)$/i,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },

            // IMÁGENES moderno Webpack 5 (SIN file-loader)
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[hash][ext][query]',
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),

        new MiniCssExtractPlugin({
            filename: isProd ? '[name].[contenthash].css' : '[name].css',
        }),
    ],

    devServer: {
        historyApiFallback: true,   // Soporte para React Router
        static: path.join(__dirname, 'public'),
        compress: true,
        hot: true,
        port: 3000,
    },
};
