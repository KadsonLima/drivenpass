import Joi from "joi";

const bodySchema = Joi.object({

    title:Joi.string().required(),
    
    name:Joi.string().required(),

    password:Joi.string().required()

}).required().options({allowUnknown:false})

const createSchema = Joi.object({

    body:bodySchema,

}).required().options({allowUnknown:true})


export default createSchema;