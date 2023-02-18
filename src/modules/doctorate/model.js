const { fetchAll, fetch } = require("../../lib/postgres");
const { MyError } = require("../../utils/error");
const {GETDATA,POSTDATA,PUTDATA,DELETEDATA,OLDDATA} = require('./query.js')

async function GET(){
    try {
        let data = await fetchAll(GETDATA)
        if(data) return data
    } catch (error) {
        throw error
    }
}

async function POST({fullname,special,job}){
 try {
    let postData = await fetch(POSTDATA,fullname,special,job)
    if(postData){
        return postData
    }else{
        throw new MyError(403,'something to wrong')
    }
 } catch (error) {
    throw error
 }
}

async function PUT({fullname,special,job},{docId}){
    try {
        let oldData = await fetch(OLDDATA,docId);
        let putData = await fetch(PUTDATA,
            fullname?fullname:oldData.full_name,
            special?special:oldData.special,
            job?job:oldData.job,
            docId
            );
            if(putData){
                return putData
            }else{
                throw new MyError(404,'data not found')
            }
    } catch (error) {
        throw error
    }
}

async function DELETE({docId}){
try {
    let deleteData = await fetch(DELETEDATA,docId);
    if(deleteData){
        return deleteData;
    }else{
        throw new MyError(404,"data not found")
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