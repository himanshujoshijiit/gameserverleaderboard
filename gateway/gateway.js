const express = require('express');
const proxy = require('http-proxy-middleware')

const {getServiceUrl} = require('../utils/serviceDiscovery')

const app = express();
app.use(express.json());

// Proxy CMS requests

app.use('/cms',proxy.createProxyMiddleware({
  target:getServiceUrl('cms'),
  changeOrigin: true
}));

// Proxy Chat-Social requests

app.use('/chatsocial',proxy.createProxyMiddleware({
   target:getServiceUrl('chatsocial'),
   changeOrigin:true
}));

// Proxy Leaderboard requests

app.use('/leadeboard',proxy.createProxyMiddleware({
   target:getServiceUrl('leaderboard'),
   changeOrigin: true
}));

app.listen(3004,()=>{
    console.log('API Gateway running on http://localhost:3000');
})




