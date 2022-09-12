import Joi from "joi";

const paramsSchema = Joi.object({

    "id": Joi.string().regex(/^[0-9]{1,3}$/).required()

}).required().options({allowUnknown:true})

const deleteSchema = Joi.object({

    params:paramsSchema,

}).required().options({allowUnknown:true})


export default deleteSchema;