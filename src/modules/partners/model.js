const { GETDATA, POSTDATA, PUTDATA, DELETEDATA } = require('./query.js')

const { fetchAll, fetch } = require('../../lib/postgres.js')
const { MyError } = require('../../utils/error.js')

async function GET() {
    try {
        let getData = await fetchAll(GETDATA)
        if (getData) {
            return getData
        } else {
            throw new MyError(404, 'not found')
        }
    } catch (error) {
        throw error
    }
}

async function POST({link},{filename}) {
    try {   
        let postData = await fetch(POSTDATA,filename,link)
        if (postData) {
            return postData
        } else {
            throw new MyError(400, 'Something went wrong')
        }
    } catch (error) {
        throw error
    }
}

async function PUT({ filename }, { link }, { partId }) {
    try {
        let putData = await fetch(PUTDATA, filename, link, partId);
        if (putData) {
            return putData
        } else {
            throw new MyError(404, 'partner not found!')
        }
    } catch (error) {
        throw error
    }
}

async function DELETE({partId}){
    try {
        let deleteData = fetch(DELETEDATA,partId)
        if(deleteData){
            return deleteData
        }else{
            throw new MyError(404,'partner not found!')
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