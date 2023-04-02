const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ReactRefreshTypeScript = require('react-refresh-typescript')
const CopyPlugin = require('copy-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === 'development'
const IS_PROD = NODE_ENV === 'production'

function setupDevtool() {
    if (IS_DEV) return 'eval'
    if (IS_PROD) return false
}

const GLOBAL_STYLE_REGEXP = /\.global\.(sa|sc|c)ss/

module.exports = {
    resolve: {
        //  modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        plugins: [new TsconfigPathsPlugin()],
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        assetModuleFilename: 'img/[name][ext]',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            getCustomTransformers: () => ({
                                before: [
                                    IS_DEV && ReactRefreshTypeScript(),
                                ].filter(Boolean),
                            }),
                            transpileOnly: IS_DEV,
                        },
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName:
                                    '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [
                                    path.resolve(
                                        __dirname,
                                        './src/assets/scss'
                                    ),
                                ],
                            },
                        },
                    },
                ],
                exclude: GLOBAL_STYLE_REGEXP,
            },
            {
                test: GLOBAL_STYLE_REGEXP,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [
                                    path.resolve(
                                        __dirname,
                                        './src/assets/scss'
                                    ),
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|woff|woff2|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]',
                },
            },
        ],
    },
    devtool: setupDevtool(),
    plugins: IS_DEV
        ? [
              new HtmlWebpackPlugin({
                  template: path.resolve(
                      __dirname,
                      './src/assets/template/index.html'
                  ),
              }),
              new SpriteLoaderPlugin({
                  plainSprite: true,
                  spriteAttrs: {
                      id: 'icons',
                  },
              }),
              new ReactRefreshWebpackPlugin(),
              new CopyPlugin({
                  patterns: [
                      {
                          from: path.resolve(
                              __dirname,
                              './src/assets/img/products'
                          ),

                          to: 'img',
                      },
                  ],
              }),
          ]
        : [],
    devServer: {
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: IS_DEV,
    },
}
