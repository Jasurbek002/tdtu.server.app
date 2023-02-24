const { InternalServerError, NotFoundError } = require('../../utils/error.js')
const model = require('./model.js')
const fileUpload = require('./../../lib/multer.js').single('logo')

const path = require('path')
const fs = require('fs')

async function GET (req,res,next){
    try {
        let partners = await model.GET()
        if(partners){
            res.status(200).json({
                status:200,
                message:'successfuly!',
                data:partners
            })
        }
    } catch (error) {
        if(error.status === 404){
            return next(new NotFoundError(error.status,error.message))
        }
        return next(new InternalServerError(500,error.message))
    }
}
async function POST(req,res,next){
    try {
        let postData = await model.POST(req.body,req.file)
        if(postData){
            res.status(200).json({
                status:200,
                message:'Successfuly added!',
                data:postData
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
        let putData = await model.PUT(req.file,req.body,req.params)
        if(putData){
            fs.unlinkSync(path.join('src','uploads',req.body.deleteImage))
            res.status(200).json({
                status:200,
                message:'successfuly updated',
                data:putData
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
        let putData = await model.DELETE(req.params)
        if(putData){
            fs.unlinkSync(path.join('src','uploads',req.body.deleteImage))
            res.status(200).json({
                status:200,
                message:'successfuly deleted',
                data:putData
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
    DELETE,
    fileUpload
}