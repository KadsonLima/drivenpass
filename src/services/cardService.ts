import bcrypt from 'bcrypt';
import { CardBody } from '../repositories/cardsRepository';
import * as cardRepository from '../repositories/cardsRepository';
import * as crypt from '../utils/cryptografy';


async function createCard({holderName, 
   number, 
   password, 
   title, 
   cvv,
   expiryDate, 
   userId,
   isVirtual,
   type
}:CardBody) {

    const passwordCrypt = crypt.encryptPassword(password);
    const cvvCrypt = crypt.encryptPassword(cvv);
    const cardData = {
      holderName, 
      number, 
      password:passwordCrypt, 
      title, 
      cvv:cvvCrypt,
      expiryDate, 
      userId,
      isVirtual,
      type
        
    }

   return await cardRepository.createCard(cardData)

}

async function findAllCard(userId:number) {

   const cards = await cardRepository.findAllCard(userId);

   for (const card in cards) {
    cards[card].password = (crypt.decryptPassword(cards[card].password))
    cards[card].cvv = (crypt.decryptPassword(cards[card].cvv))
   }

   return cards

}

async function findCardById(userId:number, cardId:number) {

    const card =  await cardRepository.findCardById(userId, cardId);

    if(!card) throw {code: 404}

    card.cvv = (crypt.decryptPassword(card.cvv))
    card.password = (crypt.decryptPassword(card.password))

    return card
 
 }

 async function deleteCard(userId:number, cardId:number) {

    const card =  await cardRepository.deleteCard(userId, cardId);

    if(card.count === 0) throw {code:404}
    
    return card
 
 }


export {createCard, findAllCard, findCardById, deleteCard}