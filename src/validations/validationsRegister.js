const Joi = require('@hapi/joi');

const valiRegister = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).email().required(),
        user: Joi.string().min(6).required(),
        pass: Joi.string().min(6).required()
    })
    return schema.validate(data);
}

module.exports.valiRegister = valiRegister;