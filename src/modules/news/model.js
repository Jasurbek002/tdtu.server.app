const {fetchAll,fetch} = require('./../../lib/postgres.js')
const { MyError } = require('../../utils/error.js')
const {GETDATA, POSTDATA, OLDDATA,PUTDATA, DELETEDATA,ONENEWS} = require('./query.js')    

const GET_ONE = async ({newsId}) =>{
    try {
        let newsOne = await fetch(ONENEWS,newsId)
        if(newsOne){
            return newsOne
        }else{
            throw new MyError(404,'news not found!')
        }
    } catch (error) {
        throw error
    }
}

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

const POST = async ({titleuz,titleen,link},{filename}) =>{
    try {
        let postData = await fetch(POSTDATA,filename,titleuz,titleen,link)
        if(postData){
            return postData
        }else{
            throw new MyError(404,'Something went wrong')
        }
    } catch (error) {
        throw error
    }
}

const PUT = async ({newsId},{titleuz,titleen,link},{filename}) =>{
    try {
        let oldNews = await fetch(OLDDATA,newsId)
        
        let putNews = await fetch(
            PUTDATA,
            filename ? filename : oldNews.image,
            titleuz ? titleuz : oldNews.title_uz,
            titleen ? titleen : oldNews.title_en,
            link ? link : oldNews.link,
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
    DELETE,
    GET_ONE
}