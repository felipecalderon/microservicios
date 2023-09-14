const express = require('express')
const morgan = require('morgan')
const {createProxyMiddleware} = require('http-proxy-middleware')

const app = express()
const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(morgan('dev'))

app.use('/characters', createProxyMiddleware({
    target: 'http://characters:4001',
    changeOrigin: true
}))

app.use('/planets', createProxyMiddleware({
    target: 'http://planets:4002',
    changeOrigin: true
}))

app.use('/films', createProxyMiddleware({
    target: 'http://films:4003',
    changeOrigin: true
}))

app.listen(PORT, () => {
    console.log(`gateway funcionando en servidor ${PORT}`);
})