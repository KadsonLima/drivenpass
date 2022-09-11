import { Router } from "express";
import {createCredential, deleteCredential, findAllCredential, findCredentialById} from "../controllers/credentialsController";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware";
import createSchema from '../schemas/credentialSchemas/credentialCreate'
import { validateJWT } from "../middlewares/validateJwtMiddleware";


const credentialRouter = Router();

credentialRouter.use(validateJWT())
credentialRouter.post("/credential",schemaValidateMiddleware(createSchema), createCredential);
credentialRouter.get("/credential", findAllCredential);
credentialRouter.get("/credential/:id", findCredentialById);
credentialRouter.delete("/credential/:id", deleteCredential);

export default credentialRouter