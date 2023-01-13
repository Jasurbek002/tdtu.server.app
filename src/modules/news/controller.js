const model = require('./model.js')
const uploadFile = require('../../lib/multer.js').single('newsImg')
const {InternalServerError, NotFoundError} = require('./../../utils/error.js')

async function GET(req,res,next){
    try {
        let news = await model.GET()
        if(news){
            res.status(200).json({
                status:200,
                message:'successfuly!',
                data:news
            })
        }
    } catch (error) {
        if(error.status === 404){
            return next( new NotFoundError(error.status,error.message))
        }
        return next( new InternalServerError(500,error.message))
    }
}

async function POST(req,res,next){
    try {
        let postNews = await model.POST(req.body,req.file)
        if(postNews){
            res.status(200).json({
                status:200,
                message:'news add successfuly!',
                data:postNews
            })
        }
    } catch (error) {
        if(error.status === 404){
            return next( new NotFoundError(error.status,error.message))
        }
        return next(new InternalServerError(500,error.message))
    }
}

async function PUT(req,res,next){
    try {
        let putNews = await model.PUT(req.params,req.file)
        if(putNews){
            res.status(200).json({
                status:200,
                message:'news successfuly updated!'
            })
        }
    } catch (error) {
        if(error.status === 404){
            return next( new NotFoundError(error.status,error.message))
        }
        return next(new InternalServerError(500,error.message))
    }
}

async function DELETE(req,res,next){
    try {
        let deleteNews = await model.DELETE(req.params)
        if(deleteNews){
            res.status(200).json({
                status:200,
                message:'news deleted successfuly',
                data:deleteNews
            })
        }
    } catch (error) {
        if(error.status === 404){
            return next( new NotFoundError(error.status,error.message))
        }
        return next(new InternalServerError(500,error.message))
    }
}


module.exports = {
    GET,
    POST,
    PUT,
    DELETE,
    uploadFile
}