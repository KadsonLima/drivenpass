import bcrypt from 'bcrypt';
import { SignUpBody, SignInBody } from '../repositories/authRepositorie';
import * as authRepository from '../repositories/authRepositorie'
const BCRYPT_SECRET = Number(process.env.BCRYPT_SECRET)



async function signUp({ name, email, password }:SignUpBody) {

    const passwordCrypt = bcrypt.hashSync(password, BCRYPT_SECRET)
    
    const dataUser = {
        name,
        password:passwordCrypt,
        email
    }

    authRepository.createUser(dataUser)

}

async function signIn({ email, password }:SignInBody) {

    
    const findUser = await authRepository.findUser({email, password})

    const passwordVerify = findUser&&bcrypt.compareSync(password, findUser.password)

    if( !findUser || !passwordVerify ) throw {code:401, message:"Password or email Incorret !!"}

    return findUser
}

export {signUp, signIn}