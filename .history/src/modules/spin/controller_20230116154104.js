const { InternalServerError, NotFoundError } = require('../../utils/error.js')
const model = require('./model.js')

async function GET(req,res,next){
    try {
        let getSpin = await model.GET()
        if(getSpin){
            res.status(200).json({
                status:200,
                message:'successfuly',
                data:getSpin
            })
        }
    } catch (error) {
        if(error.status === 404){
            return next(new NotFoundError(error.status,error.message))
        }
        throw new InternalServerError(500,error.message)
    }
}

async function POST(req,res,next){
    try {
        console.log('ok');
        let postSpin = await model.POST(req.body)
        if(postSpin){
            res.status(201).json({
                status:201,
                message:'spin-of added successfuly!',
                data:postSpin
            })
        }
    } catch (error) {
        if(error.status === 404){
            return next(new NotFoundError(error.status,error.message))
        }
        return next(new InternalServerError(500,error.message))
    }
}

async function PUT(req,res,next){
    try {
        let putSpin =  await model.PUT(req.body,req.params)
        if(putSpin){
            res.status(200).json({
                status:200,
                message:'updated spin-off',
                data:putSpin
            })
        }
    } catch (error) {
        if(error.status === 404){
            return next(new NotFoundError(error.status,error.message))
        }
        return next(new InternalServerError(500,error.message))
    }
}

async function DELETE(req,res,next){
    try {
        let deleteSpin = await model.DELETE(req.params)
        if(deleteSpin){
            res.status(200).json({
                status:200,
                message:'spin-off deleted!',
                data:deleteSpin
            })
        }
    } catch (error) {
        if(error.status === 404){
            return next(new NotFoundError(error.status,error.message))
        }
        return next(new InternalServerError(500,error.message))
    }
}
module.exports = {
    GET,
    POST,
    PUT,
    DELETE
}