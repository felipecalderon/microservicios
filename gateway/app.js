const express = require('express')
const morgan = require('morgan')
const {createProxyMiddleware} = require('http-proxy-middleware')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use('/characters', createProxyMiddleware({
    target: 'http://localhost:4001',
    changeOrigin: true
}))

app.listen(4000, () => {
    console.log('gateway funcionando en servidor 4000');
})