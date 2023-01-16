const { fetchAll, fetch } = require('../../lib/postgres')
const { MyError } = require('../../utils/error')
const {GETSPIN, POSTSPIN, PUTSPIN} = require('./query.js')

async function GET(){
    try {
        let spin = await fetchAll(GETSPIN)
        if(spin){
            return spin
        }else{
            throw MyError(404,'not found')
        }
    } catch (error) {
        throw error
    }
}

async function POST({nameuz,nameen,tetxuz,texten,responsble}){
    try {
        let postSpin =  await fetch(POSTSPIN,nameuz,nameen,tetxuz,texten,responsble)
        if(postSpin){
            return postSpin
        }else{
            throw new MyError(404,'something went wrong!')
        }
    } catch (error) {
        throw error
    }
}

async function PUT({nameuz,nameen,tetxuz,texten,responsble},{spinId}){
    try {
        let oldSpin = await fetch(OLDSPIN,spinId)
        let putSpin = await fetch(
            PUTSPIN,
            nameuz ? nameuz : oldSpin.name_uz,
            nameen ? nameen : oldSpin.name_en,
            tetxuz,
            texten,
            responsble,
            spinId
            );
    } catch (error) {
        
    }
}

module.exports= {
    GET,
    POST
}