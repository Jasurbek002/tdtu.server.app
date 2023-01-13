const { InternalServerError } = require("../../utils/error");
const model = require("./model.js");
const multer = require('./../../lib/multer.js')
const fileUpload = multer.single('banner')

const fs = require('fs')
const path = require('path')

async function GET(req,res,next){
    try {
        let data = await model.GET()
        if(data){
            res.status(200).json({
                status:200,
                message:'successfuly!',
                data:data
            })
        }
    } catch (error) {
        return next( new InternalServerError(500,error.message))
    }
}

async function POST(req,res,next) {
try {
    let postData = await model.POST(req.file)
    if(postData){
        res.status(200).json({
            status:200,
            message:'image added!',
            data:postData
        })
    }
} catch (error) {
    return next( new InternalServerError(500,error.message))
}
}

async function PUT(req,res,next) {
    try {  
        let putData = await model.PUT(req.params,req.file)   
        if(putData){
            fs.unlinkSync(path.join('src','uploads',req.body.deleteImage))
            res.status(200).json({
                status:200,
                message:'image updated!',
                data:putData
            })
        }
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
    }


    async function DELETE(req,res,next) {
        try {
            let deleteData = await model.DELETE(req.params)
            if(deleteData){
                fs.unlinkSync(path.join('src','uploads',req.body.deleteImage))
                res.status(200).json({
                    status:200,
                    message:'image added!',
                    data:deleteData
                })
            }
        } catch (error) {
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