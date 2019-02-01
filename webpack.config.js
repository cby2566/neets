const path =require('path');

//插件：使导出js文件自动生成html模板（html-webpack-plugin）
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader');




module.exports ={
	//配置入口、出口
	entry:{
		main:'./src/index.js'
	},
	
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'js/[name][hash:5].js'
	},
	mode:'development',
	//加载器配置
	module:{
		rules:[
			{
				test:/\.vue$/,
				use:{loader:'vue-loader'}
			},
			{
				test:/\.js$/,
				exclude:path.resolve(__dirname,'./node_modules'),
				use:{
					loader:'babel-loader',
					options:{
						presets:['env','stage-3']
					}
				}
			},
			{
                test:/\.css$/,
                loader:['style-loader','css-loader']
			},
			{
                test:/\.scss$/,
                loader:['style-loader','css-loader','sass-loader']
			},
			{
                test:/\.(jpe?g|png|gif|bmp)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        // 设置转换base64编码的临界值
                        limit:1000,
                        name:'img/[name].[hash:7].[ext]',
                        // outputPath: './assets',
                        // publicPath: '/img'
                    }
                }
            }
		]
	},
	//虚拟服务器
	devServer:{
        contentBase:'./dist/',
        port:8080,
        // open:true
        host:'0.0.0.0'//localhost,127.0.0.1,ip地址都可以访问
    },
	
	
	
	//插件配置
	plugins:[ 
	new HtmlWebpackPlugin({template:'./src/home.html'}),
	new VueLoaderPlugin(),
		//vw移动端适配
	
	]
}