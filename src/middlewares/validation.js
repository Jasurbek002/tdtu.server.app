const { ValidationError } = require('../utils/error')
const {loginSchema,registerSchema, editeSchema} = require('./../utils/validation.js')

module.exports = (req,res,next) =>{
    try {
        if(req.url === '/login'){
            let {error} = loginSchema.validate(req.body)
            if(error) throw error
        }
        if(req.url === '/register'){
            let {error} = registerSchema.validate(req.body)
            if(error) throw error
        }
        if(req.url === '/edit/'){
            let {error} = editeSchema.validate(req.body)
            if(error) throw error
        }
        return next()
    } catch (error) {
         return next(new ValidationError(401,error.message))
    }
}