const {fetchAll,fetch} = require('./../../lib/postgres.js')
const { MyError } = require('../../utils/error.js')
const {GETDATA, POSTDATA, PUTDATA, DELETEDATA} = require('./query.js')    

const GET = async () =>{
    try {
        let news = await fetchAll(GETDATA)
        if(news){
            return news
        }else{
             throw new MyError(404,'news not found!')
        }
    } catch (error) {
        throw error
    }
}

const POST = async ({titleuz,titleen,textuz,texten},{filename}) =>{
    try {
        let postData = await fetch(POSTDATA,filename,titleuz,titleen,textuz,texten)
        if(postData){
            return postData
        }else{
            throw new MyError(404,'Something went wrong')
        }
    } catch (error) {
        throw error
    }
}

const PUT = async ({newsId},{filename}) =>{
    try {
        let putNews = await fetch(PUTDATA,filename,newsId)
        if(putNews){
            return putNews
        }else{
            throw new MyError(404,'news not found!')
        }
    } catch (error) {
        throw error
    }
}

const DELETE = async ({newsId}) =>{
    try {
        let deleteNews = await fetch(DELETEDATA,newsId)
        if(deleteNews){
            return deleteNews
        }else{
            throw new MyError(404,'news not found!')
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    GET,
    POST,
    PUT,
    DELETE
}