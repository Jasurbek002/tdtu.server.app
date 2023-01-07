const { GETLOGIN, GETREGISTER,PUTADMIN } = require('./query.js')
const { fetch } = require('./../../lib/postgres.js')
const { InternalServerError, ForbiddinError } = require('../../utils/error.js')
const { verify } = require('../../lib/jwt.js')

const LOGIN = async ({ adminname, password }) => {
    try {
        let admin = await fetch(GETLOGIN, adminname, password)
        return admin
    } catch (error) {
        throw error
    }
}



async function REGISTER({ adminname, password }, { token }) {
    try {
        let { level } = verify(token)
        if (level === 'supperAdmin') {
            let newAdmin = await fetch(GETREGISTER, adminname, password)
            delete newAdmin.password
            return newAdmin
        } else {
            return new ForbiddinError(403, 'you do not have permission to do so')
        }

    } catch (error) {
        throw new Error('username alrady extends!')
    }
}

async function PUT ({password},{token},{userId}) {
     try {
        let {level} = verify(token)
         console.log(level)
        if(level === 'admin' ||'supperAdmin' ){
            let putAdmin = await fetch(PUTADMIN,password,userId)
            delete putAdmin.password
            return putAdmin
        }else{
            return 'you do not have permission to do so'
        }
     } catch (error) {
          throw new InternalServerError(500,error.message)
     }
}


module.exports = {
    LOGIN,
    REGISTER,
    PUT
}