import { Router } from "express";
import { validateJWT } from "../middlewares/validateJwtMiddleware";
import authRouter from "./authRouter";
import cardRouter from "./cardRouter";
import credentialRouter from "./credentialRouter";
import notesRouter from "./notesRouter";
import wifiRouter from "./wifiRouter";


const router = Router();


router.use(authRouter);
router.use(validateJWT())
router.use(credentialRouter);
router.use(notesRouter);
router.use(wifiRouter);
router.use(cardRouter);


export {router}