/* eslint-disable no-undef */
const path = require("path"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = ["index"];

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.js`;
        return config;
    }, {}),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [].concat(
        pages.map(
            page =>
                new HtmlWebpackPlugin({
                    inject: true,
                    template: `./src/${page}.html`,
                    filename: `${page}.html`,
                    chunks: [page],
                })
        )
    ),
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", { targets: "defaults" }]],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-runtime",
                        ],
                    },
                },
            },
        ],
    },
};
