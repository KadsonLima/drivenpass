import { Router } from "express";
import {createCredential, deleteCredential, findAllCredential, findCredentialById} from "../controllers/credentialsController";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware";
import createSchema from '../schemas/credentialSchemas/credentialCreate'
import { validateJWT } from "../middlewares/validateJwtMiddleware";
import deleteSchema from "../schemas/deleteSchemas";


const credentialRouter = Router();

credentialRouter.post("/credential",schemaValidateMiddleware(createSchema), createCredential);
credentialRouter.get("/credential", findAllCredential);
credentialRouter.get("/credential/:id", findCredentialById);
credentialRouter.delete("/credential/:id",schemaValidateMiddleware(deleteSchema), deleteCredential);

export default credentialRouter