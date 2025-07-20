const { createProxyMiddleware } = require('http-proxy-middleware');
const jwtMiddleware = require('../jwtMiddleware');
const checkRole = require('../checkRole');

module.exports = [
  '/api/apprenants',
  jwtMiddleware,
  checkRole('apprenant'),
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: { '^/api/apprenants': '' }
  })
]; 