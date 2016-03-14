var webpack = require('webpack'),
       path = require('path');

module.exports = {
    context: __dirname + '/client',
    entry: {
        app: './assets/js/app.js',
        // vendor: ['angular']  
    },
    output: {
        path: __dirname + '/build/assets/js',
        filename: 'app.bundle.js'
    },
   // plugins: [
   //      new webpack.optimize.CommonsChunkPlugin( chunkName= "vendor", /* filename= */"vendor.bundle.js")
   // ]
};