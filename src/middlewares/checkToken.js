const {verify} = require('../lib/jwt.js')
const { ForbiddinError, InternalServerError } = require('../utils/error.js')

module.exports = (req,res,next) =>{
     try {
        if(req.url ==='/v1/login' || req.url ==='/v1/register'){
            return next()
        }
        if(req.method === 'get'){
         return next()
        }
        let {token} = req.headers
        if(token){
            let {level} = verify(token)
            
             if(level === 'admin' || level === 'supperAdmin'){
                return next()
             }else {
                return next( new ForbiddinError (403,'your are not admin'))
             }
            
        }else{
           return next(new ForbiddinError (403,'token require'))
        }
     } catch (error) {
        return next( new InternalServerError(500,error.message))
     }
}



