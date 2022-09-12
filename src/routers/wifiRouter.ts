import { Router } from "express";
import {createWifi, deleteWifi, findAllWifi, findWifiById} from "../controllers/wifiController";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware";
import createSchema from '../schemas/wifiSchemas/wifiCreate'
import { validateJWT } from "../middlewares/validateJwtMiddleware";
import deleteSchema from "../schemas/deleteSchemas";


const wifiRouter = Router();

wifiRouter.post("/wifi",schemaValidateMiddleware(createSchema), createWifi);
wifiRouter.get("/wifi", findAllWifi);
wifiRouter.get("/wifi/:id", findWifiById);
wifiRouter.delete("/wifi/:id",schemaValidateMiddleware(deleteSchema), deleteWifi);

export default wifiRouter