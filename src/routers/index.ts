import { Router } from "express";
import authRouter from "./authRouter";
import credentialRouter from "./credentialRouter";
import notesRouter from "./notesRouter";
import wifiRouter from "./wifiRouter";


const router = Router();


router.use(authRouter);
router.use(credentialRouter);
router.use(notesRouter);
router.use(wifiRouter);


export {router}