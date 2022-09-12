import Joi from "joi";

const bodySchema = Joi.object({

    number: Joi.string().required(),

	title: Joi.string().required(),

	holderName: Joi.string().required(),

	password: Joi.string().required(),

	cvv: Joi.string().length(3).required(),

	expiryDate: Joi.date().required(),

	isVirtual: Joi.boolean().strict().required(),

	type: Joi.string().valid("credit", "debit", "credit_debit").required(),

}).required().options({allowUnknown:false})

const createSchema = Joi.object({

    body:bodySchema,

}).required().options({allowUnknown:true})


export default createSchema;