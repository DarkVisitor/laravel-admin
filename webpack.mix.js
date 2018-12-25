let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
        output: {
            chunkFilename: 'js/[name].js'     // 设置 vue-router 懒加载分块打包文件生成路径 chunkhash:5 生成文件hash解决浏览器本地缓存
        },
        resolve: {
            /* 配置路径别名 */
            alias: {
                '@js': path.resolve('resources/js'),
                '@sass': path.resolve('resources/sass')
            }
        }
    })
    .js('resources/js/app.js', 'public/js')
    .extract([
        'vue', 
        'vue-router', 
        'vuex', 
        'iview', 
        'js-cookie', 
        'es6-promise', 
        'axios', 
        'jquery',
        'popper.js',
        'lodash'
    ])
    .sass('resources/sass/app.scss', 'public/css');

if (mix.inProduction()){
    mix.version();
}