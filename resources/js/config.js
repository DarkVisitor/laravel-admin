/**
 * Defines the API route we are using.
 */

var app_url = '';
var api_url = '';

switch( process.env.NODE_ENV ){
    case 'development':
        app_url = 'http://laravel-admin.test';
        api_url = 'http://laravel-admin.test/api/v1';
        break;
    case 'production':
        app_url = 'https://www.hanyingquan.com';
        api_url = 'https://www.hanyingquan.com/api/v1';
        break;
}

export const APP_CONFIG = {
    APP_URL: app_url,
    API_URL: api_url,
}
