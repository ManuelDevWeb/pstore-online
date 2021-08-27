const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotEnv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

// Configuración de los elementos de webpack
module.exports = {
    // Detección de errores con referencia a sus archivos y respectivas lineas
    devtool: 'source-map',
    // Punto de entrada, archivo principal
    entry: './src/index.js',
    // Donde se guardara el compilado del proyecto
    output: {
        // Crea la carpeta dist en la carpeta donde estoy en mi sistema operativo
        path: path.resolve(__dirname, 'dist'),
        // Nombre del archivo resultante
        filename: 'bundle.js',
        publicPath: '/',
    },
    // Extensiones que utilizaremos para preparar nuestro compilado
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // Modulo con reglas y particularidades para la construcción de nuestros recursos
    module: {
        rules: [{
                // Expresión regular para identificar archivos js
                test: /\.(js|jsx)$/,
                // Elemento que excluiremos
                exclude: /node_modules/,
                // Indicando que loader usaremos
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                // Expresión regular para identificar archivos html
                test: /\.html$/,
                // Indicando que loader usaremos
                use: {
                    loader: 'html-loader',
                },
            },
            {
                // Expresión regular para identificar archivos css y sass
                test: /\.s(a|c)ss$/,
                // Indicando que loader usaremos
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    // Indicamos los plugins que vamos a utilizar
    plugins: [
        // Plugin de HTML
        new HtmlWebpackPlugin({
            // Punto de entrada, ubicación de nuestro archivo HTML
            template: './public/index.html',
            // Nombre del archivo al salir a producción
            filename: './index.html',
        }),
        // Plugin de CSS
        new MiniCssExtractPlugin({
            // Nombre del archivo al salir a producción
            filename: 'assets/[name].css',
        }),
        // Plugin dotenv
        new DotEnv(),
        // Plugin Copy
        new CopyPlugin({
            patterns: [
                { from: 'public/manifest.json', to: '' },
                { from: 'public/service-worker.js', to: '' },
                { from: 'public/icon.png', to: 'assets' },
            ],
        }),
    ],
    // Configuración de devServer, para crear un servidor de trabajo local
    devServer: {
        // El path es la unión de la carpeta donde estoy en mi sistema operativo y la carpeta dist (Donde se envia a producción proyecto)
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        open: true,
        port: 3005,
    },
};