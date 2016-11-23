module.exports = {
    entry:'./src/js/index.js',
    output:{
        path:'./react',
        publicPath:'http://localhost:8080/react',
        filename:'index.js'
    },
    module:{ 
     loaders:[
       {test:/.js$/,loader:'babel',query:{presets: ['react','es2015'] },exclude:/node_modules/},
       {test:/.less$/,loader:'style!css!less'},
       {test:/.(jpg|png|gif)$/,loader:'url?limit=8129'}
     ]
    }
}