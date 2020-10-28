const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

if(mix.inProduction()) {
    mix.version();
}
mix.options({
        hmrOptions: {
            host: 'dev.ak-wear',  // site's host name 
            port: 8080,
        }
    });
mix.webpackConfig({
        // add any webpack dev server config here
        devServer: { 
            proxy: {
                host: '0.0.0.0',  // host machine ip
                port: 8080,
            },
            watchOptions:{
                aggregateTimeout:200,
                poll:5000
            },

        }
    });
mix.autoload({ 
        'jquery': ['$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery'] 
    });
mix.sass('resources/css/app.scss', 'public/css')
    .js('resources/js/app.js', 'public/js');