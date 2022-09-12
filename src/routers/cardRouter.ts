import { Router } from "express";
import {createCard, deleteCard, findAllCard, findCardById} from "../controllers/cardsController";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware";
import createSchema from '../schemas/cardSchemas/cardCreate'
import deleteSchema from "../schemas/deleteSchemas";


const cardRouter = Router();

cardRouter.post("/card",schemaValidateMiddleware(createSchema), createCard);
cardRouter.get("/card", findAllCard);
cardRouter.get("/card/:id", findCardById);
cardRouter.delete("/card/:id",schemaValidateMiddleware(deleteSchema), deleteCard);

export default cardRouter