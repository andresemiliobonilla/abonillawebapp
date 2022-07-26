const Joi = require('@hapi/joi');

const valiLogin = (data) => {
    const schema = Joi.object({
        user: Joi.string().min(6).required(),
        pass: Joi.string().min(6).required()
    })
    return schema.validate(data);
}

module.exports.valiLogin = valiLogin;