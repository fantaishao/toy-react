const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        minimize: false
    },
    entry: './main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [[
                                "@babel/plugin-transform-react-jsx",
                                { pragma: 'ToyReact.createElement' } 
                        ]]
                    }
                }
            }
        ]
    }
}
