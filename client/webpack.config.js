const path = require('path')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.s[ac]ss$/i,
                
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },

            {

                test: /\.(svg)$/i,
                use: { 
                    loader: "url-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
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