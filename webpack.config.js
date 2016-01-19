module.exports = {
        entry: './src/demoEntry.js',
        output: {
            path: __dirname+"/demo",
            filename: 'demo.js'
        },
        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }]
        }
    };
