const path = require('path')
const fs = require('fs');
const { InternalServerError } = require('../../utils/error');

async function TECHNIZOM(req,res,next){
    try { 
        let file =path.join(process.cwd(),'src','pdfs','technizom.pdf')
        res.status(200).download(file)
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
async function TECHKENGASH(req,res,next){
    try { 
        let file =path.join(process.cwd(),'src','pdfs','techkengash.pdf')
        res.status(200).download(file)
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
async function ATOQLI(req,res,next){
    try { 
        let file =path.join(process.cwd(),'src','pdfs','atoqli.pdf')
        res.status(200).download(file)
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
async function GIDRO(req,res,next){
    try { 
        let file =path.join(process.cwd(),'src','pdfs','gidro.pdf')
        res.status(200).download(file)
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
async function REKTOR(req,res,next){
    try { 
        let file =path.join(process.cwd(),'src','pdfs','rektor.pdf')
        res.status(200).download(file)
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
async function PREZDENT(req,res,next){
    try { 
        let file =path.join(process.cwd(),'src','pdfs','prezdenet.pdf')
        res.status(200).download(file)
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
async function MAGISTER(req,res,next){
    try { 
        let file =path.join(process.cwd(),'src','pdfs','magister.pdf')
        res.status(200).download(file)
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
module.exports = {
    TECHNIZOM,
    TECHKENGASH,
    REKTOR,
    GIDRO,
    MAGISTER,
    PREZDENT,
    ATOQLI
}