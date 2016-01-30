module.exports = {
    entry:"./app/assets/js/main.jsx",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel-loader"}
        ]
    }   
};