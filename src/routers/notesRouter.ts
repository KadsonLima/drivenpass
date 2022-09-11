import { Router } from "express";
import {createNotes, deleteNotes, findAllNotes, findNotesById} from "../controllers/notesController";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware";
import createSchema from '../schemas/notesSchemas/notesCreate'
import { validateJWT } from "../middlewares/validateJwtMiddleware";


const notesRouter = Router();

notesRouter.use(validateJWT())
notesRouter.post("/notes",schemaValidateMiddleware(createSchema), createNotes);
notesRouter.get("/notes", findAllNotes);
notesRouter.get("/notes/:id", findNotesById);
notesRouter.delete("/notes/:id", deleteNotes);

export default notesRouter