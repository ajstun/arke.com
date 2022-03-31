const path = require('path')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    {loader: "style-loader"},
                    {loader: "sass-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        compress: true, 
        port: 3000
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"

    }
}