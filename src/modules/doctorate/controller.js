const { InternalServerError, NotFoundError } = require('../../utils/error.js')
const model = require('./model.js')


async function GET(req,res,next){
  try {
    let doctarete = await model.GET()
    if(doctarete){
        res.status(200).json({
            status:200,
            message:'success',
            data:doctarete
        })
    }
  } catch (error) {
     return next(new InternalServerError(500,error.message))
  }
}

async function POST(req,res,next){
    try {
        let postDoc = await model.POST(req.body)
        if(postDoc){
            res.status(201).json({
                status:201,
                message:'successfully added',
                data:postDoc
            })
        }
    } catch (error) {
        if(error.status === 404){
            return next(new NotFoundError(error.status,error.message))
        }else{
            return next(new InternalServerError(500,error.message))
        }
    }
}

async function PUT(req,res,next){
try {
    let putData = await model.PUT(req.body,req.params)
    if(putData) {
        res.status(202).json({
            status:202,
            message:'data sccessfully updated',
            data:putData
        })
    }
} catch (error) {
    if(error.status === 404){
        return next(new NotFoundError(error.status,error.message))
    }else{
        return next(new InternalServerError(500,error.message))
    }
}
}

async function DELETE(req,res,next){
    try {
        let deleteData = await model.DELETE(req.params)
        if(deleteData) {
            res.status(202).json({
                status:202,
                message:'data sccessfully deleted',
                data:deleteData
            })
        }
    } catch (error) {
        if(error.status === 404){
            return next(new NotFoundError(error.status,error.message))
        }else{
            return next(new InternalServerError(500,error.message))
        }
    }
    }


module.exports = {
    GET,
    POST,
    PUT,
    DELETE
}