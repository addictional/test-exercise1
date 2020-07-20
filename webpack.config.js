const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mockServer = require('./server.js');

mockServer();

module.exports = {
    mode : "development",
    entry : ['babel-polyfill',path.resolve('./src/index.js')],
    resolve : {
        extensions: ['.js'],
    },
    output: {
        path: path.resolve(__dirname , 'dist'),
        path: path.resolve(__dirname,"dist"),
        filename: 'index_bundle.js'
    },
    devServer: {
    
        contentBase: path.join(__dirname, 'dist'),
        publicPath: "/",
        compress: true,
        port: 8080,
        open : true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/zones/*': {
              target: 'http://localhost:3020',
              secure : false
            },
          },
    },
    module : {
        rules : [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(scss|less|sass)$/i,
                use: [
                  "style-loader", 
                  'css-loader', 
                  'sass-loader', 
                ],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        template: path.resolve(__dirname + "/src/index.html"),
        inject: 'body'
    })]
}