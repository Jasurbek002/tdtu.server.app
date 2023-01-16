const { fetchAll, fetch } = require('../../lib/postgres')
const { MyError } = require('../../utils/error')
const {GETSPIN, POSTSPIN, PUTSPIN, DELETESPIN} = require('./query.js')

async function GET(){
    try {
        let spin = await fetchAll(GETSPIN)
        if(spin){
            return spin
        }else{
            throw new MyError(404,'not found')
        }
    } catch (error) {
        throw error
    }
}

async function POST({nameen,tetxuz,texten,responsble}){
    try {
        let postSpin =  await fetch(POSTSPIN,nameen,tetxuz,texten,responsble)
        if(postSpin){
            return postSpin
        }else{
            throw new MyError(404,'something went wrong!')
        }
    } catch (error) {
        throw error
    }
}

async function PUT({nameen,tetxuz,texten,responsble},{spinId}){
    try {
        let oldSpin = await fetch(OLDSPIN,spinId)
        let putSpin = await fetch(
            PUTSPIN,
            nameen ? nameen : oldSpin.name_en,
            tetxuz ? tetxuz : oldSpin.text_uz, 
            texten ? texten : oldSpin.text_en,
            responsble,
            spinId
            );
            if(putSpin){
                return putSpin
            }else{
                throw new MyError(404,'spin-of not found')
            }
    } catch (error) {
        throw error
    }
}

async function DELETE({spinId}){
    try {
        let deleteSpin = await fetch(DELETESPIN,spinId)
        if(deleteSpin){
            return deleteSpin
        }else{
            throw new MyError(404,'spin-off not found')
        }
    } catch (error) {
        throw error
    }
}
module.exports= {
    GET,
    POST,
    PUT,
    DELETE
}