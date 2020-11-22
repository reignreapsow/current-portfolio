const path = require('path');


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },


    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, './public'),
        compress: true, 
        port: 9000
    }
}