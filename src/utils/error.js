class AutolizatsaError extends Error {
    constructor(status,message){
        super()
         this.name= 'AutolizatsaError',
         this.status = status,
         this.message = message
    }
}

class ValidationError extends Error {
    constructor(status,message){
        super()
        this.name = 'ValidationError'
        this.status = status,
        this.message = message
    }
}

class ForbiddinError extends Error {
    constructor(status,message){
        super()
        this.name = 'ForbiddinError'
        this.status = status,
        this.message = message
    }
}

class InternalServerError extends Error {
    constructor(status,message){
        super()
        this.name = 'InternalServerError'
        this.status = status,
        this.message = message
    }
}
class NotFoundError extends Error{
    constructor(status,message){
        super()
        this.name = 'NotFoundError',
        this.status = status,
        this.message = message
    }
}

class MyError extends Error {
    constructor(status,message){
        super()
        this.status = status,
        this.message = message
    }
}

module.exports = {
    AutolizatsaError,
    ValidationError,
    ForbiddinError,
    InternalServerError,
    NotFoundError,
    MyError
}