const express = require('express')
const path = require('path')

const cors = require('cors')
const appRouter = require('./modules/index.js')
const checkToken = require('./middlewares/checkToken.js')
const app = express()

app.use(cors())
app.use(express.json())
app.use(checkToken)
app.use(express.static(path.join(__dirname,'./uploads')))

app.use(appRouter)


app.listen(process.env.PORT||5000,() => console.log('server run'))