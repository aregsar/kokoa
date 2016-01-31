module.exports = {
    entry:"./app/assets/js/main.jsx",
    output: {
        path: __dirname + "/public/bundles",
        filename: "bundle.js",
        publicPath: "http://localhost:8080/public/bundles"
    },
    resolve: {
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react','es2015','stage-0']
                } 
            }
        ]
    }   
};