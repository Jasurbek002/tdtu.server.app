const { InternalServerError, NotFoundError } = require('../../utils/error.js')
const model = require('./model.js')
const multer = require('../../lib/multer.js')
const upladPhotos = multer.single('photo')

async function GET (req,res,next){
    try {
        let getInno = await model.GET()
        if(getInno){
            res.status(200).json({
                status:200,
                message:'successfully',
                data:getInno
            })
        }
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}

async function POST(req,res,next){
    try {
        let postInno = await model.POST(req.body)
         if(postInno){
            res.status(201).json({
                status:201,
                message:'Successfully added!',
                data:postInno
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

async function POSTIMAGE(req,res,next){
    try {
        let postImg = await model.postImage(req.file,req.body)
        if(postImg){
          res.status(201).json({
            status:201,
            message:'file saccessfully added',
            file:postImg
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
        res.status(203).json({
            status:203,
            message:'successfully deleted',
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
    POSTIMAGE,
    upladPhotos,
    DELETE
}