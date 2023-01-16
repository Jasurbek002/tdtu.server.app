const { fetchAll, fetch } = require('../../lib/postgres.js')
const { MyError } = require('../../utils/error.js')
const {} = require('./query.js')

async function GET(){
    try {
        let getLoyha = await fetchAll(GETLOYHA)
        if(getLoyha){
            return getLoyha
        }else{
            throw new MyError(404,'loyha not found')
        }
    } catch (error) {
        throw error
    }
}

async function POST({}){
    try {
        let postLoyha = await fetch(POSTLOYHA,)
        if(postLoyha){
            return postLoyha
        }else{
            throw new MyError(404,'loyha added!')
        }
    } catch (error) {
        throw error
    }
}

async function PUT({}){
    try {
        let putLoyha = await fetch(PUTLOYHA,)
        if(putLoyha){
            return putLoyha
        }else{
            throw new MyError(404,'loyha updated!')
        }
    } catch (error) {
        throw error
    }
}

async function DELETE({loyhaId}){
    try {
        let deleteLoyha = await fetch(DELETELOYHA,loyhaId)
        if(deleteLoyha){
            return deleteLoyha
        }else{
            throw new MyError(404,'loyha deleted!')
        }
    } catch (error) {
        
    }
}

module.exports = {
    GET,
    POST,
    PUT,
    DELETE
}