const {verify} = require('../lib/jwt.js')
const { ForbiddinError, InternalServerError } = require('../utils/error.js')

module.exports = (req,res,next) =>{
     try {
        if(req.url ==='/login' || req.url ==='/register'){
            return next()
        }
        let {token} = req.headers
        if(token){
            let {status} = verify(token)
             if(status === 'admin' || status === 'supperAdmin'){
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



