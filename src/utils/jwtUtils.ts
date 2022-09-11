import jwt from "jsonwebtoken"

const SECRET:string = process.env.TOKEN_SECRET_KEY || ''

const generateToken = (data: object) => {
	return jwt.sign(data, SECRET)
}
const validateToken = (token: string) => {
	return jwt.verify(token, SECRET)
}

export { generateToken, validateToken }