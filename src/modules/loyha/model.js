const { fetchAll, fetch } = require('../../lib/postgres.js')
const { MyError } = require('../../utils/error.js')
const {GETLOYHA,POSTLOYHA,OLDLOYHA,PUTLOYHA,DELETELOYHA} = require('./query.js')

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


async function POST({themauz,themaen,author,dedline,tip}){
    try {
        let postLoyha = await fetch(POSTLOYHA,themauz,themaen,author,dedline,tip)
        if(postLoyha){
            return postLoyha
        }else{
            throw new MyError(404,'Something went wrong!')
        }
    } catch (error) {
        throw error
    }
}

async function PUT({themauz,themaen,author,dedline,tip},{loyhaId}){
    try {
        let odeLoyha = await fetch(OLDLOYHA,loyhaId);
        let putLoyha = await fetch(PUTLOYHA,
            themauz ? themauz : odeLoyha.thema_uz,
            themaen ? themaen : odeLoyha.thema_en,
            author ? author : odeLoyha.author,
            dedline ? dedline : odeLoyha.dedline,
            tip ? tip : odeLoyha.tip,
            loyhaId
            );
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