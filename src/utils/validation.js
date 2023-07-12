const Joi = require('joi')

const loginSchema = Joi.object({
    adminname:Joi.string().required().min(3).max(50),
    password:Joi.string().min(6).max(12).required()
})

const registerSchema = Joi.object({
    adminname:Joi.string().required().min(3).max(50),
    password:Joi.string().min(6).max(12).required(),
    status:Joi.string(),
    role:Joi.string().max(1).required()
})

const editeSchema = Joi.object({
    password:Joi.string().min(6).max(10).required()
})

module.exports = {
    loginSchema,
    registerSchema,
    editeSchema
}