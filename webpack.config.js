module.exports = {
        entry: './src/Spirograph.js',
        output: {
            path: __dirname+"/dist",
            filename: 'Spirograph.js',
            libraryTarget: 'umd',
            library: 'Spirograph'
        },

        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }]
        }
    };
