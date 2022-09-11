import { Router } from "express";
import {createWifi, deleteWifi, findAllWifi, findWifiById} from "../controllers/wifiController";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware";
import createSchema from '../schemas/wifiSchemas/wifiCreate'
import { validateJWT } from "../middlewares/validateJwtMiddleware";


const wifiRouter = Router();

wifiRouter.use(validateJWT())
wifiRouter.post("/wifi",schemaValidateMiddleware(createSchema), createWifi);
wifiRouter.get("/wifi", findAllWifi);
wifiRouter.get("/wifi/:id", findWifiById);
wifiRouter.delete("/wifi/:id", deleteWifi);

export default wifiRouter