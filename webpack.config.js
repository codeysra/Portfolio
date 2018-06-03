const path= require("path");

module.exports = {
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:"bundle.js"
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.(png|jpeg|jpg)$/,
            use: [
             { loader: 'url-loader', options: { limit: 8192 } } ,
             { loader: 'file-loader', options: { limit: 8192 } }
            ]
          }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,'public'),
        historyApiFallback:true

     }
};