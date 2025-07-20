const { createProxyMiddleware } = require('http-proxy-middleware');
const jwtMiddleware = require('../jwtMiddleware');
const checkRole = require('../checkRole');

module.exports = [
  '/competence',
  jwtMiddleware,
  checkRole(['admin', 'manager']),
  createProxyMiddleware({
    target: 'http://localhost:3004',
    changeOrigin: true,
    pathRewrite: { '^/competence': '' }
  })
]; 