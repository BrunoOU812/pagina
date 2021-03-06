const path = require('path');
const postCSSPlugins =[
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('postcss-mixins'),
    require('autoprefixer')
];
module.exports={
    entry:'./app/assets/scripts/App.js',
    output:{
        filename:'bundled.js',
        path:path.resolve(__dirname,'app')
    },
    module:{
        rules:[
            {
                test:/\.css/i,
                use:['style-loader','css-loader',{loader:'postcss-loader',options:{plugins:postCSSPlugins}}]
            }
        ]
    },
    mode:'development',
    devServer:{
        before:function(app,server){
            server._watch('./app/**/*.html')
        },
        contentBase:path.join(__dirname,'app'),
        hot:true,
        port:3000,
        host:'0.0.0.0'
    }
    

}