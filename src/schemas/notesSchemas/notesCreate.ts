import Joi from "joi";

const bodySchema = Joi.object({

    title:Joi.string().max(50).required(),

    content:Joi.string().max(1000).required()

}).required().options({allowUnknown:false})

const createSchema = Joi.object({

    body:bodySchema,

}).required().options({allowUnknown:true})


export default createSchema;