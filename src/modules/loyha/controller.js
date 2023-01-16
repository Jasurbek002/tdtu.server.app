const { InternalServerError } = require('../../utils/error.js')
const model = require('./model.js')


async function GET(req,res,next){
    try {
        let getLoyha = await model.GET()
        if(getLoyha){
            res.status(200).json({
                status:200,
                message:'successfuly!',
                data:getLoyha
            })
        }
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}

async function POST(req,res,next){
    try {
        let postLoyha = await model.POST(req.body)
        if(postLoyha){
            res.status(201).json({
                status:201,
                message:"Loyha successfuly added!",
                data:postLoyha
            })
        }
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}

async function PUT(req,res,next){
    try {
        let putLoyha = await model.PUT(req.body,req.params)
        if(putLoyha){
            res.status(200).json({
                status:200,
                message:"Loyha successfuly updated!",
                data:putLoyha
            })
        }
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}

async function DELETE(req,res,next){
try {
    let deleteLoyha = await model.DELETE(req.params)
    if(deleteLoyha){
        res.status(200).json({
            status:200,
            message:"Loyha deleted!",
            data:deleteLoyha
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
    DELETE
}