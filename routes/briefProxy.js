const { createProxyMiddleware } = require('http-proxy-middleware');
const jwtMiddleware = require('../jwtMiddleware');
const checkRole = require('../checkRole');
const express = require('express');

const router = express.Router();

router.get('/api/briefs', jwtMiddleware, checkRole(['admin', 'formateur', 'apprenant']), createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true,
  pathRewrite: { '^/api/briefs': '' }
}));

router.use('/api/briefs', jwtMiddleware, checkRole(['admin', 'formateur']), createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true,
  pathRewrite: { '^/api/briefs': '' }
}));

module.exports = router; 