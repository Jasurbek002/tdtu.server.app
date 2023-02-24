const { fetchAll, fetch } = require('../../lib/postgres')
const {GETDATA,POSTIMG, POSTDATA, DELETEDATA} = require('./query.js')



async function GET(){
try {
    let inno = await fetchAll(GETDATA)
     return inno
} catch (error) {
    console.log(error)
}
}

async function POST({title}){
    try {
        let innoTitle = await fetch(POSTDATA,title)
        return innoTitle.inno_id
    } catch (error) {
        throw error
    }
}
async function postImage({filename},{innoId}){
     try {
        let innoImg = await fetch(POSTIMG,filename,innoId)
        return innoImg
     } catch (error) {
        throw error
     }
}

async function DELETE({innoId}){
    try {
        let innoDelete = await fetch(DELETEDATA,innoId)
        return innoDelete
    } catch (error) {
         throw error
    }
}

module.exports = {
GET,
POST,
DELETE,
postImage
}