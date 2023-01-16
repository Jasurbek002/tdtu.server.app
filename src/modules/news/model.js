const {fetchAll,fetch} = require('./../../lib/postgres.js')
const { MyError } = require('../../utils/error.js')
const {GETDATA, POSTDATA, OLDDATA,PUTDATA, DELETEDATA} = require('./query.js')    

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

const PUT = async ({newsId},{titleuz,titleen,textuz,texten},{filename}) =>{
    try {
        let oldNews = await fetch(OLDDATA,newsId)
        
        let putNews = await fetch(
            PUTDATA,
            filename ? filename : oldNews.image,
            titleuz ? titleuz : oldNews.title_uz,
            titleen ? titleen : oldNews.title_en,
            textuz ? textuz : oldNews.text_uz,
            texten ? texten : oldNews.text_en,
            newsId)
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