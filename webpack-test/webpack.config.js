var webpack = require('webpack');
var path = require('path');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {  

    entry: './src/main.js',
    output: {
        filename: 'main.js',   
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/, // Un regex que selecciona .sass y .scss
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: "babel-loader"
            }
        ]
    },
    mode: 'none',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
          })    
    ] 
};


if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
         new webpack.optimize.UglifyJsPlugin()
    );
}