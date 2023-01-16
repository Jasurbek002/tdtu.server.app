const { InternalServerError } = require('../../utils/error.js')
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
        throw new InternalServerError(500,error.message)
    }
}

