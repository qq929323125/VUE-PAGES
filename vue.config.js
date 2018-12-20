const path = require('path')
const name=require('./config/proName').name

module.exports = {
    //指定打包后的文件夹
    outputDir:`dist/${name}`,

    //配置模板和入口
    pages:{
        index:{
            entry:`./src/${name}/main.js`,
            template:`./public/${name}/index.html`,
            filename:'index.html'
        }
    },

    //public文件的copy
    chainWebpack: config => {
        config
            .plugin('copy')
            .use(require.resolve('copy-webpack-plugin'),[
                [
                    {
                        from:`./public/${name}`,
                        to:'./'
                    },
                    {
                        from:'./public/js',
                        to:'./js'
                    },
                    {
                        from:'./public/css',
                        to:'./css'
                    },
                    {
                        from:'./public/img',
                        to:'./img'
                    }
                ],
            ])
    },

    //cdn加速 打包时忽略的依赖
    configureWebpack:{
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'iview': 'iview',
        }
    },

    //公共的less变量
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
            path.resolve(__dirname, `./src/${name}/assets/css/base.less`),
        ]
      }
    },

    css: {
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            less: {
                javascriptEnabled: true
            }
        }
    },
    

    //不生成.map文件
    productionSourceMap:false,
}
