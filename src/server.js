const express = require('express')
const path = require('path')
const fs = require('fs')
const cors = require('cors')
const appRouter = require('./modules/index.js')
const checkToken = require('./middlewares/checkToken.js')

const app = express()

app.use(cors())
app.use(express.json())
// app.use(checkToken)
app.use(express.static(path.join(__dirname, './uploads')))
app.use(express.static(path.join(__dirname, './pdfs')))

app.use((req,res,next) =>{
    try {
      next()
    } catch (error) {
        if(error.status === 500){
             fs.writeFileSync(path.join(process.cwd(),'src','error.txt',error.message + '--' + new Date()))
        }
    }
})

app.use(appRouter)

app.listen(process.env.PORT || 5000, () => console.log('server run'))
