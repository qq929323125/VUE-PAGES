const path = require('path')
const proName=require('./config/proName')
const name=proName.name

module.exports = {
    outputDir:`dist/${name}`,

    pages:{
        index:{
            entry:`./src/${name}/main.js`,
            template:`./public/${name}/index.html`,
            filename:'index.html'
        }
    },

    chainWebpack: config => {
        config
            .plugin('copy')
            .use(require.resolve('copy-webpack-plugin'),[
                [
                    {
                        from:`./public/${name}`,
                        to:'./'
                    },
                ],
            ])
    },

    configureWebpack:{
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
            path.resolve(__dirname, `./src/${name}/assets/css/base.less`),
        ]
      }
    },

    productionSourceMap:false,
}
