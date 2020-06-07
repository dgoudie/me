const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = app => {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: process.env.PROXY,
      changeOrigin: true
    })
  );
};
