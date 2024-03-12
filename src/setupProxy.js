const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        "/shop/master/src/**",
        createProxyMiddleware( {
            target: 'https://raw.githubusercontent.com/Meerkat1030',
            changeOrigin: true
        })
    )

};