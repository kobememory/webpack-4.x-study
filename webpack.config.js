const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  // 导入在内存中生成html页面的插件

// 创建一个HtmlWebpackPlugin插件的实例
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), // 源文件
    filename: 'index.html'  // 生成的内存中首页的名称
})

// 向外暴露一个打包的配置文件
module.exports = {
    mode: 'development',    // development/production
    // 在webpack 4.x 中，约定默认的打包入口路径 src/index.js

    plugins: [
        htmlPlugin
    ],

    // webpack默认只能打包处理.js后缀类型的文件，像.png .vue等无法主动处理，需要配置第三方loader
    module: {   // 所有第三方模块的配置规则
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],   // 表示配置的这几个类型文件后缀名可以省略，不配置默认省略.js .json

        // 配置通过别名来把原导入路径映射成一个新的导入路径 
        // import Hello from '@/components/Hello 导入时，实际上被 alias 等价替换成了import Hello from '项目绝对路径/src/components/Hello'
        alias: {
            '@': path.join(__dirname, './src')
        }
    }
}