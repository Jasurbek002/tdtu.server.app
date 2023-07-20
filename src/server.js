const express = require('express')
const path = require('path')
const fs = require('fs')
const cors = require('cors')
const appRouter = require('./modules/index.js')



const app = express()
app.use(express.static(path.join(__dirname, './uploads')))
app.use(express.static(path.join(__dirname, './pdfs')))
app.use(express.static(path.join(__dirname, './pdf')))


app.use(cors("*"))
app.use(express.json())

const checkToken = require('./middlewares/checkToken.js')


app.use((req,res,next) =>{
    try {
      next()
    } catch (error) {
        if(error.status === 500){
             fs.writeFileSync(path.join(process.cwd(),'src','error.txt',error.message + '--' + new Date()))
        }
    }
})

// app.use(checkToken)
app.use("/v1",appRouter)

module.exports = app

