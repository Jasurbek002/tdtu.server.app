const { GETLOGIN, GETREGISTER,PUTADMIN,GETDELETE,GET_ADMINS} = require('./query.js')
const { fetch, fetchAll } = require('./../../lib/postgres.js')
const { InternalServerError, ForbiddinError, NotFoundError } = require('../../utils/error.js')
const { verify } = require('../../lib/jwt.js')

async function GET({token}){
    let { level } = verify(token)
    if (level === 'supperAdmin') {
        let newAdmin = await fetchAll(GET_ADMINS)
        return newAdmin
    } else {
        return new ForbiddinError(403, 'you do not have permission to do so')
    }
}

const LOGIN = async ({ adminname, password }) => {
    try {
        let admin = await fetch(GETLOGIN, adminname, password)
        return admin
    } catch (error) {
        throw error
    }
}



async function REGISTER({ adminname, password,role,status='admin' }, { token }) {
    try {
        let { level } = verify(token)
        if (level === 'supperAdmin') {
            let newAdmin = await fetch(GETREGISTER, adminname, password,status,role)
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
        if(level === 'admin' || level ==='supperAdmin' ){
            let putAdmin = await fetch(PUTADMIN,password,userId)
            if(putAdmin){
                delete putAdmin.password
                return putAdmin
            }else{
                throw new NotFoundError(404,'admin not found')
            }
            
        }else{
            throw new ForbiddinError(403,'you do not have permission to do so')
        }
     } catch (error) {
          throw error
     }
}

async function DELETE ({token},{adminId}) {
  try {
    let {level} = verify(token)
    if(level === 'supperAdmin'){
        let deleteAdmin = await fetch(GETDELETE,adminId)
        delete deleteAdmin.password
        return deleteAdmin
    }else{
        throw new ForbiddinError(403,'you do not have permission to do so')
    }
    
  } catch (error) {
      throw error
  }
}


module.exports = {
    LOGIN,
    REGISTER,
    PUT,
    DELETE,
    GET
}