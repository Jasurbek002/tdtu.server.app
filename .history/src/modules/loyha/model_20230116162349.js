const { fetchAll } = require('../../lib/postgres.js')
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