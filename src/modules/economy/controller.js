const { InternalServerError } = require('../../utils/error')
const model = require('./model.js')


async function GET(req, res, next) {
    try {
        let getData = await model.GET()
        if(getData){
            res.status(200).json({
                status:200,
                message:'successfuly!',
                data:getData
            })
        }
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}

async function POST(req,res,next){
    try {
        let postData = await model.POST(res.body)
        if(postData){
            res.status(201).json({
                status:201,
                message:'data add',
                data:postData
            })
        }
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}

async function PUT(req,res,next){
    try {
        let putData = await model.PUT(req.body,req.params)
        if(putData){
            res.status(200).json({
                status:200,
                message:'data updated!',
                data:putData
            })
        }
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}

async function DELETE(req,res,next){
    try {
        let deleteData = await model.DELETE(req.params)
        if(deleteData){
            res.status(200).json({
                status:200,
                message:'data deleted!'
            })
        }
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
module.exports ={
    GET,
    POST,
    PUT,
    DELETE
}