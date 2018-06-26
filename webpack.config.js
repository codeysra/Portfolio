const path= require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {

    const isProduction = env === 'production';
    
    const CssExtract = new MiniCssExtractPlugin();

    return {
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
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                       
                      }
                    },
                    {
                      loader:"css-loader",
                      options:{
                        sourceMap:true
                      }   
                    },{
                        loader:"sass-loader",
                        options:{
                          sourceMap:true
                        }
                    }
                    
                ]
               
            },{
                test: /\.(png|jpeg|jpg)$/,
                use: [
                 { loader: 'file-loader', options: { name: '[path][name]-[hash:8].[ext]' } }
                ]
              }
            ]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer:{
            contentBase: path.join(__dirname,'public'),
            historyApiFallback:true
    
        },
        plugins:[
            CssExtract
        ]
    }
}

 