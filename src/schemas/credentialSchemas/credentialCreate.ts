import Joi from "joi";

const bodySchema = Joi.object({

    url:Joi.string().uri().required(),

    userName:Joi.string().required(),

    password:Joi.string().required(),

    title:Joi.string().required(),

    name:Joi.string().required(),

    label:Joi.string().required()

}).required().options({allowUnknown:false})

const createSchema = Joi.object({

    body:bodySchema,

}).required().options({allowUnknown:true})


export default createSchema;