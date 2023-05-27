const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://leslies-server-m6k7.onrender.com', // Replace with your Render host URL
      changeOrigin: true,
    })
  );
};
